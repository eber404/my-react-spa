/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { User } from './User'

export type UpdateUserPathParams = {
  /**
   * @type integer
   */
  id: number
}

/**
 * @description User updated successfully
 */
export type UpdateUser200 = User

/**
 * @description Bad request
 */
export type UpdateUser400 = any

export type UpdateUserMutationRequest = User

export type UpdateUserMutationResponse = UpdateUser200

export type UpdateUserMutation = {
  Response: UpdateUser200
  Request: UpdateUserMutationRequest
  PathParams: UpdateUserPathParams
  Errors: UpdateUser400
}