"use client";

import PlayerBarChart from "@/components/charts/bar-chart";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

const AnalyticsPage = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase.rpc("get_stats_last_30_days");

      if (error) {
        console.error("Error fetching stats:", error);
      } else {
        setStats(data || []);
      }

      console.log(data);

      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p>Loading analytics...</p>;
  }

  return (
    <div>
      <h1 className="text-4xl mb-6">Analytics Page (Last 30 Days)</h1>

      <PlayerBarChart title="Performance Comparison" data={stats} />
    </div>
  );
};

export default AnalyticsPage;
