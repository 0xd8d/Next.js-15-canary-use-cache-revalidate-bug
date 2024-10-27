import { getTime } from "@/app/lib/getTime";
import { PurgeCacheButton } from "@/app/purge-cache-btn";

export default async function Home() {
  const time = await getTime();
  console.log("Result from getTime():", time.milliSeconds);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-2">
      Result from getTime(): {time.milliSeconds}
      <PurgeCacheButton />
    </div>
  );
}
