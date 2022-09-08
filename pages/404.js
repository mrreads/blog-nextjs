import Head from 'next/head';
import Link from "next/link";

const Error = () => {
  return (
      <>
      <Head>
        <title> 404 </title>
      </Head>

      <Link href="/">
        <div className='heading-wrapper'>
          <div className='heading' style={{cursor: "pointer"}}>
            <h1> Перейти на главную </h1>
          </div>
        </div>
      </Link>


      <h1 style={{textAlign: 'center'}}>В данный момент такой страницы нет</h1>

      </>
  )
}

export default Error;