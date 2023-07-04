import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  Tooltip,
  DialogActions,
  InputAdornment,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import { Frequency } from "constants";
import { Checkbox, Select, TextField } from "components";
import { IncomeFormData } from "types";

import { IncomeModalFormProps } from "./income-modal-form.types";
import { Form } from "./income-modal-form.styles";
import { useUserStore } from "../../../../stores";

const FREQUENCY_OPTIONS = [
  { label: "Uma vez", value: Frequency.ONCE },
  { label: "Mensalmente", value: Frequency.MONTHLY },
  { label: "Anualmente", value: Frequency.YEARLY },
];

const FORM_FIELDS = {
  TITLE: "title",
  PERCENT: "percent",
  AMOUNT: "amount",
  DESCRIPTION: "description",
  FREQUENCY: "frequency",
  IS_BLOCKED: "isBlocked",
  RECEIVEMENT_METHOD: "receivementMethod",
};

const FORM_INITIAL_VALUE = {
  [FORM_FIELDS.TITLE]: "",
  [FORM_FIELDS.PERCENT]: "",
  [FORM_FIELDS.AMOUNT]: "",
  [FORM_FIELDS.DESCRIPTION]: null,
  [FORM_FIELDS.FREQUENCY]: Frequency.ONCE,
  [FORM_FIELDS.IS_BLOCKED]: false,
  [FORM_FIELDS.RECEIVEMENT_METHOD]: null,
};

const FORM_RULES = {
  [FORM_FIELDS.TITLE]: {
    required: "Título é obrigatório",
  },
  [FORM_FIELDS.AMOUNT]: {
    required: "Valor é obrigatório",
  },
};

export function IncomeModalForm({ onClose, open }: IncomeModalFormProps) {
  const { control, handleSubmit, formState } = useForm<IncomeFormData>({
    defaultValues: FORM_INITIAL_VALUE,
    shouldFocusError: true,
  });
  const { user } = useUserStore();

  const onSubmit = async (data: IncomeFormData) => {
    console.log(data);
  };

  const handleClose = (_?: {}, reason?: string) => {
    if (reason !== "backdropClick") {
      onClose();
    }
  };

  console.log(user);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Nova Receita</DialogTitle>
      <DialogContent>
        <Form>
          <DialogContentText>
            Adicione suas receitas financeiras de forma simples e rápida.
            Registre suas entradas de dinheiro com facilidade e mantenha o
            controle do seu fluxo de caixa.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                control={control}
                name={FORM_FIELDS.TITLE}
                label="Título"
                autoComplete="off"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                control={control}
                name={FORM_FIELDS.AMOUNT}
                label="Valor"
                type="money"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                control={control}
                name={FORM_FIELDS.PERCENT}
                label="Porcentagem"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                fullWidth
                control={control}
                name={FORM_FIELDS.FREQUENCY}
                options={FREQUENCY_OPTIONS}
                label="Frequência"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                control={control}
                name={FORM_FIELDS.DESCRIPTION}
                label="Descrição"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                control={control}
                name={FORM_FIELDS.RECEIVEMENT_METHOD}
                label="Forma de Recebimento"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} style={{}}>
              <Checkbox
                control={control}
                name={FORM_FIELDS.IS_BLOCKED}
                label={
                  <span>
                    Receita Bloqueada{" "}
                    <Tooltip title="Receita Bloqueada: Valor que faz parte do seu patrimônio, porém não está disponível para uso imediato.">
                      <InfoIcon fontSize="small" color={"action"} />
                    </Tooltip>
                  </span>
                }
              />
            </Grid>
          </Grid>
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleClose}>
          Cadastrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
