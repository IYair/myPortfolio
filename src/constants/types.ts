import { ReactNode } from 'react'

export enum enumTextSizes {
  s72 = '72',
  s64 = '64',
  s56 = '56',
  s48 = '48',
  s44 = '44',
  s40 = '40',
  s38 = '38',
  s36 = '36',
  s22 = '22',
  s21 = '21',
  s20 = '20',
  s18 = '18',
  s17 = '17',
  s16 = '16',
  s14 = '14',
  s13 = '13',
  s12 = '12',
  s10 = '10',
  s7 = '7'
}

export enum enumTextTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  span = 'span',
  label = 'label',
  a = 'a',
  ul = 'ul',
  div = 'div'
}

export enum enumEvaluationProcessStatus {
  POR_INICIAR_Y_VIGENTES = 0,
  POR_INICIAR = 2,
  VIGENTE = 1,
  CONCLUIDO = 3
}

type typeReactNode = ReactNode

/**
 * Errors 😡 ⚠
 */

export enum error {
  /**
   * Se utiliza para dar detalles del error de la solicitud
   * Petición mala
   */
  Error_4xx = 400,

  /**
   *  Se utiliza para denegar el recurso a usuarios sin autenticación.
   *  No se encuentra autenticado
   */
  Error_401 = 401,

  /**
   * Licencia no válida
   */
  Error_402 = 402,

  /**
   * Se utiliza para denegar el recurso a usuarios sin autorización.
   */
  Error_403 = 403,

  /**
   * Se utiliza para describir que el recurso solicitado no se encontró
   * No se encuentra el recurso
   */
  Error_404 = 404,

  /**
   * Se utiliza para avisar que no se pudo interpretar la solcitud.
   * No se pudo interpretar la solicitud
   */
  Error_405 = 405,

  /**
   * Se utiliza para avisar que no la solicitud no es aceptable
   * Solicitud no aceptable
   */
  Error_406 = 406,

  /**
   * Se utiliza cuando no se encuentra el registro.
   * No se encuentra el registro | Tipo {0} | Id {1}
   */
  Error_411 = 411,

  /**
   * Se utiliza cuando no se puede crear el registro.
   * No se pudo crear el registro | Tipo {0} | Mensaje {1}
   */
  Error_412 = 412,

  /**
   * Se utiliza cuando no se puede actualizar el registro.
   * No se pudo actualizar el registro | Tipo {0} | Mensaje {1}
   */
  Error_413 = 413,

  /**
   * Se utiliza cuando no se puede eliminar el registro.
   * No se pudo eliminar el registro | Tipo {0} | Mensaje {1}
   */
  Error_414 = 414,

  /**
   * Se utiliza cuando se existe un problema con el server.
   */
  Error_500 = 500,

  /**
   * El servidor se encuentra ocupado
   */
  Error_503 = 503
}

/**
 * Use this interface when you send information with form,
 * mainly when you need to know the property name and its error message.
 *
 * In some cases, when send an array with information, the backend
 * can respond with this type of error in order to identify where is the problem.
 */
export type TResponseFormError = {
  AttemptedValue: string
  ErrorCode: number
  ErrorMessage: string
  PropertyName: string
}

export type TResponseArrayErrors = {
  code: number
  responseMessage: string
  statusCode: number
  success: boolean
  dataResponse: string[]
}

export type TResponseValidationErrors = {
  type: string
  title: string
  status: number
  traceId: string
  errors: {
    [key: string]: string[]
  }
}

/**
 * Use this interface when you send just one information,
 * it might be a string, number, boolean, etc.
 *
 * You should use this interface the most of the times.
 */
export type TResponseBasicError = {
  Code: number
  ResponseMessage: string
  StatusCode: number
  Success: boolean
}

export type TResponseError = {
  ErrorCode: number
  ErrorMessage: string
  PropertyName: string
  AttemptedValue?: { [key: string]: string } | string | number | boolean
}

/**
 * ApiResponses
 */
export interface IApiResponse<E = {}> {
  data: any
  error: boolean
  statusCode: number | undefined
  message: string
  errors: E | TResponseError | any
}

/**
 * Use this type when you get response with pagination.
 */
export type TPaginatedResponse<T> = {
  data: T[]
  totalCount: number
  // page: number
  // pageSize: number
}

/**
 * Generic response where you indicate what is the type of data
 * and what is the type of error.
 *
 * @D - data type
 * @E - errors type
 */
export interface IGenericResponse<D, E> extends IApiResponse<E> {
  data: D
  errors: E
}

export interface IReactNode {
  children?: typeReactNode
}

export interface IMenuItem {
  key: string
  text: string
  icon?: string
  to?: string
}

export enum enumStatus {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info'
}

export enum enumCompetencies {
  company = 'Company',
  levels = 'JobPositionLevel',
  job = 'JobPosition'
}

/**
 * @L List
 * @P type of params that will be passed to the function
 */
export interface IListComponent<L, P> {
  //
  header?: ReactNode | ReactNode[]
  //
  list: L
  //
  disabled?: boolean
  //
  emitOnSelectedForEdit: (param: P) => void
  //
  emitOnDeleted: () => void
}

export type TPicture = Blob | MediaSource | Object

export type TImage = {
  logo: Blob | MediaSource | Object | null
  zoom: number
}

export type TChildren = ReactNode | ReactNode[]
export type TChildrenRenderProps<R> = (props: R) => JSX.Element | ReactNode | ReactNode[]

export enum enumPhoneTypeName {
  mobile = 'Móvil/Celular',
  office = 'Oficina'
}

export enum enumFilterType {
  all = 'ALL',
  error = 'WITH_ERROR',
  correct = 'CORRECT',
  modified = 'MODIFIED'
}

export enum enumSearchModesTypes {
  active = 'ONLY_ACTIVE',
  temporary = 'ONLY_TEMPORARY',
  activeTemporary = 'ACTIVE_AND_TEMPORARY'
}

export enum enumSearchModes {
  COLLABORATORS_ONLY,
  VACANCIES_ONLY,
  COLLABORATORS_AND_VACANCIES
}
