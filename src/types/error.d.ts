export interface ErrorCustom extends Error {
  response: {
    data: {
      message: string;
    };
  };
}
