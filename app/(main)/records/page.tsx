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

const games = [
  { id: 1, date: "2025-10-01", winner: "Alice", score: "3 - 2" },
  { id: 2, date: "2025-10-05", winner: "Bob", score: "4 - 1" },
  { id: 3, date: "2025-10-12", winner: "Charlie", score: "2 - 2 (PK 4-3)" },
  { id: 4, date: "2025-10-20", winner: "Dana", score: "1 - 0" },
];

const Records = () => {
  return (
    <div>
      <h1 className="text-4xl mb-6">Records Page</h1>
      <div className="flex justify-end">
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
          {games.map((game) => (
            <TableRow key={game.id}>
              <TableCell>{game.date}</TableCell>
              <TableCell>{game.winner}</TableCell>
              <TableCell>{game.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Records;
