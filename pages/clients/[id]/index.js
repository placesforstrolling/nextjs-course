import React from 'react';
import {useRouter} from 'next/router';

const ClientProjectPage = () => {


    const router = useRouter();

    console.log(router.query);

    function getProject() {
      // load data...

      router.push({
        pathname: '/clients/[id]/[clientProjectId]',
        query: { id: 'mus', clientProjectId: 'a' },
      });
      // router.push('/clients/[id]', `/clients/${router.query.id}`);
        return router.query.id;
    }
    

  return (
    <div>
      <h1>Client Project Page</h1>
      <button onClick={getProject}>Load Project A</button>
    </div>
  )
}

export default ClientProjectPage;