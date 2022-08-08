import React from 'react';
import { Link } from 'next/link';
import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {

   const router = useRouter();

   console.log(router.pathname);
    console.log(router.asPath);

  return (
    <div>PortfolioProjectPage</div>
  )
}

export default PortfolioProjectPage;