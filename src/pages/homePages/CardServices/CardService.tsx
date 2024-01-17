import React from "react";
import Link from "next/link";

interface Plan {
  _id: string;
  image: string;
  price: number;
  name: string;
  description: string;
  // Agrega otras propiedades según la estructura de tus datos
}

interface CardServiceProps {
  planDetails: Plan;
}

const CardService: React.FC<CardServiceProps> = ({ planDetails }) => {
  return (
    <div>
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <div className="w-full block h-full">
          <img
            alt="blog"
            src={planDetails.image}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-green-500 text-md font-medium">
              Starting From BDT {planDetails.price}
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {planDetails.name}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {planDetails.description.slice(0, 190)}...
            </p>
          </div>
          <Link
            href={`/plans/${planDetails._id}`}
            passHref
          >
            <a className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-b-md text-white bg-green-600 hover:bg-green-700 md:py-3 md:text-lg md:px-6">
              Book Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardService;
