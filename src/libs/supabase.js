import { createServerClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";
import { getRequestEvent } from "solid-js/web"
import { H3Event } from "vinxi/http"

export function createSupabaseServer(eventOrNull) {
    const event = eventOrNull ?? getRequestEvent()
    if (!event) {
        throw new Error("No request event found. Are you using this on the client?");
    }

    return createServerClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() { return parseCookieHeader(event.request.headers.get("Cookie") ?? ""); },
                setAll(cookies) {
                    try {
                        cookies.forEach(({name, value, options}) => {
                            event.response.headers.append(
                                "Set-Cookie",
                                serializeCookieHeader(name, value, options)
                            );
                        });
                    } catch (error) {
                        // TODO: Handle the error.
                    }
                }
            }
        }
    )
}