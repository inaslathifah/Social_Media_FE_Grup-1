export type Response<T = any> = {
  code: number;
  data: T;
  message: string;
};
