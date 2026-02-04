import { createMiddleware } from "@solidjs/start/middleware";
import { createSupabaseServer } from "~/lib/supabase";

export default createMiddleware({
    onRequest: [
        async (event) => {
            const url = new URL(event.request.url);

            // Nanti kalau mau nambahin page yang di protected tinggal tambahin element dibawah ini ya.
            const protectedPaths = ["/dashboard", "/settings", "/profile"];
            const isProtected = protectedPaths.some(path => url.pathname.startsWith(path));

            if (isProtected) {
                const supabase = createSupabaseServer(event);
                const { data: { user }, error } = await supabase.auth.getUser();

                if (error || !user) {
                    return new Response(null, {
                        status: 302,
                        headers: {
                            Location: "/login",
                        },
                    });
                }
            }
        },
    ]
})