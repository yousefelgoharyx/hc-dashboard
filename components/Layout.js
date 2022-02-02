import { Box } from "@mui/material";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "../utils/styled";
import CustomizedList from "./FireSidebar";
import { useRouter } from "next/router";
const variants = {
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0.95,
        transition: {
            duration: 0.3,
        },
    },
    enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
        y: -100,
        scale: 0.95,
        transition: {
            duration: 0.3,
        },
    },
};
export default function Layout({ children }) {
    return (
        <LayoutWrapper>
            <CustomizedList />
            <ContentWrapper
                as={motion.div}
                variants={variants} // Pass the variant object into Framer Motion
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: "spring" }} // Set the transition to linear
            >
                {children}
            </ContentWrapper>
        </LayoutWrapper>
    );
}

const LayoutWrapper = styled(Box)({
    width: "100%",
    height: "100vh",
    padding: 0,
    display: "flex",
    overflow: "hidden",
});

const ContentWrapper = styled(Box)({
    flex: 1,
    maxWidth: 1440,
    margin: "0 auto",
    overflow: "auto",
    "::-webkit-scrollbar": {
        width: 6,
    },

    "::-webkit-scrollbar-track": {
        background: "#111",
    },

    "::-webkit-scrollbar-thumb": {
        background: "#333",
    },

    "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
    },
});
