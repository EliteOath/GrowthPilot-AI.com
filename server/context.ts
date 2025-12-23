import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { nanoid } from 'nanoid';
import { sdk } from './_core/sdk'; // adjust if needed

export async function createContext({ req, res }: CreateNextContextOptions) {
  let user = null;

  try {
    user = await sdk.authenticateRequest(req);
  } catch {
    user = null;
  }

  return {
    req,
    res,
    user,
    requestId: nanoid(),
  };
}

export type TrpcContext = Awaited<ReturnType<typeof createContext>>;
