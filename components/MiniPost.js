import BASE_URL from '/config/';
import Link from "next/link";
import Image from 'next/image';

const Post = ({ data }) => 
{
    const { title, description, slug } = data;
    const image = data.image.data.attributes.url;
    const src = `${BASE_URL}${image}`;
    return (
    <Link href={`/blog/${slug}`}>
        <div className="post">
            <div className='image'>
                <Image loader={() => src} src={src} layout='fill'/>
            </div>
            <div className='info'>
                <h2> { title } </h2>
                <p> { description } </p>
            </div>
        </div>
    </Link>
    )
}

export default Post