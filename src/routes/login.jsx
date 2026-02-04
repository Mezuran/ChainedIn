import { action, redirect } from "@solidjs/router";
import { createSupabaseServer } from "~/libs/supabase";

async function handleLogin(formData) {
    "use server"

    const email = String(formData.get('email'))
    const password = String(formData.get('password'))

    const supabase = createSupabaseServer()

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        return new Error(error.message);
    }

    throw redirect("/");
}

export default function Login() {
    // TODO: Bikinin SignUp page nya juga ya Ailyn atau Daffa.
    //       ~ Kai
    return (<></>)
}