"use server";

export async function setBooleanCookie(value: boolean) {
  await fetch("http://localhost:3000/api/cookies", {
    method: "POST",
    body: JSON.stringify({ value }),
    headers: { "Content-Type": "application/json" },
  });
}