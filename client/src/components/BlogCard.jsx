/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BlogPostCSS from "../assets/css/BlogCard.module.scss";

function BlogCard({ img, title, text, date, link, dataTitle, dataSubject }) {
  return (
    <article
      className={BlogPostCSS["blogCard"]}
      data-title={dataTitle}
      data-subject={dataSubject}
    >
      <div>
        <img src={img} alt="PostImage" />
        <span className={BlogPostCSS["blogCard__date"]}>{date}</span>
      </div>
      <div className={BlogPostCSS["blogCard__content"]}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={link}>
          Devamını oku
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 16 16"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
