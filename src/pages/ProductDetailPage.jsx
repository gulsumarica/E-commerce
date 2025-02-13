import React from "react";

function ProductDetailPage(props) {
  const image = props.location.state?.image;

  return (
    <div className="bg-[#FAFAFA] ">
      <div className="flex flex-row justify-center h-[100px] items-center w-full p-8">
        <a href="/HomePage" className="font-medium">
          Home
        </a>
        <i data-feather="chevron-right" className="stroke-[#BDBDBD]"></i>
        <h6 className="text-[#737373] font-medium">Shop</h6>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-start md:px-4 md:gap-8">
        <div className=" flex flex-col md:m-10">
          <img
            src={image.src}
            alt={image.alt}
            className="w-64 h-64 object-fill justify-center md:w-80 md:h-80 "
          />
          <div className="flex flex-row gap-2 mt-4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-16 h-16 cursor-pointer md:w-20 md:h-20"
            />
            <img
              src={image.src}
              alt={image.alt}
              className="w-16 h-16 cursor-pointer md:w-20 md:h-20
            "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
