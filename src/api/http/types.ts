export type ApiRequest<TParams = void, TResponse = ApiResponse> = (
  params: TParams,
) => Promise<TResponse>

export type ApiResponse<T = undefined> = T & {
  success: boolean
}
