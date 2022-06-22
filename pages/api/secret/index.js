import { getSession } from "next-auth/react"

export default async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in as admin",
    })
  } else {
    res.send({
      error: "You must be sign in to view the admin content on this page.",
    })
  }
}