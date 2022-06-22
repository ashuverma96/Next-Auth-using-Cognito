import { useSession, signIn, signOut, getProviders } from "next-auth/react"
import Toke from './components/accessToken'
import { getToken } from "next-auth/jwt"
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession()
  const providers =  getProviders()
  console.log("Providers", providers)
  if(session) {
     if(session.user.email=='ashucool.boy89@gmail.com')
          return <>
           <div>You can now access our super secret pages</div>
            <button>
              <Link href="/secret">To the secret</Link>
            </button>
            Hello Teacher Signed in as {session.user.email} <br/>
            <button onClick={() => signOut()}>Sign out</button>
          </>
     if(session.user.email=='96ashuverma@gmail.com')
        return <>
          <div>You can now access our super secret pages</div>
            <button>
              <Link href="/secret">To the secret</Link>
            </button>
          Hello Admin Signed in as {session.user.email} <br/>
          <button onClick={() => signOut()}>Sign out</button>
      </>
     if(session.user.email=='ashutosh@eshatechgroup.com')
        return <>
          <div>You can now access our super secret pages</div>
            <button>
              <Link href="/secret">To the secret</Link>
            </button>
          Hello Student Signed in as {session.user.email} <br/>
          <button onClick={() => signOut()}>Sign out</button>
        </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}