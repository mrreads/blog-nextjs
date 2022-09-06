import { getAllPost } from './api/posts';

export async function getStaticProps() {
  const posts = await getAllPost();
  return {
    props: {
      posts,
    },
  }
}

export default function Home(props) {
  console.log(props)  
  return (
    <div>
      <h1> Blog </h1>
    </div>
  )
}
