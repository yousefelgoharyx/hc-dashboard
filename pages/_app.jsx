import "@fontsource/cairo/400.css";
import "@fontsource/cairo/700.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
    direction: "rtl",

    typography: {
        fontFamily: "Cairo",
    },
});
// Create rtl cache
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
});

function MyApp({ Component, pageProps }) {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
