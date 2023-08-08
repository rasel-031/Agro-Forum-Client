import React from "react";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";

const Stories = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setOverlayVisible(!overlayVisible);
  };

  const closeDropdown = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="px-[20%] py-14 font-serif">
      <div className="flex items-center">
        <p className="pr-20 font-bold text-3xl">Your stories</p>
        <button onClick={() => navigate("/me/new-post")} 
        className="rounded-full outline outline-1 px-5 py-2 hover:bg-black hover:text-white">
          Write a story
        </button>
      </div>
      <div className="pt-8">
        <p className="pb-1 flex items-center">
          Published <span className="ml-2">100</span>
        </p>
        <hr />
      </div>
      {/* map action here */}
      <div className="flex flex-col">
        <div className="pt-8 flex">
          <div>
            <p className="pb-2 font-bold text-justify">
              Which is better for future private or govt job?
            </p>
            <p className="text-slate-500 text-justify pr-4">
              No two employees are alike. Each person has different
              experiences,’s task is one they are not only suited for, but also
              will enjoy completing. Giving your team tasks they find personally
              rewarding or challenging canthey are not only suited for, but also
              will enjoy completing. Giving your team tasks they find personally
              rewarding or challenging canthey are not only suited for, but also
              will enjoy completing. Giving
            </p>
          </div>
        </div>

        <OutsideClickHandler onOutsideClick={closeDropdown}>
          <div className="pt-3 text-slate-500 flex">
            <div className="pb-4">
              <p>
                Published&nbsp;
                <span>about 2 hours ago</span>
                <span className="px-4">|</span>
              </p>
            </div>
            <div className="flex flex-col">
              <div>
                <button className="text-xl" onClick={toggleDropdown}>
                  <IoIosMore />
                </button>
              </div>
              <div>
                {overlayVisible && (
                  <div>
                    <div className="bg-slate-100 w-5 h-5 absolute z-40 origin-center rotate-45"></div>
                    <div className="absolute z-50 ml-[-1rem]">
                      <div className="flex flex-col bg-slate-100 py-2 px-3 mt-2 rounded">
                        <Link to="" className="py-1">
                          Edit story
                        </Link>
                        <Link to="" className="py-1">
                          View stats
                        </Link>
                        <Link to="" className="py-1 text-red-400">
                          Delete story
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </OutsideClickHandler>
        <hr />
      </div>
    </div>
  );
};

export default Stories;
