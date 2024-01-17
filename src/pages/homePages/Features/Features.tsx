import React from "react";
import Link from "next/link";

const Features: React.FC = () => {
  return (
    <div id="features" className="lg:my-12">
      <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
        <div className="mb-16 text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Excursiones
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Una mejor manera de explorar la vida
          </p>
        </div>
        <div className="flex flex-wrap my-12 dark:text-white">
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(16, 185, 129)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
              </svg>
              <div className="ml-4 text-xl">Aconcagua</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Far far away, behind the word mountains, far countries Vokalia.
            </p>
          </div>
          {/* Repite la estructura para los demás elementos */}
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(16, 185, 129)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
              </svg>
              <div className="ml-4 text-xl">Telteca</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Mendoza  se tranforma en el lugar para tus vacaciones soñadas.
            </p>
          </div>
          {/* estructura 3 */}
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(16, 185, 129)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
              </svg>
              <div className="ml-4 text-xl">Potrerillos</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Mendoza  se tranforma en el lugar para tus vacaciones soñadas.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
        <Link href="/home#guidelines" passHref>
  <button className="uppercase py-2 px-4 rounded-lg bg-gray-500 border-2 border-transparent text-white text-md hover:bg-yellow-400">
    Read Guidelines
  </button>
</Link>

        </div>
      </div>
    </div>
  );
};

export default Features;

