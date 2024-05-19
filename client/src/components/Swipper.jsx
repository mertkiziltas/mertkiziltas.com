import Slider from "react-slick";
import ProjectCard from "./ProjectCard";

function Swipper() {
  const settings = {
    dots: true,    
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <ProjectCard
          src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918050/e-commerce-thumbnail_igquie.png"
          title="B2C E-ticaret Sitesi"
          text="B2C iş modeli ile aracısız doğrudan tüketiciye satış"
          demoLink="https://mertkiziltas.online"
        ></ProjectCard>
        <ProjectCard
          src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918048/proAdmin-thumbnail_bjdfo7.webp"
          title="ProAdmin"
          text="E-ticaret sitesinin yönetim paneli"
          demoLink="https://mertkiziltas.online"
        ></ProjectCard>
                <ProjectCard
          src="https://res.cloudinary.com/dl7u49phz/image/upload/v1716135098/Ekran_g%C3%B6r%C3%BCnt%C3%BCs%C3%BC_2024-05-19_191126_pmpbwb.png"
          title="React-Node Blog App"
          text="Bu sitede görmüş olduğunuz blog scripti"
          demoLink="https://mertkiziltas.online"
        ></ProjectCard>
      </Slider>
    </div>
  );
}

export default Swipper;
