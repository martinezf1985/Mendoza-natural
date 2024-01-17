// import React from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const Banner: React.FC = () => {
//   const router = useRouter();

//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };

//   const handleClick = (e: React.MouseEvent, path: string) => {
//     e.preventDefault();
//     handleNavigation(path);
//   };

//   return (
//     <div id="home" className="bg-purple-800 items-center overflow-hidden">
//       <div className="sm:container mx-auto px-6 sm:flex sm:flex-row flex-col py-16">
//         <div className="sm:w-2/3 lg:w-3/6 flex flex-col">
//           <span className="w-20 h-2 bg-black md:mb-12"></span>
//           <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-200 hover:rotate-180 transform origin-center transition-all duration-300 ease-in-out ">
//             Mendoza
//             <span className="text-5xl  sm:text-7xl hover:rotate-45 transform origin-center transition-all duration-300 ease-in-out">
//               Natural
//             </span>
//           </h1>
//           <h1 className="w-32 h-32  hover:rotate-45 transform origin-center transition-all duration-300 ease-in-out">
//             {" "}
//             holaaaaaa{" "}
//           </h1>
//           <p className="text-sm sm:text-base text-yellow-500 dark:text-white hover:rotate-180 transform origin-center transition-all duration-300 ease-in-out">
//             Dimension of reality that makes change possible and understandable.
//             An indefinite and homogeneous environment in which natural events
//             and human existence take place.
//           </p>
//           <div className="flex mt-8">
//           <Link href="/home#services" passHref>
//   <button className="uppercase py-2 px-4 rounded-lg bg-gray-500 border-2 border-transparent text-white text-md mr-4 hover:bg-yellow-400">
//     Get started
//   </button>
// </Link>

// <Link href="/home#features" passHref>
//   <button className="uppercase py-2 px-4 rounded-lg bg-gray-500 border-2 border-gray-200 text-gray-100 dark:text-white hover:bg-yellow-400 hover:text-white text-md">
//     Read more
//   </button>
// </Link>


//           </div>
//         </div>

//         <div className="hidden sm:block sm:w-1/3 lg:w-3/6 ">
//           <img
//             src="/logo-princ.png"
//             alt="banner"
//             className="w-80 h-auto rounded-full mx-auto "
//           />
//         </div>
//         <div className="sm:hidden flex justify-center items-center my-4 ">
//           <img src="/banner.png" alt="banner" className="max-w-xs " />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Banner: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    handleNavigation(path);
  };

  return (
    <div
      id="home"
      className="bg-purple-800 items-center overflow-hidden"
      style={{ backgroundImage: "url('/dique-2.jpg')" }}
    >
      <div className="sm:container mx-auto px-6 sm:flex sm:flex-row flex-col py-16">
        <div className="sm:w-2/3 lg:w-3/6 flex flex-col">
          <span className="w-20 h-2 bg-black md:mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-200 hover:rotate-180 transform origin-center transition-all duration-300 ease-in-out ">
            Mendoza
            <span className="text-5xl  sm:text-7xl hover:rotate-45 transform origin-center transition-all duration-300 ease-in-out">
              Natural
            </span>
          </h1>
          <h1 className="w-32 h-32  hover:rotate-45 transform origin-center transition-all duration-300 ease-in-out">
            {" "}
            holaaaaaa{" "}
          </h1>
          <p className="text-sm sm:text-base text-yellow-500 dark:text-white hover:rotate-180 transform origin-center transition-all duration-300 ease-in-out">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div className="flex mt-8">
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

        <div className="hidden sm:block sm:w-1/3 lg:w-3/6 ">
          <img
            src="/logo-princ.png"
            alt="banner"
            className="w-80 h-auto rounded-full mx-auto object-contain"
          />
        </div>
        <div className="sm:hidden flex justify-center items-center my-4 ">
          <img src="/banner.png" alt="banner" className="max-w-xs " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
