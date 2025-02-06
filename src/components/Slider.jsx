import React from "react";
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomArrow({ onClick, direction }) {
  return (
    <button
      className={`absolute z-50 text-white text-3xl font-bold flex items-center justify-center w-12 h-12 bg-black bg-opacity-50 rounded-full ${
        direction === "prev" ? "left-4" : "right-4"
      }`}
      onClick={onClick}
    >
      {direction === "prev" ? "◀" : "▶"}
    </button>
  );
}

function Slider({ slides }) {
  console.log(slides);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };
  return (
    <div className="relative flex items-center justify-center h-[400px] w-full">
      <SliderLib {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center h-[400px] w-full"
          >
            {slide.image && (
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute w-full h-full object-cover"
              />
            )}
            <div className="relative z-10 text-white flex flex-col items-center justify-center h-[400px] w-full md:h-full  md:items-start ">
              {slide.title && (
                <h5 className="text-xs font-bold md:text-sm">{slide.title}</h5>
              )}
              {slide.subtitle && (
                <h1 className="text-3xl font-semibold md:text-4xl">
                  {slide.subtitle}
                </h1>
              )}
              {slide.p && <h4 className="text-xs md:text-sm">{slide.p}</h4>}
            </div>
          </div>
        ))}
      </SliderLib>
    </div>
  );
}

export default Slider;
