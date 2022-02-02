import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import {
    SportsSoccerRounded,
    NewspaperRounded,
    PersonPinCircleRounded,
    RestaurantRounded,
    SportsScoreRounded,
    Dashboard,
} from "@mui/icons-material";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
const data = [
    { icon: <NewspaperRounded />, label: "الاخبار", href: "/" },
    {
        icon: <SportsSoccerRounded />,
        label: "الالعاب الرياضية",
        href: "/sports",
    },
    {
        icon: <PersonPinCircleRounded />,
        label: "شخصيات مؤثرة",
        href: "/people",
    },
    {
        icon: <RestaurantRounded />,
        label: "المطاعم - اماكن عامة",
        href: "/resturants",
    },
    {
        icon: <SportsScoreRounded />,
        label: "المباريات القادمة",
        href: "/matches",
    },
];

const FireNav = styled(List)({
    "& .MuiListItemButton-root": {
        paddingLeft: 24,
        paddingRight: 24,
    },
    "& .MuiListItemIcon-root": {
        minWidth: 0,
        marginRight: 16,
    },
    "& .MuiSvgIcon-root": {
        fontSize: 20,
    },
});

const mobileStyles = {
    "@media (max-width: 567px)": {
        position: "fixed",
        height: "100vh",
        zIndex: 9999,
    },
};

export default function CustomizedList() {
    const { asPath } = useRouter();
    return (
        <Box sx={{ display: "flex", ...mobileStyles }}>
            <Paper elevation={0} sx={{ maxWidth: 300, width: 250 }}>
                <FireNav component="nav" disablePadding>
                    <ListItemButton component="div">
                        <ListItemText
                            sx={{ my: 0, paddingY: 1 }}
                            primary="نادي الجياد"
                            primaryTypographyProps={{
                                fontSize: 18,
                                fontWeight: "700",
                                letterSpacing: 0,
                                height: 32,
                                lineHeight: 1.6,
                            }}
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <ListItemIcon>
                                <Dashboard color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary="منصة النادي"
                                primaryTypographyProps={{
                                    color: "primary",
                                    fontWeight: "medium",
                                    variant: "body2",
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <Box pb={2}>
                        <ListItem sx={{ paddingX: 3, paddingY: 2 }}>
                            <ListItemText
                                primary="الاقسام الرئيسية"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                }}
                            />
                        </ListItem>
                        {data.map((item) => (
                            <Link href={item.href}>
                                <ListItemButton
                                    selected={asPath === item.href}
                                    key={item.label}
                                    sx={{
                                        py: 1,
                                        minHeight: 32,
                                        color: "rgba(255,255,255,.8)",
                                    }}
                                >
                                    <ListItemIcon sx={{ color: "inherit" }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontSize: 14,
                                            fontWeight: "medium",
                                        }}
                                    />
                                </ListItemButton>
                            </Link>
                        ))}
                    </Box>
                </FireNav>
            </Paper>
        </Box>
    );
}
