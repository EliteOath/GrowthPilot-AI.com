import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../routers'; // adjust path if needed
import { createContext } from '../context'; // adjust path if needed

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
