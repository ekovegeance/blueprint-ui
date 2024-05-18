"use client";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }

export default function DiscountBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerPadding: "60px",
    responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="container px-6 mx-auto mt-20 xl:mt-32 2xl:px-36 ">
      <div className="flex items-center justify-start gap-3">
        <div className="font-semibold text-md xl:text-xl">
          Kejar Diskon Spesial
        </div>
        <div>
          <Button className="px-2 py-1 text-xs md:text-sm md:py-2 md:px-4" variant="primarySubtle">
            Lainnya
          </Button>
        </div>
      </div>
      <div className="slider-container">
      <Slider className="mt-6 " {...settings}>
        <div className="mx-4 ">
          <img src="/banner.png" alt="Slide 1" />
        </div>
        <div className="">
          <img src="/banner.png" alt="Slide 2" />
        </div>
      </Slider>
      </div>
    </div>
  );
}
