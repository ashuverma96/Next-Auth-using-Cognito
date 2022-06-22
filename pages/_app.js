// import '../styles/globals.css'
// import  Provider  from "next-auth/react";

// export default function MyApp({ Component, pageProps }) {
//   return ( 
//     <Provider session ={pageProps.session}>
//   <Component {...pageProps} /> 
//   </Provider>
//   <div>
//     Helo
//   </div>
//   );
// }

import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}