import { initTRPC } from '@trpc/server';
import type { TrpcReqContext } from './auth';
import superjson from 'superjson';

export const t = initTRPC.context<TrpcReqContext>().create({
  transformer: superjson,
});
