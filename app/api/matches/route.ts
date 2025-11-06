import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { faisal, rayed } = body;

    const { error } = await supabase.from("matches").insert([
      {
        faisal_goals: faisal.goals,
        faisal_shots_on_target: faisal.shots,
        faisal_yellow_cards: faisal.yellow,
        faisal_red_cards: faisal.red,
        rayed_goals: rayed.goals,
        rayed_shots_on_target: rayed.shots,
        rayed_yellow_cards: rayed.yellow,
        rayed_red_cards: rayed.red,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const { data, error } = await supabase
    .from("matches")
    .select("*")
    .order("match_date", { ascending: false });

  if (error) {
    console.error("Supabase fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
