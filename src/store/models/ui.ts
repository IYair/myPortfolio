import { createModel } from '@rematch/core'
import { RootModel } from './models'
import type { Dispatch } from '@/store/store'

type TState = {
}

const state: TState = {
}

const reducers = {
}

const effects = (dispatch: Dispatch) => {
  return {
  }
}

export const ui = createModel<RootModel>()({
  name: 'ui',
  state,
  reducers,
  effects
})
