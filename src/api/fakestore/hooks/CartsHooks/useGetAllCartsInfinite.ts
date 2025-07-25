/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import fetch from '../../client'
import type { RequestConfig, ResponseErrorConfig } from '../../client'
import type { GetAllCartsQueryResponse, GetAllCarts400 } from '../../types/GetAllCarts'
import type { InfiniteData, QueryKey, QueryClient, InfiniteQueryObserverOptions, UseInfiniteQueryResult } from '@tanstack/react-query'
import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query'

export const getAllCartsInfiniteQueryKey = () => [{ url: '/carts' }] as const

export type GetAllCartsInfiniteQueryKey = ReturnType<typeof getAllCartsInfiniteQueryKey>

/**
 * @description Retrieve a list of all available carts.
 * @summary Get all carts
 * {@link /carts}
 */
export async function getAllCartsInfinite(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<GetAllCartsQueryResponse, ResponseErrorConfig<GetAllCarts400>, unknown>({ method: 'GET', url: `/carts`, ...requestConfig })
  return res.data
}

export function getAllCartsInfiniteQueryOptions(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const queryKey = getAllCartsInfiniteQueryKey()
  return infiniteQueryOptions<GetAllCartsQueryResponse, ResponseErrorConfig<GetAllCarts400>, GetAllCartsQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getAllCartsInfinite(config)
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  })
}

/**
 * @description Retrieve a list of all available carts.
 * @summary Get all carts
 * {@link /carts}
 */
export function useGetAllCartsInfinite<
  TData = InfiniteData<GetAllCartsQueryResponse>,
  TQueryData = GetAllCartsQueryResponse,
  TQueryKey extends QueryKey = GetAllCartsInfiniteQueryKey,
>(
  options: {
    query?: Partial<InfiniteQueryObserverOptions<GetAllCartsQueryResponse, ResponseErrorConfig<GetAllCarts400>, TData, TQueryKey>> & { client?: QueryClient }
    client?: Partial<RequestConfig> & { client?: typeof fetch }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAllCartsInfiniteQueryKey()

  const query = useInfiniteQuery(
    {
      ...getAllCartsInfiniteQueryOptions(config),
      queryKey,
      ...queryOptions,
    } as unknown as InfiniteQueryObserverOptions,
    queryClient,
  ) as UseInfiniteQueryResult<TData, ResponseErrorConfig<GetAllCarts400>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}