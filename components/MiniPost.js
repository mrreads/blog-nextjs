import Link from "next/link";

const Post = ({ data }) => 
{
    const { title, description, slug } = data;
    return (
    <Link href={`/blog/${slug}`}>
        <div className="post">
            <h1> { title } </h1>
            <p> { description } </p>
        </div>
    </Link>
    )
}

export default Post