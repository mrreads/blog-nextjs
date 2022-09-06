const baseUrl = 'http://localhost:1337/api';

const getAllPost = async () => 
{
    let url = `${baseUrl}/posts`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

export { getAllPost }