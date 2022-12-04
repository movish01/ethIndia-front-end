import { useState, useEffect } from "react";
import Link from "next/link";
import NewsDetails from "./news/news-details";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 font-mono">
      <div className="flex gap-4 flex-row ml-12 mr-12 h-96">
        <div className="border-4 border-purple-300 flex flex-col rounded-lg basis-1/2">
          <span className="mt-4 ml-4 inline-block font-bold text-4xl">
            DAO Maker - Community Investigates
          </span>
          <div className="flex flex-row gap-2 ml-4 mt-2 text-purple-500">
            <text className="bg-purple-200 border-0 rounded-lg px-2">DAO</text>
            <text className="bg-purple-200 border-0 rounded-lg px-2">
              Investigations
            </text>
          </div>
          <div className="mt-2 ml-4 italic text-gray-500">
            3rd December, 2020 | 05:36 AM
          </div>
          <div className="mt-3 ml-4 mr-4 grow">
            Here goes the content, we have to specify how much content is to be
            shown, as it is not possible to show all the contents of the
            article, so we have to restrict the text of the content shown.
          </div>
          <div>
            <Link href="./news/dao-news">
              <button className="btn btn-primary btn-outline mb-4 mr-4 float-right">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 flex-col basis-1/2 h-96">
          <div className="border-4 border-purple-300 rounded-lg basis-1/2"></div>
          <div className="border-4 border-purple-300 rounded-lg basis-1/2"></div>
        </div>
      </div>
      <div className="flex gap-4 flex-col ml-12 mr-12 h-96">
        <span className="text-4xl font-bold text-purple-500">
          <Link href="/">All News</Link>
        </span>
        <div className="flex gap-4 flex-row">
          <div className="border-4 border-purple-300 rounded-lg basis-1/4 news"></div>
          <div className="border-4 border-purple-300 rounded-lg basis-1/4"></div>
        </div>
      </div>
    </div>
  );
}
