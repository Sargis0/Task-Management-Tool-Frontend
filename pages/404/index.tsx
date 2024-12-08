import React from 'react';
import fs from 'fs';
import path from 'path';

import {useRouter} from 'next/router';

export async function getStaticProps() {
    const pagesDirectory = path.join(process.cwd(), 'pages');
    const pageFiles = fs
        .readdirSync(pagesDirectory)
        .filter((file) => !file.startsWith('_') && file !== '404.js' && file !== 'api');

    const validPages = pageFiles.map((file) => file.replace(/\.js$/, ''));

    return {
        props: {
            validPages,
        },
    };
}

const PageNotFound = ({validPages}) => {
    const router = useRouter();
    const misspelledPath = router.asPath;

    return (
        <div style={{textAlign: 'center', padding: '50px'}}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for <strong>{misspelledPath}</strong> doesn't exist.</p>
            <p>Here are some valid pages you can visit:</p>
            <ul>
                {validPages.map((page) => (
                    <li key={page}>
                        <a href={`/${page}`} style={{color: 'blue', textDecoration: 'underline'}}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PageNotFound;
