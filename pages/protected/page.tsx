import { useSession } from 'next-auth/react';

const ProtectedPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Protected Page</h1>
      {/* <p>Hi {user?.name}!</p> */}
    </div>
  );
};

ProtectedPage.requireAuth = true;

export default ProtectedPage;
