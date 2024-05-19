import Slider from "react-slick";
import ProjectCard from "./ProjectCard";

function Swipper() {
  const settings = {
    dots: true,             
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
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
          gitLink="https://github.com/mertkiziltas"
          demoLink="https://mertkiziltas.online"
        ></ProjectCard>
        <ProjectCard
          src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918050/e-commerce-thumbnail_igquie.png"
          title="B2C E-ticaret Sitesi"
          text="B2C iş modeli ile aracısız doğrudan tüketiciye satış"
          gitLink="https://github.com/mertkiziltas"
          demoLink="https://mertkiziltas.online"
        ></ProjectCard>
        <ProjectCard
          src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918050/e-commerce-thumbnail_igquie.png"
          title="B2C E-ticaret Sitesi"
          text="B2C iş modeli ile aracısız doğrudan tüketiciye satış"
          gitLink="https://github.com/mertkiziltas"
          demoLink="https://mertkiziltas.online"
        ></ProjectCard>
        <ProjectCard
          src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918050/e-commerce-thumbnail_igquie.png"
          title="B2C E-ticaret Sitesi"
          text="B2C iş modeli ile aracısız doğrudan tüketiciye satış"
          gitLink="https://github.com/mertkiziltas"
          demoLink="https://mertkiziltas.online"
        ></ProjectCard>
        <ProjectCard
          src="https://res.cloudinary.com/dl7u49phz/image/upload/v1714918050/e-commerce-thumbnail_igquie.png"
          title="B2C E-ticaret Sitesi"
          text="B2C iş modeli ile aracısız doğrudan tüketiciye satış"
          gitLink="https://github.com/mertkiziltas"
          demoLink="https://mertkiziltas.online"
        ></ProjectCard>
      </Slider>
    </div>
  );
}

export default Swipper;
