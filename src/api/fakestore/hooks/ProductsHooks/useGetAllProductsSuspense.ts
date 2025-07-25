/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import fetch from '../../client'
import type { RequestConfig, ResponseErrorConfig } from '../../client'
import type { GetAllProductsQueryResponse, GetAllProducts400 } from '../../types/GetAllProducts'
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const getAllProductsSuspenseQueryKey = () => [{ url: '/products' }] as const

export type GetAllProductsSuspenseQueryKey = ReturnType<typeof getAllProductsSuspenseQueryKey>

/**
 * @description Retrieve a list of all available products.
 * @summary Get all products
 * {@link /products}
 */
export async function getAllProductsSuspense(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<GetAllProductsQueryResponse, ResponseErrorConfig<GetAllProducts400>, unknown>({ method: 'GET', url: `/products`, ...requestConfig })
  return res.data
}

export function getAllProductsSuspenseQueryOptions(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const queryKey = getAllProductsSuspenseQueryKey()
  return queryOptions<GetAllProductsQueryResponse, ResponseErrorConfig<GetAllProducts400>, GetAllProductsQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getAllProductsSuspense(config)
    },
  })
}

/**
 * @description Retrieve a list of all available products.
 * @summary Get all products
 * {@link /products}
 */
export function useGetAllProductsSuspense<TData = GetAllProductsQueryResponse, TQueryKey extends QueryKey = GetAllProductsSuspenseQueryKey>(
  options: {
    query?: Partial<UseSuspenseQueryOptions<GetAllProductsQueryResponse, ResponseErrorConfig<GetAllProducts400>, TData, TQueryKey>> & { client?: QueryClient }
    client?: Partial<RequestConfig> & { client?: typeof fetch }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAllProductsSuspenseQueryKey()

  const query = useSuspenseQuery(
    {
      ...getAllProductsSuspenseQueryOptions(config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<GetAllProducts400>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}