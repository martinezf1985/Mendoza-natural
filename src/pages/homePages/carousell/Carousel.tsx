// import React, { useState, useEffect } from 'react';

// const Carousel: React.FC = () => {
//   const images = [
//     "/dique-potre.jpg",
//     "/dique-2.jpg",
//     "/dique-potre.jpg",
//     "/praia-grande.png",
//     "/logo-princ.png"
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000); // Cambia la imagen automáticamente cada 5 segundos

//     return () => clearInterval(interval);
//   }, [currentImageIndex]);

//   return (
//     <div id="indicators-carousel" className="relative w-full" data-carousel="static">
//       {/* Carousel wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute w-full h-full ${index === currentImageIndex ? 'block' : 'hidden'}`}
//             data-carousel-item={index === currentImageIndex ? 'active' : ''}
//           >
//             <img
//               src={image}
//               className="w-full h-full object-cover"
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Slider indicators */}
//       <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-300'}`}
//             aria-current={index === currentImageIndex ? 'true' : 'false'}
//             aria-label={`Slide ${index + 1}`}
//             data-carousel-slide-to={index}
//             onClick={() => setCurrentImageIndex(index)}
//           ></button>
//         ))}
//       </div>

//       {/* Slider controls */}
//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={handlePrev}
//       >
//         {/* ... (Previous button SVG) */}
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={handleNext}
//       >
//         {/* ... (Next button SVG) */}
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const images = [
    "/dique-potre.jpg",
    "/dique-2.jpg",
    "/dique-potre.jpg",
    "/praia-grande.png",
    "/logo-princ.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    
    <div className="relative w-1/2 mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider controls outside the image */}
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        {/* ... (Previous button SVG) */}
        Prev
      </button>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        {/* ... (Next button SVG) */}
        Next
      </button>
    </div>
  );
};

export default Carousel;
