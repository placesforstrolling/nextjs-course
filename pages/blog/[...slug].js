import React from 'react';

import {useRouter} from 'next/router';

const BlogPostsPage = () => {

    const router = useRouter();

    console.log(router.query);

  return (
    <h1>Blog Posts Page</h1>
  )
}

export default BlogPostsPage;