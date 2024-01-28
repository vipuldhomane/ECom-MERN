import "./productCard.css";
const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://www.ethnicplus.in/media/catalog/product/cache/5ebcbfb3a827b89a3c2351c584b5862e/5/3/5378_1_.jpg"
          alt="Product Image"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">Ethnic Plus</p>
          <p className="">
            Extraordinary Red Zari Weaving Banarasi Silk Wedding Wear Saree
          </p>
        </div>
        <div className="flex items-center space-x-2 pt-2">
          <p className="font-semibold">₹999.00</p>
          <p className="line-through opacity-50">₹3999.00</p>
          <p className="text-green-600 font-semibold ">75% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
