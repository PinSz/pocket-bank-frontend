import colors from "@/styles/colors";
import { Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleTypography = styled(Typography)(({ }) => ({
  fontSize: "13px",
  color: colors.gray400,
  fontWeight: 500,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
}));

export const CardCustom = styled(Card)(({ }) => ({
  borderRadius: 10,
  color: colors.white,
  minWidth: 240,
  minHeight: 150,
  padding: 16,
}));
