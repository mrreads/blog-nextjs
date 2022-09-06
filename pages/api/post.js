const baseUrl = 'http://localhost:1337/api';

const getPostBySlug = async (slug) => 
{
    let url = `${baseUrl}/slugify/slugs/post/${slug}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

export { getPostBySlug }