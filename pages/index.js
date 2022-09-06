import { getAllPost } from './api/posts';

import Post from 'components/MiniPost';

const Home = ({ posts }) => {
  return (
    <div>
      <h1> Blog </h1>
      {
        posts.data.map(post => {
          return (<Post key={post.id} data={post.attributes} />)
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPost();
  return {
    props: { posts }
  }
}

export default Home;