import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import img1 from './Images/Img1.jpg';
import img2 from './Images/Img2.jpg';
import img3 from './Images/Img3.jpg';
import img4 from './Images/Img4.jpg';
import img5 from './Images/Img5.jpg';
import img6 from './Images/Img6.jpg';
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import './App.css';

function App() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Image Carousel</h1>
        <ImageCarousel images={images} />
      </div>
    </BrowserRouter>
  );
}

export default App;












// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import img1 from './Images/Img1.jpg';
// import img2 from './Images/Img2.jpg';
// import img3 from './Images/Img3.jpg';
// import img4 from './Images/Img4.jpg';
// import img5 from './Images/Img5.jpg';
// import img6 from './Images/Img6.jpg';
// import ImageCarousel from "./ImageCarousel/ImageCarousel";
// import './App.css';

// function App() {
//   const images = [
//         { src: img1, alt: "Image 1" },
//         { src: img2, alt: "Image 2" },
//         { src: img3, alt: "Image 3" },
//         { src: img4, alt: "Image 4" },
//         { src: img5, alt: "Image 5" },
//         { src: img6, alt: "Image 6" },
//       ];
    

//   return (
    
//       <div className="App">
//         <h1>Image Carousel</h1>
//         {
//         images.map((image, index) => (
//           <ImageCarousel key={index} image={image.src} alt={image.alt} />
//         ))}
//       </div>
   
//   );
// }

// export default App;



// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home/Home";
// import img1 from "./Images/Img1.jpg";
// import img2 from "./Images/Img2.jpg";
// import img3 from "./Images/Img3.jpg";
// import img4 from "./Images/Img4.jpg";
// import img5 from "./Images/Img5.jpg";
// import img6 from "./Images/Img6.jpg";
// import ImageCarousel from "./ImageCarousel/ImageCarousel";
// import "./App.css";

// function App() {
//   //  const images = [img1,img2,img3,img4,img5,img6];
//   const images = [
//     { src: img1, alt: "Image 1" },
//     { src: img2, alt: "Image 2" },
//     { src: img3, alt: "Image 3" },
//     { src: img4, alt: "Image 4" },
//     { src: img5, alt: "Image 5" },
//     { src: img6, alt: "Image 6" },
//   ];

//   return (
//     <>
//       <div>
//       <div className="image-gallery">
//           <h1>List Images Inside App Component</h1>
//           {
//           images.map((image, index) => (

//             <img key={index} src={image.src} alt={image.alt} />
//           ))}
//         </div>

//         <div className="imgList">
//           <h1>simple display inside app Component</h1>
//           <img src={img1} alt="" />
//           <img src={img2} alt="" />
//           <img src={img3} alt="" />
//           <img src={img4} alt="" />
//           <img src={img5} alt="" />
//           <img src={img6} alt="" />
//         </div>
//         <h1>Image Carousel App</h1>
//         {
//         images.map((image, index) => (
//           <ImageCarousel key={index} image={image.src} alt={image.alt} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;
