import { Button, Divider, Typography } from "@mui/material";
import TextField from "components/textField/textField";
import { useForm } from "react-hook-form";
import { StyledForm } from "./newCategoryModal.styles";

import useNewCategoryModal from "./useNewCategoryModal";

const NEW_CATEGORY_FIELDS = {
  TITLE: "title",
  AMOUNT: "amount",
  TYPE: "type",
  FREQUENCY: "frequency",
  AMOUNT_TYPE: "amountType",
};

const NEW_CATEGORY_INITIAL_VALUE = {
  [NEW_CATEGORY_FIELDS.TITLE]: "",
  [NEW_CATEGORY_FIELDS.AMOUNT]: "",
  [NEW_CATEGORY_FIELDS.TYPE]: "",
  [NEW_CATEGORY_FIELDS.FREQUENCY]: "",
  [NEW_CATEGORY_FIELDS.AMOUNT_TYPE]: "",
};

const NewCategoryModal = () => {
  const { control, handleSubmit: RHFHandleSubmit } = useForm({
    defaultValues: NEW_CATEGORY_INITIAL_VALUE,
  });
  const { handleSubmit } = useNewCategoryModal();

  return (
    <div className="flex flex-col justify-between items-center">
      <Typography className="self-start" variant="h5">
        Nova categoria
      </Typography>
      <Divider className="py-1" />
      <StyledForm onSubmit={RHFHandleSubmit(handleSubmit)}>
        <TextField
          label="Título"
          name={NEW_CATEGORY_FIELDS.TITLE}
          control={control}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Criar
        </Button>
      </StyledForm>
    </div>
  );
};

export default NewCategoryModal;
