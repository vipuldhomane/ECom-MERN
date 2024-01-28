import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeSectionCarousel = ({ data, sectionName }) => {
  // const responsive = {
  //   0: { items: 1 },
  //   720: { items: 3 },
  //   1024: { items: 4 },
  // };
  // const slidePrev = () => {
  //   setActiveIndex(index - 1);
  //   console.log(index);
  // };
  // const slideNext = () => {
  //   setActiveIndex(index + 1);
  //   console.log(index);
  // };

  // const syncActiveIndex = ({ item }) => {
  //   console.log(item);
  //   setActiveIndex(item);
  // };

  const items = data
    .slice(0, 10)
    .map((product, index) => <HomeSectionCard product={product} key={index} />);
  return (
    <div className="border p-4 ">
      <h2 className="text-2xl font-extrabold text-gray-900 text-center">
        {sectionName}
      </h2>
      {/* <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          onSlideChanged={syncActiveIndex}
          activeIndex={index}
          infinite
          disableButtonsControls
        />

        {index !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translate(50%) rotate(90deg)",
              bgcolor: "white",
              ":hover": {
                bgcolor: "white",
              },
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {index !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translate(-50%) rotate(-90deg)",
              bgcolor: "white",
              ":hover": {
                bgcolor: "white",
              },
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div> */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4.5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {items}
      </Carousel>
    </div>
  );
};

export default HomeSectionCarousel;
