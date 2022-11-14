const enum StatusCode1 {
  FAILED = 'failed',
  SUCCESS = 'success',
}

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface IPaymentSuccess extends IPayment {
  databaseId: number;
}

interface IResponseError {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: StatusCode1.SUCCESS;
  data: IPaymentSuccess;
}

interface IResponseFailed {
  status: StatusCode1.FAILED;
  data: IResponseError;
}

// interface IResponseError {
//   errorMessage: string;
//   errorCode: number;
// }

// interface IResponseData {
//   status: StatusCode1;
//   data: IResponseSuccess | IResponseError;
// }

// function get(): IResponseSuccess | IResponseFailed {}
