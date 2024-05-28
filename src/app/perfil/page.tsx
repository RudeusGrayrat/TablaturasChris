
import Profile from '@/components/Profile/Profile';
import React from 'react';

const Perfil = () => {
    return (
        <div className="container mx-auto">
            <Profile
                user={{
                    username: 'Acordes',
                    bio: 'Sitio web de acordes de guitarra',
                    profileImageUrl: 'https://pbs.twimg.com/profile_images/1275164047312907776/7f8d6c6f_400x400.jpg',
                    twitterUrl: 'https://twitter.com/Acordes',
                    linkedinUrl: 'https://www.linkedin.com/in/acordes',
                }}
            ></Profile>
        </div>
    );
};

export default Perfil;
