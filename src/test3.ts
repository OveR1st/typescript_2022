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

/**
 * Type Guart test (34 lesson)
 */

type Res = IResponseSuccess | IResponseFailed;

function checkIsResponseSuccess(res: Res): res is IResponseSuccess {
  if (res.status === StatusCode1.SUCCESS) {
    return true;
  } else {
    return false;
  }
  // return 'databaseId' in res.data;
}

function get(res: Res): number {
  if (checkIsResponseSuccess(res)) {
    console.log(res.data.databaseId);
    return res.data.databaseId;
  } else {
    console.log(res.data.errorCode);
    throw new Error(res.data.errorMessage);
  }
}
