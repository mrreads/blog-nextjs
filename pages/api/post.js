import BASE_URL from '/config/';

const getPostBySlug = async (slug) => 
{
    let url = `${BASE_URL}/api/slugify/slugs/post/${slug}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

export { getPostBySlug }