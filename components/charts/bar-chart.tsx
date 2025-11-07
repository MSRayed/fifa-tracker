"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type PlayerBarChartProps = {
  title: string;
  data: {
    label: string;
    faisal: number;
    rayed: number;
  }[];
  xLabel?: string;
  yLabel?: string;
  barColors?: {
    faisal?: string;
    rayed?: string;
  };
};

export default function PlayerBarChart({
  title,
  data,
  xLabel = "Stat Type",
  yLabel = "Value",
  barColors = {
    faisal: "var(--color-orange-400)",
    rayed: "var(--color-sky-400)",
  },
}: PlayerBarChartProps) {
  return (
    <Card className="w-full mt-16">
      <CardHeader>
        <CardTitle className="font-light text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              label={{ value: xLabel, position: "bottom" }}
            />
            <YAxis
              label={{ value: yLabel, angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            {/* <Legend /> */}
            <Bar
              dataKey="faisal"
              fill={barColors.faisal}
              name="Faisal"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="rayed"
              fill={barColors.rayed}
              name="Rayed"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
