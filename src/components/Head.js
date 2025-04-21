import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getSearchgSuggestions = async () => {
    // console.log("API CALL with - ", searchQuery);
    // const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    // const json = await data.json();
    // console.log("json = ", json[1]);
    // return json[1];
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchgSuggestions(), 200);
    // make an api call after every key press
    // but if the difference between 2 api calls is < 200
    // decline the api call
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /*
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   * key - ip
   * - destroy the component(useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   * setTimeout(200) - make a api call
   *
   */

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/hamburger-1768101-1505167.png?f=webp&w=512"
        />

        <a href="/">
          <img
            className="h-10 mx-2"
            alt="youtube-logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {}
        {/* <div className="fixed bg-white w-[31rem] py-2 px-2 shadow-lg rounded-lg border border-gray-100">
          <ul>
            <li className="py-2 px-2 shadow-sm hover:bg-gray-100">🔍 iphone</li>
            <li className="py-2 px-2 shadow-sm hover:bg-gray-100">🔍 iphone</li>
            <li className="py-2 px-2 shadow-sm hover:bg-gray-100">🔍 iphone</li>
            <li className="py-2 px-2 shadow-sm hover:bg-gray-100">🔍 iphone</li>
            <li className="py-2 px-2 shadow-sm hover:bg-gray-100">🔍 iphone</li>
            <li className="py-2 px-2 shadow-sm hover:bg-gray-100">🔍 iphone</li>
          </ul>
        </div> */}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
