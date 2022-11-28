import React, { useState } from "react";
import {
  ButtonSliderLess,
  ButtonSliderPlus,
  ImgSlider,
  SliderContainer,
} from "./SliderStyle";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const MyCollection = [
  {
    label: "First Picture",
    imgPath:
      "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126871/drinksCo/publijager_nhbees.webp",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126871/drinksCo/publijohny_bw9dgm.jpg",
  },
  {
    label: "Third Picture",
    imgPath:
      "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126875/drinksCo/publigin2_dixozi.jpg",
  },
];
const Slider = () => {
  const CollectionSize = MyCollection.length;
  const [index, setActiveStep] = useState(0);
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <SliderContainer>
      <ButtonSliderLess onClick={goToPrevPicture} disabled={index === 0}>
        <BsFillArrowLeftSquareFill />
      </ButtonSliderLess>

      <ImgSlider
        src={MyCollection[index].imgPath}
        alt={MyCollection[index].label}
      />
      <ButtonSliderPlus
        onClick={goToNextPicture}
        disabled={index === CollectionSize - 1}
      >
        <BsFillArrowRightSquareFill />
      </ButtonSliderPlus>
    </SliderContainer>
  );
};

export default Slider;
