import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCarouselData";

const MainCarousel = () => {
  const items = homeCarouselData.map((item, index) => (
    <img
      src={item.image}
      alt=""
      className="cursor-pointer"
      role="presentation"
      key={index}
    />
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      autoPlayInterval={1000}
      disableButtonsControls
      infinite
      animationType="fadeout"
    />
  );
};

export default MainCarousel;
