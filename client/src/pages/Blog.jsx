import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import BlogCSS from "../assets/css/Blog.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


if (!data) {
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
          <Link to={"/Blog/Search/frameworks"}>Framework ve Kütüphaneler</Link>
        </div>
        <div className={BlogCSS["postWrapper"]}>
          {data.map((item) => {
            return (
              <BlogCard
                key={item.id}
                title={item.title}
                img={item.img}
                text={item.text}
                date={item.date}
                link={item.link+item.id}
                dataTitle={item.dataTitle}
                dataSubject={item.dataSubject}
              ></BlogCard>
            );
          })}
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

export default Blog;
