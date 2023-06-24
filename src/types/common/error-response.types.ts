export interface ErrorResponse {
  data: {
    message: string;
    statusCode: number;
  };

  status: number;
  statusText: string;
}
