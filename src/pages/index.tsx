import { Mangoes } from "@/components/Mangoes";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudra Dev Mango Sale</title>
        <meta name="description" content="" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] font-mono">
        <Mangoes />
      </main>
    </>
  );
}
