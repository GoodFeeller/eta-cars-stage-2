import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { appRouterType } from '../../../server/src/appRouter'
const trpc = createTRPCProxyClient<appRouterType>({
  links: [
    httpBatchLink({
      url: 'https://eta-cars-internship-api.onrender.com/trpc',
    }),
  ],
})

export default trpc
