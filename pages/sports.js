import Head from "next/head";
import { Box, Stack, TextField, Fab } from "@mui/material";
import Layout from "../components/Layout";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import FormCreate from "../components/FormCreate";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "رقم", width: 90 },
    {
        field: "firstName",
        headerName: "عنوان الخبر",
        width: 150,
    },
    {
        field: "lastName",
        headerName: "تفاصيل",
        width: 150,
    },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon" },
    { id: 2, lastName: "Lannister", firstName: "Cersei" },
    { id: 3, lastName: "Lannister", firstName: "Jaime" },
    { id: 4, lastName: "Stark", firstName: "Arya" },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
    { id: 6, lastName: "Melisandre", firstName: null },
    { id: 7, lastName: "Clifford", firstName: "Ferrara" },
    { id: 8, lastName: "Frances", firstName: "Rossini" },
    { id: 9, lastName: "Roxie", firstName: "Harvey" },
];

export default function Home() {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <FormCreate title="انشاء خبر" action="اضافة لول">
                    <Stack direction="row">
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="عنوان الخبر"
                        />
                    </Stack>
                    <Stack direction="row">
                        <TextField
                            variant="outlined"
                            multiline
                            rows={8}
                            fullWidth
                            label="عنوان الخبر"
                        />
                    </Stack>
                </FormCreate>
                <Box margin={2} height={52 * 7 + 58}>
                    <DataGrid
                        sx={{ bgcolor: "#222" }}
                        rows={rows}
                        columns={columns}
                        pageSize={6}
                        rowsPerPageOptions={[6]}
                        // checkboxSelection
                        // disableSelectionOnClick
                    />
                </Box>
            </Layout>
        </Box>
    );
}