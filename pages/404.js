import Link from "next/link";

const Error = () => {
  return (
      <>
      
      <Link href="/">
        <div className='heading' style={{cursor: "pointer"}}>
          <h1> Перейти на главную </h1>
        </div>
      </Link>


      <h1 style={{textAlign: 'center'}}>В данный момент такой страницы нет</h1>

      </>
  )
}

export default Error;