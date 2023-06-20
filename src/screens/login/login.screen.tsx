import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputAdornment, IconButton, Button } from "@mui/material";
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

import type { LoginCredentials } from "types";

const LOGIN_FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
};

const LOGIN_INITIAL_VALUE = {
  [LOGIN_FIELDS.EMAIL]: "",
  [LOGIN_FIELDS.PASSWORD]: "",
};

export function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const { setToken } = useAuthStore();
  const { control, handleSubmit } = useForm<LoginCredentials>({
    defaultValues: LOGIN_INITIAL_VALUE,
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const { token } = await authApi.login(data);
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

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
            control={control}
            name={LOGIN_FIELDS.EMAIL}
            type="email"
            variant="outlined"
            autoComplete="off"
            placeholder="E-mail"
            label="E-mail"
          />
          <TextField
            control={control}
            name={LOGIN_FIELDS.PASSWORD}
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            variant="outlined"
            placeholder="Senha"
            label="Senha"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Alterar visibilidade da senha"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained" type="submit">
            Entrar
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
