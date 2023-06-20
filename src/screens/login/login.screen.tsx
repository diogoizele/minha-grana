import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputAdornment, IconButton, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import logoImg from "assets/logo.png";
import { TextField } from "components";
import {
  Container,
  Form,
  FormContainer,
  FormTitle,
  Title,
  TitleContainer,
} from "./login.styles";

const NEW_CATEGORY_FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
};

const NEW_CATEGORY_INITIAL_VALUE = {
  [NEW_CATEGORY_FIELDS.EMAIL]: "",
  [NEW_CATEGORY_FIELDS.PASSWORD]: "",
};

interface LoginData {
  email: string;
  password: string;
}

export function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm<LoginData>({
    defaultValues: NEW_CATEGORY_INITIAL_VALUE,
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
            name={NEW_CATEGORY_FIELDS.EMAIL}
            type="email"
            variant="outlined"
            autoComplete="off"
            placeholder="E-mail"
            label="E-mail"
          />

          <TextField
            control={control}
            name={NEW_CATEGORY_FIELDS.PASSWORD}
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            variant="outlined"
            placeholder="Senha"
            label="Senha"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained">Entrar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
