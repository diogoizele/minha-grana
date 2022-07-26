import { Box, CloseButton, Modal as StyledModal } from "./modal.styles";

import type { ModalProps } from "./modal.types";

const MODAL_SIZES_WIDTH = {
  sm: "30rem",
  md: "40rem",
  lg: "60rem",
};

const Modal = ({
  open,
  children,
  size = "md",
  fullHeight,
  onClose,
}: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <StyledModal open={open}>
      <Box widthSize={MODAL_SIZES_WIDTH[size]} fullHeight={fullHeight}>
        <CloseButton onClick={onClose} size={22} />
        {children}
      </Box>
    </StyledModal>
  );
};

export default Modal;
