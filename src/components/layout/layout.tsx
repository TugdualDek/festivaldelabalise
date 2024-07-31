import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../header/Header.component";

export default function SpecialLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content="Festival de la balise" />
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
}
