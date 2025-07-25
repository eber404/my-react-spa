/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import fetch from '../../client'
import type { RequestConfig, ResponseErrorConfig } from '../../client'
import type { GetUserByIdQueryResponse, GetUserByIdPathParams, GetUserById400 } from '../../types/GetUserById'
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const getUserByIdQueryKey = (id: GetUserByIdPathParams['id']) => [{ url: '/users/:id', params: { id: id } }] as const

export type GetUserByIdQueryKey = ReturnType<typeof getUserByIdQueryKey>

/**
 * @description Retrieve details of a specific user by ID.
 * @summary Get a single user
 * {@link /users/:id}
 */
export async function getUserById(id: GetUserByIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<GetUserByIdQueryResponse, ResponseErrorConfig<GetUserById400>, unknown>({ method: 'GET', url: `/users/${id}`, ...requestConfig })
  return res.data
}

export function getUserByIdQueryOptions(id: GetUserByIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const queryKey = getUserByIdQueryKey(id)
  return queryOptions<GetUserByIdQueryResponse, ResponseErrorConfig<GetUserById400>, GetUserByIdQueryResponse, typeof queryKey>({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getUserById(id, config)
    },
  })
}

/**
 * @description Retrieve details of a specific user by ID.
 * @summary Get a single user
 * {@link /users/:id}
 */
export function useGetUserById<TData = GetUserByIdQueryResponse, TQueryData = GetUserByIdQueryResponse, TQueryKey extends QueryKey = GetUserByIdQueryKey>(
  id: GetUserByIdPathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<GetUserByIdQueryResponse, ResponseErrorConfig<GetUserById400>, TData, TQueryData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof fetch }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getUserByIdQueryKey(id)

  const query = useQuery(
    {
      ...getUserByIdQueryOptions(id, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetUserById400>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}