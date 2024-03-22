export type ResponseData<T = any> = {
  code: number;
  data: T;
  message: string;
};

export type Response = {
  code: number;
  message: string;
};
