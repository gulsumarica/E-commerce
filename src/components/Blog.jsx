import React, { useEffect } from "react";
import blogImages from "../data/blogImages.json";
import feather from "feather-icons";

function Blog() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className=" flex flex-col items-center m-8 mt-20 gap-4 ">
      <div className="flex flex-col items-center m-8 gap-4 ">
        <h6 className="text-[#23A6F0] text-xs font-bold">Practice Advice</h6>
        <h3 className="font-bold text-4xl w-40 text-center md:w-full">
          Featured Products
        </h3>
        <p className="text-[#737373] w-60 text-center md:w-full">
          Problems trying to resolve the conflict between the two major{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 ">
        {blogImages.map((image) => (
          <div key={image.id} className="w-60">
            <div
              className=" h-60 bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${image.img})` }}
            >
              <h2 className="inline-block px-4 py-2 bg-[#E74040] text-white font-semibold text-center rounded-md mt-4 ml-4">
                NEW
              </h2>
            </div>
            <div className="border shadow">
              <div className="flex flex-col items-start m-4 gap-2">
                <nav className="flex items-center gap-2">
                  <a className="text-[#8EC2F2] text-xs">Google</a>
                  <a className="text-[#737373] text-xs">Trending</a>
                  <a className="text-[#737373] text-xs">New</a>
                </nav>
                <h4 className="text-[#252B42] w-44">
                  Loudest à la Madison #1 (L'integral)
                </h4>
                <p className="text-[#737373] w-52 text-xs">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex flex-row justify-between gap-4 ">
                  <div className="flex flex-row items-center gap-1">
                    <i
                      data-feather="clock"
                      className="stroke-[#23A6F0] w-5 h-5"
                    ></i>
                    <p className="text-[#737373] text-xs w-20">22 April 2021</p>
                  </div>
                  <div className="flex fex-row items-center gap-1">
                    <i
                      data-feather="message-square"
                      className="stroke-[#23856D] w-5 h-5"
                    ></i>
                    <p className="text-[#737373] text-xs w-20">10 comments</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <h6 className="text-[#737373] font-medium">Learn More</h6>
                  <i
                    data-feather="chevron-right"
                    className="stroke-[#23A6F0]"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
