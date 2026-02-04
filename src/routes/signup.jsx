import { action, redirect } from "@solidjs/router";
import { createSupabaseServer } from "~/lib/supabase";

async function handleSignUp(formData) {
    "use server"

    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));

    if (password !== confirmPassword) {
        return new Error("Passwords do not match");
    }

    const supabase = createSupabaseServer();
    const { error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        return new Error(error.message);
    }

    throw redirect("/login");
}

export default function SignUp() {
    // TODO: Bikinin Login page nya juga ya Ailyn atau Daffa.
    //       ~ Kai
    return (<></>)
}