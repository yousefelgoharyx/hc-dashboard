import ThemeRTL from "../utils/ThemeRTL";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeRTL>
            <Component {...pageProps} />
        </ThemeRTL>
    );
}

export default MyApp;
