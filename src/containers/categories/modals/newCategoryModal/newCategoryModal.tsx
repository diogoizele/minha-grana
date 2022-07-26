import { Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

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
    <div>
      <Typography variant="h5">Nova categoria</Typography>
      <form onSubmit={RHFHandleSubmit(handleSubmit)}>
        <Controller
          name={NEW_CATEGORY_FIELDS.TITLE}
          control={control}
          render={({ field }) => <TextField size="small" {...field} />}
        />
        <Button type="submit" variant="contained">
          Criar
        </Button>
      </form>
    </div>
  );
};

export default NewCategoryModal;
