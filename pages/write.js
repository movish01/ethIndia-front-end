import { useState, useEffect } from "react";
import Link from "next/link";

export default function Write() {
  return (
    <div>
      <div className="text-2xl ml-14 mr-14 font-bold text-purple-500">
        Publish for the people:
      </div>
      <div className="flex flex-col ml-96 mb-24 mr-64 mt-8 gap-4">
        <div className="flex flex-row gap-4 items-center">
          <label className="text-xl">Title</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs ml-20"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label className="text-xl">Tags</label>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary ml-24 btn-sm m-1">
              Choose Tags
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Science</a>
              </li>
              <li>
                <a>Education</a>
              </li>
              <li>
                <a>Lifestyle</a>
              </li>
              <li>
                <a>Others</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start grow">
          <label className="text-xl">Content</label>
          <textarea
            className="textarea textarea-bordered ml-16 w-96 h-96"
            placeholder="Write here!"
          ></textarea>
        </div>
        <Link href="">
          <button className="w-24 ml-32 btn btn-primary btn-outline">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
