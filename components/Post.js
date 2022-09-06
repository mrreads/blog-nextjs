import Link from "next/link";

const Post = ({ data }) => 
{
    const { title, content } = data;
    return (
    <div className="post">
        <h1> { title } </h1>
        <p> { content } </p>
    </div>
    )
}

export default Post