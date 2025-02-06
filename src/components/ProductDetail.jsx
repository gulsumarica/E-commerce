import React from "react";
import PropTypes from "prop-types";

function ProductDetail({ image }) {
  return (
    <div className="flex flex-col items-center">
      <img src={image.src} alt={image.alt} />
      <div className="flex flex-col gap-1 items-center">
        <h5 className="font-bold">Graphic Design</h5>
        <h6 className="text-[#737373]">English Department</h6>
        <div className="flex gap-2">
          <h5 className="text-[#737373] font-bold">$16.48</h5>
          <h5 className="text-[#23856D] font-bold">$6.48</h5>
        </div>
        <div className="flex gap-2 m-4">
          <button className="bg-[#23A6F0] rounded-full w-4 h-4"></button>
          <button className="bg-[#23856D] rounded-full w-4 h-4"></button>
          <button className="bg-[#E77C40] rounded-full w-4 h-4"></button>
          <button className="bg-[#252B42] rounded-full w-4 h-4"></button>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetail;
