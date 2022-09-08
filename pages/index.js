import { getAllPost } from './api/posts';

import Post from 'components/MiniPost';

const Home = ({ posts }) => {
  return (
      <>
      
      <div className='heading-wrapper'>
        <div className='heading'>
          <h1> Все записи </h1>
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