import { styled, Modal as MUIModal, Box as MUIBox } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FaTimes } from "react-icons/fa";

export const Modal = styled(MUIModal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

type StyledBoxProps = {
  widthSize: string;
  fullHeight?: boolean;
};
export const Box = styled(MUIBox)<StyledBoxProps>(
  ({ theme, widthSize, fullHeight }) => ({
    maxHeight: "80vh",
    height: fullHeight ? "80vh" : "auto",
    minHeight: "20rem",
    width: widthSize,

    background: theme?.palette?.background?.paper,
    padding: "1rem",
    borderRadius: 8,

    position: "relative",
  })
);

export const CloseButton = styled(FaTimes)(({ theme }) => ({
  position: "absolute",
  right: "1rem",
  top: "1rem",

  color: grey[400],

  cursor: "pointer",

  transition: "color 180ms",

  "&:hover": {
    color: grey[600]
  },
}));
