/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Cart } from './Cart'

/**
 * @description Cart created successfully
 */
export type AddCart201 = Cart

/**
 * @description Bad request
 */
export type AddCart400 = any

export type AddCartMutationRequest = Cart

export type AddCartMutationResponse = AddCart201

export type AddCartMutation = {
  Response: AddCart201
  Request: AddCartMutationRequest
  Errors: AddCart400
}