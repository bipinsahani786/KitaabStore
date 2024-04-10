import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container   md:px-20 px-4 ">
        <div className=" mt-[90px] items-center justify-center text-center ">
          <h1 className="text-2xl  font-semibold md:text-4xl">
            We're delighted to have you
            <span className=" text-pink-500"> Here :)</span>
          </h1>
          <p className=" mt-12">
            Dive into a world of literary delights, where stories come alive and
            imagination knows no bounds. Explore our vast collection of books,
            carefully curated to satisfy every reader's craving, from gripping
            mysteries to heartwarming classics. Embark on a journey through the
            written word, where each turn of the page opens doors to new
            possibilities and endless discovery.
          </p>
          <Link to="/">
          <button className=" bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-6">
          Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-1 mx-3">
          {list.map((item) => (
            <Cards    key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
