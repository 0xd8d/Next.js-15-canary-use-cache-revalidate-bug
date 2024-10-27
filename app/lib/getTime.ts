"use server";

import { unstable_cacheTag as cacheTag } from "next/cache";

export async function getTime() {
  "use cache";
  cacheTag("time");

  console.log("fetching time");
  const data = await fetch(
    "https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam",
  );
  return data.json();
}
