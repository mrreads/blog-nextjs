const baseUrl = 'http://localhost:1337/api';

const getAllPost = async () => 
{
    let url = `${baseUrl}/posts`;
    const response = await fetch(url);
    const json = await response.json();
    return json.data
}

export { getAllPost }