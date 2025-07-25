/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import fetch from '../../client'
import type { RequestConfig, ResponseErrorConfig } from '../../client'
import type { GetCartByIdQueryResponse, GetCartByIdPathParams, GetCartById400 } from '../../types/GetCartById'
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const getCartByIdSuspenseQueryKey = (id: GetCartByIdPathParams['id']) => [{ url: '/carts/:id', params: { id: id } }] as const

export type GetCartByIdSuspenseQueryKey = ReturnType<typeof getCartByIdSuspenseQueryKey>

/**
 * @description Retrieve details of a specific cart by ID.
 * @summary Get a single cart
 * {@link /carts/:id}
 */
export async function getCartByIdSuspense(id: GetCartByIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<GetCartByIdQueryResponse, ResponseErrorConfig<GetCartById400>, unknown>({ method: 'GET', url: `/carts/${id}`, ...requestConfig })
  return res.data
}

export function getCartByIdSuspenseQueryOptions(id: GetCartByIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const queryKey = getCartByIdSuspenseQueryKey(id)
  return queryOptions<GetCartByIdQueryResponse, ResponseErrorConfig<GetCartById400>, GetCartByIdQueryResponse, typeof queryKey>({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getCartByIdSuspense(id, config)
    },
  })
}

/**
 * @description Retrieve details of a specific cart by ID.
 * @summary Get a single cart
 * {@link /carts/:id}
 */
export function useGetCartByIdSuspense<TData = GetCartByIdQueryResponse, TQueryKey extends QueryKey = GetCartByIdSuspenseQueryKey>(
  id: GetCartByIdPathParams['id'],
  options: {
    query?: Partial<UseSuspenseQueryOptions<GetCartByIdQueryResponse, ResponseErrorConfig<GetCartById400>, TData, TQueryKey>> & { client?: QueryClient }
    client?: Partial<RequestConfig> & { client?: typeof fetch }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getCartByIdSuspenseQueryKey(id)

  const query = useSuspenseQuery(
    {
      ...getCartByIdSuspenseQueryOptions(id, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<GetCartById400>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}