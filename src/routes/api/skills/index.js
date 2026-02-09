import { json } from "@solidjs/router";
import { createSupabaseServer } from "../../../libs/supabase";

export async function GET(event) {
  const supabase = createSupabaseServer(event);

  const { data, error } = await supabase
    .from("Skills")
    .select("*");

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json(data);
}

export async function POST(event) {
  const supabase = createSupabaseServer(event);
  const body = await event.request.json();

  if (!body.name) {
    return json({ error: "Name is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("Skills")
    .insert([{ name: body.name, level: body.level }])
    .select();

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json(data[0], { status: 201 });
}
