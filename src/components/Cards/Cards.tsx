import React from 'react';
import Image from 'next/image';
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="m-8 text-center hover:scale-110 duration-200">
      <Image src={imageUrl} width="400" height="400" alt=''></Image>
      <div className="card-conztent">
        <h2 className="card-title">{title}</h2>
        <span className="card-description">{description}</span>
      </div>
    </div>
  );
};

export default Card;