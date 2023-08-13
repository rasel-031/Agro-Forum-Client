import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  IoIosMore,
  IoIosShareAlt,
  IoIosHeartEmpty,
  IoMdChatboxes,
} from "react-icons/io";
import { postDateCalculation } from "../../configs/postDateCalculation";

const IndividualStory = () => {
  const { id } = useParams();
  const myPosts = useSelector((state) => state.userPosts.user_stories.myPosts);
  const post_data = myPosts.find((obj) => obj._id === id);

  return (
    <div>
      <div>
        <div className="text-justify text-3xl">
          <p>{post_data.title}</p>
        </div>
        <div className="pt-3 text-slate-500">
          <p>
            Published&nbsp;
            <span>
              {postDateCalculation(post_data.datetime).postTime + "ago."}
            </span>
          </p>
        </div>
        <div className="py-3">
          <hr />
        </div>
        <div>
          <div className="text-justify text-slate-500">
            <p>{post_data.story}</p>
          </div>
          <div className="py-6 max-w-[70%]">
            <img src={post_data.imageURL} alt="" />
          </div>
          <div className="flex items-center justify-between">
            <span className="hover:underline hover:text-red-400">
              120 likes
            </span>
            <span className="hover:underline hover:text-red-400">
              12 responses
            </span>
          </div>
          <div>
            <hr />
            <div className="py-3 flex items-center justify-between">
              <div className="flex">
                <button className="flex items-center px-6 py-2 hover:bg-slate-100 rounded text-md">
                  <span>
                    <IoIosHeartEmpty />
                  </span>
                  <span className="pl-2">Like</span>
                </button>
                <button className="flex items-center px-6 py-2 hover:bg-slate-100 rounded text-md">
                  <span>
                    <IoMdChatboxes />
                  </span>
                  <span className="pl-2">Response</span>
                </button>
              </div>
              <div>
                <button className="text-xl px-6 py-2 hover:bg-slate-100 rounded">
                  <IoIosShareAlt />
                </button>
                <button className="text-xl px-6 py-2 hover:bg-slate-100 rounded">
                  <IoIosMore />
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualStory;
