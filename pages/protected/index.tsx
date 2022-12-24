import { useSession } from 'next-auth/react';

const ProtectedPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Hi {session?.user?.name}!</p>
    </div>
  );
};

// add the requireAuth property to the page component
ProtectedPage.requireAuth = true;

export default ProtectedPage;
