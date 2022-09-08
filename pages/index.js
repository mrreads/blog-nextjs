import { getAllPost } from './api/posts';

import Head from 'next/head';
import Post from 'components/MiniPost';

const Home = ({ posts }) => {
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



      <div className='posts'>
      {
        posts.map(post => {
          return (<Post key={post.id} data={post.attributes} />)
        })
      }
      </div>
      </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPost();
  return {
    props: { posts }
  }
}

export default Home;