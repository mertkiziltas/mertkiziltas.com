import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostCss from "../assets/css/Post.module.scss";
import MarkdownViewer from "../components/MarkdownViewer";

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Veri alınamadı");
        }
        return res.json();
      })
      .then((data) => {
        const foundPost = data.find((item) => item.id === parseInt(id));
        setPost(foundPost);
      })
      .catch((error) => {
        console.error("Veri alınırken bir hata oluştu:", error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={PostCss["postPage"]}>
      <Navbar></Navbar>
      <main className={PostCss["container"]}>
      <MarkdownViewer post={post.content}></MarkdownViewer>
      </main>
      <footer className={PostCss["footer"]}>
        <div className={PostCss["footer__content"]}>
          <a href="/">
            <img src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918049/MertK_duaf0p.png" alt="Mert Kızıltaş logo" />
          </a>
          <span>
            &copy; 2024 Mert Kızıltaş. All rights reserved.
            <br />
            Unauthorized use or reproduction of any content on this site is
            prohibited.
          </span>
          <ul>
            <a href="#about">
              <h2>Hakkımda</h2>
            </a>
            <a href="#projects">
              <h2>Projeler</h2>
            </a>
            <a href="#blog">
              <h2>Blog</h2>
            </a>
            <a href="#contact">
              <h2>İletişim</h2>
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Post;
