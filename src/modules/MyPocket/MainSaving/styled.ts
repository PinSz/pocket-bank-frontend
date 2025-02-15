import colors from "@/styles/colors";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTypography = styled(Typography)(({ }) => ({
  fontSize: "24px",
  color: colors.blackTitle,
  fontWeight: 500,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
}));

export const StackIcon = styled(Stack)(({ }) => ({
  width: "33.3%",
  alignItems: "center"
}));

export const StyledTypographyIcon = styled(Typography)(({ }) => ({
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "16px"
}));
