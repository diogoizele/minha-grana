import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputAdornment, IconButton, Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import logoImg from "assets/logo.png";
import { authApi } from "api";
import { TextField } from "components";
import { useAuthStore } from "stores";

import {
  Container,
  Form,
  FormContainer,
  FormTitle,
  Title,
  TitleContainer,
} from "./login.styles";

import type { ErrorResponse, LoginCredentials } from "types";

const LOGIN_FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
};

const LOGIN_INITIAL_VALUE = {
  [LOGIN_FIELDS.EMAIL]: "",
  [LOGIN_FIELDS.PASSWORD]: "",
};

const LOGIN_RULES = {
  [LOGIN_FIELDS.EMAIL]: {
    required: "O campo e-mail é obrigatório",
    pattern: { value: /\S+@\S+\.\S+/, message: "E-mail inválido" },
  },
  [LOGIN_FIELDS.PASSWORD]: {
    required: "O campo senha é obrigatório",
  },
};

export function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const { setToken } = useAuthStore();
  const { control, handleSubmit, formState } = useForm<LoginCredentials>({
    defaultValues: LOGIN_INITIAL_VALUE,
    shouldFocusError: true,
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const { token } = await authApi.login(data);
      setToken(token);
    } catch (error) {
      toast.error((error as ErrorResponse).data.message);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const EndAdornment = () => (
    <InputAdornment position="end">
      <IconButton
        aria-label="Alterar visibilidade da senha"
        onClick={handleClickShowPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Container>
      <FormContainer>
        <TitleContainer>
          <img src={logoImg} />
          <Title variant="h1">Minha Grana</Title>
        </TitleContainer>
        <FormTitle variant="h5">Faça login para continuar</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            helperText={formState.errors.email?.message}
            error={!!formState.errors.email}
            control={control}
            name={LOGIN_FIELDS.EMAIL}
            type="email"
            variant="outlined"
            autoComplete="off"
            placeholder="E-mail"
            label="E-mail"
            rules={LOGIN_RULES[LOGIN_FIELDS.EMAIL]}
          />
          <TextField
            control={control}
            name={LOGIN_FIELDS.PASSWORD}
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            variant="outlined"
            placeholder="Senha"
            label="Senha"
            helperText={formState.errors.password?.message}
            error={!!formState.errors.password}
            rules={LOGIN_RULES[LOGIN_FIELDS.PASSWORD]}
            InputProps={{ endAdornment: <EndAdornment /> }}
          />

          <Button variant="contained" type="submit">
            Entrar
          </Button>
        </Form>
      </FormContainer>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}
