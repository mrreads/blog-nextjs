import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MiniPost from './../components/MiniPost';

const post = {
    "id": 3,
    "attributes": {
        "title": "Eget magna fermentum",
        "createdAt": "2022-09-06T14:56:01.364Z",
        "updatedAt": "2022-09-10T21:19:45.319Z",
        "publishedAt": "2022-09-06T15:05:34.059Z",
        "content": "<p>Lorem ipsum dolor sit amet, consectetur... </p>",
        "description": "Lorem ipsum dolor sit...",
        "slug": "eget-magna",
        "image": { "data": { "attributes": { "url": "/uploads/4008890_11ecee95fd.jpg" }}}
    }
}

test('Check <MiniPost /> render', async () => {

    const { container } = render(<MiniPost key={post.id} data={post.attributes} />)

    expect(container.firstChild).toHaveClass('post');
    expect(screen.getByTestId('post-image')).toHaveClass('image');
    expect(screen.getByTestId('post-info')).toHaveClass('info');

    const title = await screen.findByText(/Eget magna fermentum/i);
    expect(title).toBeInTheDocument();
});