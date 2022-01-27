import Head from "next/head";
import Image from "next/image";
import {
    Button,
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    List,
    Box,
    Toolbar,
} from "@mui/material";
import { InboxRounded } from "@mui/icons-material";
const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 300,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 300,
                    boxSizing: "border-box",
                },
            }}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <InboxRounded />
                    </ListItemIcon>
                    <ListItemText primary="الاخبار" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
