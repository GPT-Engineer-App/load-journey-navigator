import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatFacts from "./CatFacts";

const CatBreed = ({ name, description, image }) => (
  <Card className="mb-4 overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "Large, gentle giants with long, fluffy coats.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious fur.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Wild-looking cats with leopard-like spots or marbling.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin and large ears.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

  const carouselImages = [
    "https://placekitten.com/800/400",
    "https://placekitten.com/801/400",
    "https://placekitten.com/802/400",
    "https://placekitten.com/803/400",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-center text-purple-800">Feline Fascination</h1>
        <div className="mb-12 relative">
          <Slider {...settings}>
            {carouselImages.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Cat ${index + 1}`} className="w-full h-[400px] object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-70 px-3 py-1 rounded-full">
            {currentSlide + 1} / {carouselImages.length}
          </div>
        </div>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Embark on a journey through the enchanting world of cats. These graceful creatures have captivated human hearts for millennia with their independence, agility, and affectionate nature. Discover the diverse tapestry of cat breeds, each weaving its own unique story of charm and character.
        </p>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-800">Fascinating Feline Facts</h2>
          <CatFacts />
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-center text-purple-800">Explore Cat Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catBreeds.map((breed, index) => (
            <CatBreed key={index} name={breed.name} description={breed.description} image={breed.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
