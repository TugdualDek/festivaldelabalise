import React, { ReactNode } from "react";
import Head from "next/head";

export default function SpecialLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta name="og:title" content="Festival de la balise" />
            </Head>
            <main>{children}</main>
        </>
    );
}
