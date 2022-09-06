const Post = ({ data }) => 
{
    const { title, description } = data;
    console.log(image)
    return (
    <div className="post">
        <h1> { title } </h1>
        <p> { description } </p>
    </div>
    )
}

export default Post