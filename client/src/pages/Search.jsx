import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import BlogCSS from "../assets/css/Blog.module.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Search() {
  const [post, setPost] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Veri alınamadı");
        }
        return res.json();
      })
      .then((data) => {
        const foundPostCard = data.filter((item) => item.tags.includes(search));
        setPost(foundPostCard);
      })
      .catch((error) => {
        console.error("Veri alınırken bir hata oluştu:", error);
      });
  }, [search]);

  if (!post) {
    return <div>Yükleniyor..</div>;
  }

  return (
    <div className={BlogCSS["page"]}>
      <Navbar></Navbar>
      <main className={BlogCSS["content"]}>
        <div className={BlogCSS["subjects"]}>
          <Link to={"/Blog/Search/yazilim"}>Yazılım Dünyası</Link>
          <Link to={"/Blog/Search/mern"}>MERN</Link>
          <Link to={"/Blog/Search/uiux"}>UI/UX</Link>
          <Link to={"/Blog/Search/frameworks"}>
            Framework ve Kütüphaneler
          </Link>
        </div>
        <div className={BlogCSS["postWrapper"]}>
          {post.length === 0 ? (
            <div className={BlogCSS["nothingFoundText"]}>
              <span>Görüntülenecek bir şey yok</span>
              <img src="https://res.cloudinary.com/dl7u49phz/image/upload/v1716069976/23-235111_memoji-ios-13-hd-png-download-removebg-preview_tuf6mg.png" />
            </div>
          ) : (
            post.map((item) => (
              <BlogCard
                key={item.id}
                title={item.title}
                img={item.img}
                text={item.text}
                date={item.date}
                link={item.link + item.id}
              />
            ))
          )}
        </div>
        <footer className={BlogCSS["footer"]}>
          <div className={BlogCSS["footer__content"]}>
            <a href="/">
              <img
                src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918049/MertK_duaf0p.png"
                alt="Mert Kızıltaş logo"
              />
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
      </main>
    </div>
  );
}

export default Search;
