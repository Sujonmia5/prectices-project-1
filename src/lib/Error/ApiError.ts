interface ErrorSource {
  path: string;
  message: string;
}

export class ApiError extends Error {
  statusCode: number;
  errorSources?: ErrorSource[];
  constructor(
    statusCode: number,
    message: string,
    errorSources?: ErrorSource[]
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorSources = errorSources;
  }
}
