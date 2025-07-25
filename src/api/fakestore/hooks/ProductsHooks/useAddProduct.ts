/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import fetch from '../../client'
import type { RequestConfig, ResponseErrorConfig } from '../../client'
import type { AddProductMutationRequest, AddProductMutationResponse, AddProduct400 } from '../../types/AddProduct'
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const addProductMutationKey = () => [{ url: '/products' }] as const

export type AddProductMutationKey = ReturnType<typeof addProductMutationKey>

/**
 * @description Create a new product.
 * @summary Add a new product
 * {@link /products}
 */
export async function addProduct(data?: AddProductMutationRequest, config: Partial<RequestConfig<AddProductMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = data
  const res = await request<AddProductMutationResponse, ResponseErrorConfig<AddProduct400>, AddProductMutationRequest>({
    method: 'POST',
    url: `/products`,
    data: requestData,
    ...requestConfig,
  })
  return res.data
}

/**
 * @description Create a new product.
 * @summary Add a new product
 * {@link /products}
 */
export function useAddProduct<TContext>(
  options: {
    mutation?: UseMutationOptions<AddProductMutationResponse, ResponseErrorConfig<AddProduct400>, { data?: AddProductMutationRequest }, TContext> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig<AddProductMutationRequest>> & { client?: typeof fetch }
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation
  const mutationKey = mutationOptions.mutationKey ?? addProductMutationKey()

  return useMutation<AddProductMutationResponse, ResponseErrorConfig<AddProduct400>, { data?: AddProductMutationRequest }, TContext>(
    {
      mutationFn: async ({ data }) => {
        return addProduct(data, config)
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  )
}