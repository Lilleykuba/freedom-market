// utils/supabase/server.ts
import { cookies } from "next/headers";
import { CookieOptions } from "@supabase/ssr";
import { createServerClient } from "@supabase/ssr";

export function supabaseServer() {
  const store = cookies();

  // Map Next's cookie store → the shape @supabase/ssr wants
  const cookieAdapter: CookieOptions = {
    /** Return *all* cookies as { name, value } objects */
    getAll() {
      // store.getAll() is available in Next 15+
      return store.getAll().map(({ name, value }) => ({ name, value }));
    },

    /** Set or overwrite multiple cookies */
    async setAll(cookiesToSet) {
      cookiesToSet.forEach(({ name, value, ...opts }) =>
        store.set({ name, value, ...opts })
      );
    },
  };

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: cookieAdapter }
  );
}
