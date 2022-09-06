import { useRouter } from 'next/router'

import { getAllPost } from './../api/posts';
import { getPostBySlug } from './../api/post';

import Post from 'components/Post';

export async function getStaticPaths() {
  const postsAll = await getAllPost();
  const postsSlug = postsAll.data.map(p => `/blog/${p.attributes.slug}`);
  return {
    paths: postsSlug,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  return { props: { post: post }}
}



const SinglePost = ({ post }) => {
  return (<Post data={post.data.attributes} />)
}

export default SinglePost