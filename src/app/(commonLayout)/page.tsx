"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    authClient
      .getSession()
      .then((res) => {
        console.log("SESSION:", res);
        setSession(res);
      })
      .catch((err) => {
        console.error("Session error:", err);
      });
  }, []);

  return (
    <div>
      <Button variant="outline">Click Here....</Button>
    </div>
  );
}
