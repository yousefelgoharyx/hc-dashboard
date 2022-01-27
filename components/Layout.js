import Head from "next/head";
import Image from "next/image";
import {
    Button,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from "@mui/material";
import Sidebar from "./Sidebar";
import { Menu } from "@mui/icons-material";
export default function Layout({ children }) {
    return (
        <Box
            sx={{ display: "flex", width: "100%", padding: 0, height: "100vh" }}
        >
            <Box>
                <Sidebar />
            </Box>
            <Box sx={{ backgroundColor: "#f8f8f8", flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            الاخبار
                        </Typography>
                    </Toolbar>
                </AppBar>
                {children}
            </Box>
        </Box>
    );
}
