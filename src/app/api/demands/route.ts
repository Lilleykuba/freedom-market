import { supabaseServer } from "@/utils/supabase/server";
import { z } from "zod";

const Demand = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  price_czk: z.number().positive().optional(),
});

export async function GET() {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("demands")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return Response.json({ error }, { status: 500 });
  return Response.json(data);
}

export async function POST(req: Request) {
  const supabase = supabaseServer();
  const body = Demand.parse(await req.json());
  const { data, error } = await supabase
    .from("demands")
    .insert(body)
    .select()
    .single();
  if (error) return Response.json({ error }, { status: 400 });
  return Response.json(data, { status: 201 });
}
