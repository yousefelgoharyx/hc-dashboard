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
    Divider,
    ListItemAvatar,
    Avatar,
    ListSubheader,
} from "@mui/material";
import {
    InboxRounded,
    SportsSoccerRounded,
    NewspaperRounded,
    PersonPinCircleRounded,
    RestaurantRounded,
    SportsScoreRounded,
} from "@mui/icons-material";

const items = [
    {
        name: "الاخبار",
        icon: NewspaperRounded,
    },
    {
        name: "الالعاب الرياضية",
        icon: SportsSoccerRounded,
    },
    {
        name: "شخصيات مؤثرة",
        icon: PersonPinCircleRounded,
    },
    {
        name: "المطاعم - اماكن عامة",
        icon: RestaurantRounded,
    },
    {
        name: "المباريات القادمة",
        icon: SportsScoreRounded,
    },
];
const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 300,
                flexShrink: 0,
                position: "fixed",
                "& .MuiDrawer-paper": {
                    width: 300,
                    boxSizing: "border-box",
                },
            }}
        >
            <List subheader={<ListSubheader>الاقسام الرئيسية</ListSubheader>}>
                {items.map((item) => (
                    <ListItem button>
                        <ListItemIcon>
                            <item.icon color="#ff5" />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
