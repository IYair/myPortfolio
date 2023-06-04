import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import selectPlugin from '@rematch/select'
import { models, RootModel } from './models/models'
//
// Plugins
import persistPlugin from '@rematch/persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'ui']
}

export const store = init<RootModel>({
  models,
  plugins: [persistPlugin(persistConfig), selectPlugin()]
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
