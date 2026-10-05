"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";

type AuthControlsProps = {
  email: string | null;
};

export default function AuthControls({ email }: AuthControlsProps) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function signInWithGoogle() {
    setErrorMessage("");
    setIsLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  }

  async function signOut() {
    setErrorMessage("");
    setIsLoading(true);

    const { error } = await createClient().auth.signOut();
    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    router.refresh();
    setIsLoading(false);
  }

  return (
    <div className="auth-controls">
      {email ? (
        <>
          <span className="signed-in-label">{email}</span>
          <button
            className="auth-button"
            type="button"
            onClick={signOut}
            disabled={isLoading}
          >
            {isLoading ? "Signing out..." : "Sign out"}
          </button>
        </>
      ) : (
        <button
          className="auth-button"
          type="button"
          onClick={signInWithGoogle}
          disabled={isLoading}
        >
          {isLoading ? "Connecting..." : "Continue with Google"}
        </button>
      )}
      {errorMessage ? (
        <span className="auth-error" role="alert">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
}
