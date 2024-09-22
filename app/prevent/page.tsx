// components/page.tsx
import React from 'react';
import Card from './Card';

const Page = async () => {
    const rawUser = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await rawUser.json();

    return (
        <>
            <Card users={users} />
        </>
    );
};

export default Page;
