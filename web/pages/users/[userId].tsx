import { NextPage, NextPageContext } from 'next';
import { trpcReact } from '../../src/api/trpc';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { TRPCClientError } from '@trpc/client';

const UserDetailPage: NextPage = (props) => {
  const router = useRouter();
  const { userId } = router.query;
  const userQuery = trpcReact.userById.useQuery({ userId: userId as any });

  console.debug('userQuery', userQuery.isLoading, userQuery.status, userQuery.data, userQuery.error);

  useEffect(() => {
    if (userQuery.error instanceof TRPCClientError) {
      console.error('userQuery.error.message', userQuery.error.message);
      console.debug('userQuery.error', userQuery.error);
    }
  }, [userQuery.error]);

  return <div>TODO</div>;
};

export default UserDetailPage;
