// import { createTRPCNext } from "@trpc/next";
// import { AppRouter } from "../server/routers";
// import { httpBatchLink } from "@trpc/client";


// export const client = createTRPCNext<AppRouter>({
//     config() {
//         return {
//             links : [
//                 httpBatchLink({
//                     url: '/api/trpc'
//                 })
//             ]
//         }
//     },
//     ssr: false
// })


import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "../server/routers";
import { httpBatchLink } from "@trpc/client";
import superjson from 'superjson'; 

export const client = createTRPCNext<AppRouter>({
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
    ssr: false,
});
