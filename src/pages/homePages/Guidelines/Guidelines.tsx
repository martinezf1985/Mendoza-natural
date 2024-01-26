import React from "react";
import Link from "next/link";

const Guidelines: React.FC = () => {
  return (
    <div id="guidelines">
      {/* Otras partes del componente... */}

      <div className="lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        {/* Otras partes del componente... */}
<h1>hola a todos mi nombre es pablo isola soy  un protector de la cerveza y el fernet</h1>
        <div className="mt-12 inline-flex rounded-md shadow">
        <Link href="/home#services" passHref>
  <button className="uppercase py-2 px-4 rounded-lg bg-gray-500 border-2 border-transparent text-white text-md mr-4 hover:bg-yellow-400">
    Get started
  </button>
</Link>

<Link href="/home#features" passHref>
  <button className="uppercase py-2 px-4 rounded-lg bg-gray-500 border-2 border-gray-200 text-gray-100 dark:text-white hover:bg-yellow-400 hover:text-white text-md">
    Read more
  </button>
</Link>


        </div>
      </div>
    </div>
  );
};

export default Guidelines;































// import React from "react";
// import Link from "next/link";

// const Guidelines: React.FC = () => {
//   return (
//     <div id="guidelines">
//       <div className="bg-white dark:bg-gray-800 ">
//         <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
//           <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
//             <span className="block">How to stay safe while travelling ?</span>
//             <span className="block text-indigo-500">
//               See our guidelines from experts.
//             </span>
//           </h2>
//           <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
//             Travel can be an exciting, eye-opening experience. It’s easy to get
//             caught up in the thrill of adventure. But don’t forget about travel
//             security and safety considerations while you’re abroad.
//           </p>
//         </div>
//       </div>
//       {/* video section */}

//       <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
//         <div className="text-start lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
//           <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
//             <span className="block text-indigo-500">
//               Watch this special video from our specialist Pablo Isola.
//             </span>
//           </h2>
//           <p className="text-xl mt-4 text-gray-400">
//             To get more detailed guidelines don't hesitate to{" "}
//             <Link href="/home#contact">
//               <a className="text-yellow-500 hover:underline">contact us</a>
//             </Link>
//             .
//           </p>
//           <div className="lg:mt-0 lg:flex-shrink-0">
//             <div className="mt-12 inline-flex rounded-md shadow">
//               <a
//                 href="https://www.youtube.com/watch?v=tcaKkko2EAY"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <button
//                   type="button"
//                   className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
//                 >
//                   Watch Now
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//         <iframe
//           className="absolute h-full max-w-1/2 hidden lg:block right-8 top-0"
//           width="560"
//           height="315"
//           src="https://www.youtube.com/watch?v=tcaKkko2EAY"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Guidelines;












// import React from "react";

// const Guidelines: React.FC = () => {
//   return (
//     <div id="guidelines">
//       <div className="bg-white dark:bg-gray-800 ">
//         <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
//           <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
//             <span className="block">How to stay safe while travelling ?</span>
//             <span className="block text-indigo-500">
//               See our guidelines from experts.
//             </span>
//           </h2>
//           <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
//             Travel can be an exciting, eye-opening experience. It’s easy to get
//             caught up in the thrill of adventure. But don’t forget about travel
//             security and safety considerations while you’re abroad.
//           </p>
//         </div>
//       </div>
//       {/* video section */}

//       <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
//         <div className="text-start lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
//           <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
//             <span className="block text-indigo-500">
//               Watch this special video from our specialist Pablo Isola.
//             </span>
//           </h2>
//           <p className="text-xl mt-4 text-gray-400">
//             To get more detailed guidelines don't hesitate to contact us.
//           </p>
//           <div className="lg:mt-0 lg:flex-shrink-0">
//             <div className="mt-12 inline-flex rounded-md shadow">
//               <a
//                 href="https://www.youtube.com/watch?v=tcaKkko2EAY"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <button
//                   type="button"
//                   className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
//                 >
//                   Watch Now
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//         <iframe
//           className="absolute h-full max-w-1/2 hidden lg:block right-8 top-0"
//           width="560"
//           height="315"
//           src="https://www.youtube.com/watch?v=tcaKkko2EAY"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Guidelines;
