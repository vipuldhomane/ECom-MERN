import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../data/Men/men_kurta";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";

const HomePage = () => {
  return (
    <>
      <MainCarousel />
      {/* <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Ethnic"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Ethnic"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Formal"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Ethnic"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Sports"} />
      </div> */}
      <Product />
      <Footer />
    </>
  );
};

export default HomePage;
