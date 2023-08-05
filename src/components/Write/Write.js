import React, { useState } from "react";
import "./Write.scss";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userPostRequest } from "./../../redux/posts/postAction";
import setAuthToken from "../../configs/axiosConfig";

const Write = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState("No image chosen!");
  const [Validate, setValidate] = useState({ title: "", story: "" });
  //redux
  const dispatch = useDispatch();
  const user_token = useSelector((state) => state.userData.login.access_token);
  

  const imageSubmit = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageName(event.target.files[0].name);
      setSelectedImage(event.target.files[0]);
    }
  };

  //removed image btn
  const removeSelectedImage = () => {
    setSelectedImage(null);
    setImageName("No image chosen!");

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Validate.title.length && Validate.story.length !== 0) {
      const formData = new FormData();
      formData.append("title", Validate.title);
      formData.append("story", Validate.story);

      if (selectedImage) {
        formData.append("postImage", selectedImage);

        setAuthToken(user_token);
        dispatch(userPostRequest(formData));
      } else {
        setAuthToken(user_token);
        dispatch(userPostRequest(formData));
      }
    }
    //clear field
    setSelectedImage(null);
    setImageName("No image chosen!");
    setValidate({ title: "", story: "" });
  };

  return (
    <div className="write-container">
      <p className="write-header">
        <BsPencilSquare /> &nbsp; Write Your Story!!!
      </p>
      <form
        className="write-form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="textarea-wrap">
          <textarea
            name="title"
            className="story-textarea"
            placeholder="Story title"
            value={Validate.title}
            onChange={(event) =>
              setValidate({ ...Validate, title: event.target.value })
            }
          />
          {Validate.title === "" && <p>Tittle is missing.</p>}
        </div>
        <div className="file-drop-area">
          <span className="file-btn">
            Choose image to click here
          </span>
          <span className="file-btn-chosen">&nbsp;&nbsp;&nbsp;{imageName}</span>
          <input
            className="file-input"
            type="file"
            name="postImage"
            accept="image/*"
            onChange={imageSubmit}
          />
        </div>
        {selectedImage && (
          <div className="file-upload">
            <img src={URL.createObjectURL(selectedImage)} alt="upload" />
            <button onClick={removeSelectedImage}>Remove</button>
          </div>
        )}
        <div className="textarea-wrap">
          <textarea
            name="story"
            className="story-textarea"
            placeholder="Tell your story"
            value={Validate.story}
            onChange={(event) =>
              setValidate({ ...Validate, story: event.target.value })
            }
          />
          {Validate.story === "" && <p>Story is missing.</p>}
        </div>
        <br />
        <button
          className={
            Validate.title.length && Validate.story.length > 0
              ? "write-form-submit"
              : "button-disabled"
          }
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Write;
