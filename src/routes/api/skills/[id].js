import { json } from "@solidjs/router";
import { createSupabaseServer } from "../../../libs/supabase";

export async function GET(event) {
  const supabase = createSupabaseServer(event);
  const id = event.params.id;

  const { data, error } = await supabase
    .from("Skills")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return json({ error: error.message }, { status: 404 });
  }

  return json(data);
}

export async function PUT(event) {
  const supabase = createSupabaseServer(event);
  const id = event.params.id;
  const body = await event.request.json();

  const { data, error } = await supabase
    .from("Skills")
    .update({
      name: body.name,
      level: body.level
    })
    .eq("id", id)
    .select();

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json(data[0]);
}

export async function DELETE(event) {
  const supabase = createSupabaseServer(event);
  const id = event.params.id;

  const { error } = await supabase
    .from("Skills")
    .delete()
    .eq("id", id);

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json({ message: "Deleted successfully" });
}
