'use client'
import React, { useState, useEffect } from 'react';

interface User {
    name: string;
    id: string;
}

interface CardProps {
    users: User[];
}

const Card: React.FC<CardProps> = ({ users }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Function to check screen size
    const checkMobileView = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        // Check initial window size
        checkMobileView();

        // Add event listener to monitor window resize
        window.addEventListener('resize', checkMobileView);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', checkMobileView);
        };
    }, []);

    return (
        <div>
            <ul className={`flex  ${isMobile ? 'flex-col' : 'flex-wrap'}`}>
                {users && users.map((user: User,index:number) => (
                    <li
                        className={`${
                            isMobile ? 'w-full mb-4' : 'w-[40%] mr-4 mb-4'
                        } ${index%2===0?'bg-orange-400':'bg-sky-400'} flex items-center justify-start border p-5`}
                        key={user.id}
                    >
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
