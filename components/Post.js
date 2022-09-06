import BASE_URL from '/config/';

import parse from 'html-react-parser';

const Post = ({ data }) => 
{
    const { content } = data;

    return (
    <div className="post">
        <div className="ck-content">
            { parse(content, { 
                replace: node => (node.name == 'img') ? node.attribs.src = BASE_URL + node.attribs.src : null,
                replace: node => (node.name == 'img') ? node.attribs.srcset = node.attribs.srcset.replaceAll('/uploads/', `${BASE_URL}/uploads/`) : null 
            }) }
        </div>
    </div>
    )
}

export default Post