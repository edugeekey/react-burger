import { ApiResponse } from './types'
import { useCallback, useState } from 'react'

type RequestState<T> = {
  hasError: boolean
  isLoading: boolean
  response: T | null
}
export function useRequest<TParams = void, TResponse = ApiResponse>(
  requestFn: (params: TParams) => Promise<TResponse>,
): RequestState<TResponse> & { request: (x: TParams) => void } {
  const [state, setState] = useState<RequestState<TResponse>>({
    isLoading: false,
    hasError: false,
    response: null,
  })

  const request = useCallback(
    (params: TParams) => {
      setState({ isLoading: true, hasError: false, response: null })
      requestFn(params)
        .then((response) => setState({ isLoading: false, hasError: false, response }))
        .catch(() => setState({ isLoading: false, hasError: true, response: null }))
    },
    [requestFn, setState],
  )

  return {
    ...state,
    request,
  }
}
