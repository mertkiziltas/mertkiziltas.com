/* eslint-disable react/prop-types */
import React from "react";
import BlogMakerElementCSS from "../assets/css/BlogMakerElement.module.scss";

function BlogMakerElement() {
  const [inputType, setInputType] = React.useState("textarea");
  const [content, setContent] = React.useState("");

  const changeToImage = () => {
    setInputType("input");
  };

  const changeToText = () => {
    setInputType("textarea");
  };

  const handleInputChange = (event) => {
    setContent(event.target.value);

  };

  return (
    <div className={BlogMakerElementCSS["BlogMakerElement"]}>
      <div className={BlogMakerElementCSS["BlogMakerElement__buttonWrapper"]}>
        <span>İçerik</span>
        <button onClick={changeToText} id="textBtn">
          Makale
        </button>
        <button onClick={changeToImage} id="imageBtn">
          Resim
        </button>
      </div>
      {inputType === "textarea" ? (
        <textarea
          name="content"
          id="content"
          placeholder="Makale gir"
          value={content}
          onChange={handleInputChange}
        ></textarea>
      ) : (
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Resim linki gir"
          value={content}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default BlogMakerElement;