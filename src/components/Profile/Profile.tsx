"use client"
import React from 'react';

const Profile = ({ user } :any) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={user.profileImageUrl}
        alt={`${user.username}'s profile`}
        className="rounded-full w-16 h-16 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{user.username}</h2>
      <p className="text-gray-600">{user.bio}</p>
      <div className="mt-4">
        <a href={user.twitterUrl} className="mr-2 text-blue-500">
          Twitter
        </a>
        <a href={user.linkedinUrl} className="text-blue-500">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Profile;
