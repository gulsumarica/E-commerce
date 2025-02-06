import React, { useState } from "react";
import Select from "react-select";
function Filter() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "option 1", label: "seçenek 1" },
    { value: "option 2", label: "seçenek 2" },
    { value: "option 3", label: "seçenek 3" },
  ];
  return (
    <div className="flex flex-col items-center justify-around h-[150px] md:flex md:flex-row md:justify-around">
      <p className="text-[#737373]">Showing all 12 results</p>

      <div className="flex flex-row items-center justify-around gap-2">
        <p className="text-[#737373]">Views:</p>
        <button
          data-feather="square"
          className="stroke-black border border-[#ECECEC] w-8 h-8 rounded-md "
        ></button>
        <button
          data-feather="list"
          className="stroke-[#ECECEC] border border-[#ECECEC] w-8 h-8 rounded-md"
        ></button>
      </div>
      <div className="flex flex-row items-center justify-around gap-2">
        <Select
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          placeholder="Popularity"
        />
        <button className="bg-[#23A6F0] text-white w-24 h-10 rounded-md">
          Filter
        </button>
      </div>
    </div>
  );
}

export default Filter;
