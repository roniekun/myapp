import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();

  // Set a cookie
  cookieStore.set({
    name: "myCookie",
    value: "cookieValue",
    httpOnly: true,
    path: "/",
    secure: true, // Use this for production
    maxAge: 60 * 60 * 24, // 1 day
  });

  return new Response("Cookie has been set", { status: 200 });
}
