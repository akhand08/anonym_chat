// src/pages/_app.tsx

import { withTRPC } from '@trpc/next';
import { AppRouter } from "../server/routers/index";
import { AppType } from 'next/app';
import superjson from 'superjson';
import { httpBatchLink } from '@trpc/client';


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
      transformer: superjson,
    };
  },
  ssr: false, // Important: disable SSR for tRPC
})(MyApp);
