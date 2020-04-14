import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

it('renders all posts', () => {
    const posts = [{header: 'first'},
        {header: 'second'}];
    const {getByText} = render(<App posts={posts}/>);

    posts.forEach(post => expect(getByText(post.header, {exact: false})).toBeInTheDocument());
});
