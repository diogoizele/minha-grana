import { styled } from "@mui/material";

import type { TagProps } from "./tag.types";

type TagStyledProps = Pick<TagProps, "bgColor" | "fontSize">;

export const Container = styled("div")<TagStyledProps>(
  ({ bgColor, fontSize, theme }) => ({
    backgroundColor: bgColor ?? theme.palette.primary.main,
    fontSize,
    height: "fit-content",
    width: "fit-content",
    borderRadius: "0.5rem",
    padding: "0.2rem 0.5rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);
