import { useRouter } from 'next/router'

import { getAllPost } from './../api/posts';
import { getPostBySlug } from './../api/post';

import Post from 'components/Post';

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  return { props: { post: post }}
}

export async function getStaticPaths() {
  const postsAll = await getAllPost();
  const postsSlug = await postsAll.map(p => p.attributes.slug);
  const paths = await postsSlug.map(slug => {
    return {
      params: {
        slug: slug
      }
    }
  });
  
  return {
    paths,
    fallback: 'blocking',
  }
}


const SinglePost = ({ post }) => {
  return (<Post data={post.data.attributes} />)
}

export default SinglePost