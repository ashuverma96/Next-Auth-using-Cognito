import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Secret() {
  const { data: session, loading } = useSession()
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (session) {
    if (session.user.email== '96ashuverma@gmail.com')
              return (
                <main>
                <div>
                  <h1> Admin Page</h1>
                  <p>{content}</p>
                </div>
              </main>
              );
            }
  return (
    <main>
        <div>
          <h1>You aren't admin, please sign in as admin first</h1>
        </div>
      </main>
  );
}