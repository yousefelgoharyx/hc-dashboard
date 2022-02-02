import { AnimatePresence } from "framer-motion";
import ThemeRTL from "../utils/ThemeRTL";

function MyApp({ Component, pageProps, router }) {
    const url = `https://wallis.dev${router.route}`;

    return (
        <ThemeRTL>
            <AnimatePresence exitBeforeEnter initial={false}>
                <Component {...pageProps} canonical={url} key={url} />
            </AnimatePresence>
        </ThemeRTL>
    );
}

export default MyApp;
