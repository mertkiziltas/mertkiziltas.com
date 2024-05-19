import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <div>
      <Navbar></Navbar>
      <div id="app" className="app app-full-height app-without-header">
        <div className="error-page">
          <div className="error-page-content">
            <div className="error-code">404</div>
            <h1>Hay Aksi!</h1>
            <h3>Aradığın Sayfayı Bulamadık.</h3>
            <p className="mb-5">
                <Link to={`/`} className="link-secondary text-decoration-none">
                   Anasayfa
                </Link>
            </p>
            <Link to={'/'}
              className="btn btn-theme px-3 rounded-pill"
            >
           Geri Dön
            </Link>
          </div>
        </div>
        <a data-toggle="scroll-to-top" className="btn-scroll-top fade">
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}

export default NotFound;
