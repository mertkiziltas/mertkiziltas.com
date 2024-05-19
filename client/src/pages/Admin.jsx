import React, { useState, useRef, useCallback } from "react";
import Navbar from "../components/Navbar";
import AdminCSS from "../assets/css/Admin.module.scss";
import BlogMakerElement from "../components/BlogMakerElement";
import ReCAPTCHA from "react-google-recaptcha";

function Admin() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstImage, setFirstImage] = useState("");
  const [title, setTitle] = useState("");
  const formRef = useRef(null);
  const [blogElements, setBlogElements] = useState([]);

  const handleRecaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (captchaVerified) {
      const formData = new FormData(formRef.current);
      const email = formData.get("email");
      const password = formData.get("password");

      if (validateCredentials(email, password)) {
        setIsLoggedIn(true);
      } else {
        alert("Erişim engellendi");
      }
    } else {
      alert("Lütfen robot olmadığını onayla !");
    }
  };

  const validateCredentials = (email, password) => {
    return email === "mertkizltas@hotmail.com" && password === "mertly95";
  };

  const handleAddElement = () => {
    const newBlogElements = [
      ...blogElements,
      <BlogMakerElement content="icerik" key={blogElements.length} />,
    ];
    setBlogElements(newBlogElements);
  };

  const handleRemoveElement = (index) => {
    const newBlogElements = [...blogElements];
    newBlogElements.splice(index, 1);
    setBlogElements(newBlogElements);
  };

  const handleCollectData = useCallback(() => {
    const collectedData = blogElements.map((element) => {
      console.log("Element:", element); // Element içeriğini konsola yazdır
      if (React.isValidElement(element)) {
        const content = element.props.children.props.content;
        return { content };
      }
      return null; // veya varsayılan bir değer
    });
    console.log(collectedData);
  }, [blogElements]);
  
  

  if (isLoggedIn) {
    return (
      <div className={AdminCSS.fullPage}>
        <Navbar></Navbar>
        <main className={AdminCSS.dashboardPage}>
          <div className={AdminCSS.pageTitle}>Blog Oluşturucu</div>
          <input
            className={AdminCSS.dashboardPage__imageInput}
            name="firstImage"
            id="firstImage"
            type="text"
            value={firstImage}
            placeholder="Resim linki gir"
            onChange={(e) => setFirstImage(e.target.value)}
          />
          <input
            className={AdminCSS.dashboardPage__titleInput}
            id="title"
            type="text"
            name="title"
            value={title}
            placeholder="Başlık gir"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="BlogMakerElementWrapper">
            {blogElements.map((element, index) => (
              <div key={index}>{element}</div>
            ))}
          </div>
          <div className={AdminCSS.bottomButtons}>
            <a className={AdminCSS.addingBtn} onClick={handleAddElement}>
              Ekle
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="#529ee5"
                  strokeLinecap="round"
                  strokeWidth="3"
                >
                  <path d="M33 7.26261C30.3212 5.81915 27.2563 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C26.85843 29.5685 42.369 32 41.2387" />
                  <path strokeLinejoin="round" d="M31 30L43 30" />
                  <path strokeLinejoin="round" d="M15 22L22 29L41 11" />
                  <path strokeLinejoin="round" d="M37 24V36" />
                </g>
              </svg>
            </a>
            <a className={AdminCSS.removeBtn} onClick={handleRemoveElement}>
              Kaldır
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="#d81313">
                  <path d="M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
                  <path
                    fillRule="evenodd"
                    d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className={AdminCSS.publishBtn}>
            <button type="submit" onClick={handleCollectData}>
              Yayınla
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={AdminCSS["fullPage"]}>
      <Navbar />
      <main className={AdminCSS["authPage"]}>
        <div className={AdminCSS["authCard"]}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <img
              src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918049/MertK_duaf0p.png"
              alt="Mert Kızıltaş logo"
            />
            <input name="email" type="email" placeholder="Mail" required />
            <input
              name="password"
              type="password"
              placeholder="Şifre"
              required
            />
            <div>
              <ReCAPTCHA
                className={AdminCSS.authCard__reCaptcha}
                sitekey="6Ldg0NUpAAAAAOp8M3OLn8g1zCXTVkV5jAEgcGwx"
                onChange={handleRecaptchaChange}
              />
            </div>
            <button type="submit">Giriş Yap</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Admin;
