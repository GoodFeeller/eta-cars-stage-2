import { inferAsyncReturnType } from '@trpc/server'
import type * as trpcExpress from '@trpc/server/adapters/express'

const createContext = ({
  }: trpcExpress.CreateExpressContextOptions) => {
  return {}
}

export type Context = inferAsyncReturnType<typeof createContext>
export default createContext
