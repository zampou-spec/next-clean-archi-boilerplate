'use client';
import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const STALE_TIME = 30 * 1000;

const queryConfig: DefaultOptions = {
  queries: {
    suspense: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: STALE_TIME
  }
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

// export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<ReturnType<FnType>>;

// export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
//   UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
//   'queryKey' | 'queryFn'
// >;
