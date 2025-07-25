/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import fetch from '../../client'
import type { RequestConfig, ResponseErrorConfig } from '../../client'
import type { GetAllProductsQueryResponse, GetAllProducts400 } from '../../types/GetAllProducts'
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const getAllProductsQueryKey = () => [{ url: '/products' }] as const

export type GetAllProductsQueryKey = ReturnType<typeof getAllProductsQueryKey>

/**
 * @description Retrieve a list of all available products.
 * @summary Get all products
 * {@link /products}
 */
export async function getAllProducts(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<GetAllProductsQueryResponse, ResponseErrorConfig<GetAllProducts400>, unknown>({ method: 'GET', url: `/products`, ...requestConfig })
  return res.data
}

export function getAllProductsQueryOptions(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const queryKey = getAllProductsQueryKey()
  return queryOptions<GetAllProductsQueryResponse, ResponseErrorConfig<GetAllProducts400>, GetAllProductsQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getAllProducts(config)
    },
  })
}

/**
 * @description Retrieve a list of all available products.
 * @summary Get all products
 * {@link /products}
 */
export function useGetAllProducts<
  TData = GetAllProductsQueryResponse,
  TQueryData = GetAllProductsQueryResponse,
  TQueryKey extends QueryKey = GetAllProductsQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<GetAllProductsQueryResponse, ResponseErrorConfig<GetAllProducts400>, TData, TQueryData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof fetch }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAllProductsQueryKey()

  const query = useQuery(
    {
      ...getAllProductsQueryOptions(config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetAllProducts400>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}