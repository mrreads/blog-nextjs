import { lazy, Suspense, useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { getAllPost } from './../api/posts';
import { getPostBySlug } from './../api/post';

const Post = lazy(() => import('components/Post'));

export async function getStaticProps(context) 
{
  const slug = context.params.slug
  let post = {}
  try
  {
    post = await getPostBySlug(slug);
  }
  finally 
  {
    return { 
      props: { post: post },
      revalidate: 60
    }
  }
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
    fallback: false,
  }
}


const SinglePost = ({ post }) => {
  const loading = <p className='message'>Идёт загрузка...</p>;

  const [scrollPercent, setScrollPercent] = useState(0);
  
  const handleScroll = () => {
    let percent = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
    setScrollPercent(parseInt(percent));
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  return (
  <>

    <div className='progress-bar' style={{ width: scrollPercent + '%' }} />

    <Head>
      <title>{ post.data.attributes.title }</title>
    </Head>

    <div className='heading-wrapper'>
      <Link href="/">
      <div className='heading back'>
        <h2> Назад </h2>
      </div>
      </Link>
      <div className='heading title'>
        <h1> { (post.data.attributes.title) ? post.data.attributes.title : 'Загрухка' } </h1>
      </div>
    </div>

    <Suspense fallback={loading}>
      <Post data={post.data.attributes} />
    </Suspense>
    
  </>)
}

export default SinglePost