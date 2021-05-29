import React, { useState } from "react";
import "./CrouselPage.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const CarouselPage = () => {
  let slideCrouselImage = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg",
    " https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Essentials/D23636912_IN_CEPC_BAU-essentals-graphics_May21_1500x300_2.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Milaap_Hero_pc1x._CB669734096_.jpg",
  ];
  const [imgSlidePos, setImgSlidePos] = useState(0);
  function goRight() {
    console.log(imgSlidePos);
    imgSlidePos === -100 * (slideCrouselImage.length - 1)
      ? setImgSlidePos(0)
      : setImgSlidePos(imgSlidePos - 100);
  }

  function goLeft() {
    console.log(imgSlidePos);
    imgSlidePos === 0
      ? setImgSlidePos(-100 * (slideCrouselImage.length - 1))
      : setImgSlidePos(imgSlidePos + 100);
  }

  // setInterval(function () {

  //   console.log(imgSlidePos);
  //   if(imgSlidePos === 0){
  //     setImgSlidePos(-100 * (slideCrouselImage.length - 1))
  //   }
  //    else if( imgSlidePos === -100 * (slideCrouselImage.length - 1)){
  //   setImgSlidePos(0);
  // }
  // else{
  //   setImgSlidePos(imgSlidePos+100);
  // }

  // }, 8000);

  return (
    <div className="slider">
      {slideCrouselImage.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${imgSlidePos}%)` }}
          >
            <img className="home_image" src={item} />
          </div>
        );
      })}

      <button className="go-left" onClick={goLeft}>
        <ArrowBackIosIcon />
      </button>
      <button className="go-right" onClick={goRight}>
       <ChevronRightIcon/>
      </button>
    </div>
  );
};

export default CarouselPage;
