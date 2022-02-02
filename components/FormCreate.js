import { LoadingButton } from "@mui/lab";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import styled from "../utils/styled";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
let reader;
const FormCreate = (props) => {
    const {
        title,
        action,
        onAction,
        isActionLoading,
        onImageChange = () => {},
        children,
    } = props;
    const imageInputRef = useRef();
    const [imageData, setImageData] = useState(null);
    const onImageInputChange = (e) => {
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => setImageData(reader.result);
            onImageChange(e.target.files[0]);
        }
    };
    useLayoutEffect(() => {
        reader = new FileReader();
    }, []);
    return (
        <Container elevation={1}>
            <Title variant="h5">{title}</Title>
            <Spacer />
            <BodyWrapper>
                <ImageWrapper onClick={() => imageInputRef.current.click()}>
                    <input
                        ref={imageInputRef}
                        type="file"
                        hidden
                        onChange={onImageInputChange}
                        accept="image/*"
                    />
                    <Image
                        layout="responsive"
                        src={imageData ?? "/default.jpg"}
                        width={250}
                        height={250}
                    />
                </ImageWrapper>
                <Body>{children}</Body>
            </BodyWrapper>
            <Spacer />
            <FooterWrapper>
                <ActionButton
                    variant="contained"
                    loading={isActionLoading}
                    onClick={onAction}
                >
                    {action}
                </ActionButton>
            </FooterWrapper>
        </Container>
    );
};
const Container = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    margin: theme.spacing(2),
}));

const Title = styled(Typography)(() => ({
    marginBottom: 0,
    fontWeight: "bold",
}));

const Spacer = styled(Divider)(({ theme }) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
}));

const BodyWrapper = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(4),
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
}));

const Body = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    flex: 1,
    minWidth: 150,
}));

const FooterWrapper = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    flexDirection: "row",
    alignItems: "flex-start",
}));

const ActionButton = styled(LoadingButton)({
    minWidth: 200,
});

const ImageWrapper = styled(Box)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    cursor: "pointer",
    overflow: "hidden",
    fontSize: 0,
    width: "100%",
    border: "1px solid #555",
    "@media (min-width: 567px)": {
        maxWidth: 280,
    },
}));

export default FormCreate;
