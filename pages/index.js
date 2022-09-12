import { Suspense } from 'react';
import { getAllPost } from './api/posts';

import Head from 'next/head';
import Post from 'components/MiniPost';

const Home = ({ posts }) => {
  const loading = <p className='message'>Загрузка постов...</p>;
  return (
      <>

      <Head>
        <title>Блог</title>
      </Head>

      <div className='heading-wrapper'>
        <div className='heading'>
          <h1> Блог  </h1>
        </div>
      </div>


      <Suspense fallback={loading}>
        <div className='posts'>
          { (posts.length) ? posts.map(post => (<Post key={post.id} data={post.attributes} />)) : loading }
        </div>
      </Suspense>


      </>
  )
}

export async function getStaticProps() {
  try
  {
    const posts = await getAllPost();
    return {
      props: { posts },
      revalidate: 60
    }
  }
  catch
  {
    return {
      props: { posts: {} },
      revalidate: 60
    }
  }


}

export default Home;