import Head from "next/head";
import SpecialLayout from "@/components/layout/layout";

export default function Home() {
  return (
    <SpecialLayout>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </SpecialLayout>
  );
}
