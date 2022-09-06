const baseUrl = 'http://localhost:1337/api';
import BASE_URL from '/config/';

const getAllPost = async () => 
{
    let url = `${BASE_URL}/api/posts?populate=*`;
    const response = await fetch(url);
    const json = await response.json();
    return json.data
}

export { getAllPost }