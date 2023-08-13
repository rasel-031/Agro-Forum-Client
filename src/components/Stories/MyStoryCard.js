import OutsideClickHandler from "react-outside-click-handler";
import { postDateCalculation } from "../../configs/postDateCalculation";
import { IoIosMore } from "react-icons/io";
import { Link} from "react-router-dom";
import { useState } from "react";

const MyStoryCard = ({ post }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const closeDropdown = () => {
    setOverlayVisible(false);
  };

  //individual array click
  const toggleButton = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <div className="flex flex-col">
      <Link to={post._id}>
        <div className="pt-8 flex cursor-pointer">
          <div>
            <p className="pb-2 font-bold text-justify">{post.title}</p>
            <p className="text-slate-500 text-justify pr-4">{post.story}</p>
          </div>
        </div>
      </Link>
      <div className="pt-3 text-slate-500 flex">
        <div className="pb-4">
          <p>
            Published&nbsp;
            <span>{postDateCalculation(post.datetime).postTime + "ago."}</span>
            <span className="px-4">|</span>
          </p>
        </div>
        <div className="flex flex-col">
          <OutsideClickHandler onOutsideClick={closeDropdown}>
            <div>
              <button className="text-xl" onClick={toggleButton}>
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
                        View status
                      </Link>
                      <Link to="" className="py-1 text-red-400">
                        Delete story
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </OutsideClickHandler>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MyStoryCard;
