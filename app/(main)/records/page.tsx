"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { Players } from "@/lib/utils";

type Match = {
  id: number;
  match_date: string;
  faisal_goals: number;
  rayed_goals: number;
  faisal_shots_on_target?: number;
  rayed_shots_on_target?: number;
  faisal_yellow_cards?: number;
  rayed_yellow_cards?: number;
  faisal_red_cards?: number;
  rayed_red_cards?: number;
};

const RecordsPage = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch("/api/matches");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to load matches");

        setMatches(data);
      } catch (err) {
        console.error("Error fetching matches:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const getWinner = (match: Match) => {
    if (match.faisal_goals > match.rayed_goals) return Players.Faisal;
    if (match.faisal_goals < match.rayed_goals) return Players.Rayed;
    return "Draw";
  };

  const getWinnerTextClass = (match: Match) => {
    const winner = getWinner(match);
    if (winner === Players.Faisal) return "fai-text";
    if (winner === Players.Rayed) return "ray-text";
    return "";
  };

  if (loading) {
    return <p>Loading match records...</p>;
  }

  if (matches.length === 0) {
    return (
      <div>
        <h1 className="text-4xl mb-6">Records Page</h1>
        <div className="flex justify-end mb-4">
          <Link href="/new-game">
            <Button className="text-lg">New Game</Button>
          </Link>
        </div>
        <p>No matches yet! Start by adding one.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl mb-6">Records Page</h1>
      <div className="flex justify-end mb-4">
        <Link href="/new-game">
          <Button className="text-lg">New Game</Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Winner</TableHead>
            <TableHead>Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matches.map((match) => (
            <TableRow
              key={match.id}
              className={`${getWinnerTextClass(match)} text-2xl`}
            >
              <TableCell>{match.match_date}</TableCell>
              <TableCell>{getWinner(match)}</TableCell>
              <TableCell>
                {match.faisal_goals} - {match.rayed_goals}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecordsPage;
