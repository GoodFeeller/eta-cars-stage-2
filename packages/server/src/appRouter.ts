import coinRouter from './coin-api/coin-router.ts'
import historyRouter from './history-api/history-router.ts'
import { router } from './trpc.ts'

const appRouter = router({
  coin: coinRouter,
  history: historyRouter
})

export type appRouterType = typeof appRouter
export default appRouter
