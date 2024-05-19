/* eslint-disable react/prop-types */
import ContentCSS from "../assets/css/Content.module.scss";
import { Link } from "react-router-dom";

function ContentPost({ img, date, title, previewText, link }) {
  return (
    <div to={link} className={ContentCSS["blog__post"]}>
      <img src={img} />
      <span>{title}</span>
      <p>{previewText}</p>
      <div>
        <span>{date}</span>
        <Link to={link}>
          Devamını oku
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="white"
              d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ContentPost;
