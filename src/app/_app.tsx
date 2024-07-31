import "../styles/global.css";

import { Exo } from "next/font/google";

const exo = Exo({
    weight: ['400', '500', '600', '700'], // if single weight, otherwise you use array like [400, 500, 700],
    style: ['normal', 'italic'],  // if single style, otherwise you use array like ['normal', 'italic']
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: any) {
    <main className={exo.className}>
        <Component {...pageProps} />
    </main>
}
