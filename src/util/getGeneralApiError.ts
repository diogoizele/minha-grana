import { AxiosError } from "axios";

import { ErrorResponse } from "types";
import { ApiErrorsMessage } from "../constants";

export function getGeneralApiError(error: unknown) {
  const axiosError = error as AxiosError;

  if (axiosError.response) {
    const { data, status, statusText } = axiosError.response;

    const typedData = data as ErrorResponse["data"];

    const errorResponse = {
      data: typedData,
      status,
      statusText,
    } as ErrorResponse;

    const { message } = typedData;

    console.log("message", message === ApiErrorsMessage.LOGIN.NOT_FOUND);

    switch (message) {
      case ApiErrorsMessage.LOGIN.NOT_FOUND:
        console.log("entrou");
        errorResponse.data.message = "Conta não encontrada.";
        console.log("errorResponse", errorResponse);
        return errorResponse;
      case ApiErrorsMessage.LOGIN.WRONG_PASSWORD:
        errorResponse.data.message = "Senha incorreta.";
        return errorResponse;
      default:
        return errorResponse;
    }
  }

  return {
    data: {
      message: "Something went wrong.",
      statusCode: 500,
    },
    status: 500,
    statusText: "Internal Server Error",
  } as ErrorResponse;
}
