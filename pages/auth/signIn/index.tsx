// pages/auth/signIn/index.tsx
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SignInPage = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (session && !isRedirecting && router.isReady) {
      // display some message to the user that he is being redirected
      setIsRedirecting(true);
      setTimeout(() => {
        // redirect to the return url or home page
        router.push(router.query.returnUrl as string || '/' );
      }, 2000);
    }
  }, [session, isRedirecting, router]);

  const handleSignIn = () => {
    signIn('discord');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <p>Sign in to access protected pages</p>
      {session ? (
        <div>
          <p>Currently signed in as {session?.user?.name}</p>
          <p>Redirecting to home page...</p>
          <Link href='/'>
            <button>Go to home</button>
          </Link>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default SignInPage;
