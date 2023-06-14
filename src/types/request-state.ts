export type RequestState<T> = {
  isLoading: boolean;
  hasError: boolean;
  data: T;
}
