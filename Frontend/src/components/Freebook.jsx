import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const filterData = list.filter((data) => data.category === "free");
   // console.log(filterData);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20'>
    <div>
    <h1 className=' font-semibold text-xl pb-2'>Free Offered Courses</h1>
    <p>Embark on a journey through the written word, where each turn of the page opens doors to new possibilities and endless discovery.</p>
    </div>
    <div className=" w-full p-12 ">
    <Slider {...settings}>
       {filterData.map((item) => (
        <Cards item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    
    </>
  )
}

export default Freebook