import ArtworkCard from "./ArtworkCard";

const artworks = [
  {
    image: "https://source.unsplash.com/random/800x1000?art=1",
    title: "Abstract Harmony",
    description: "Mixed media on canvas",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?art=2",
    title: "Urban Dreams",
    description: "Digital art",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?art=3",
    title: "Nature's Whisper",
    description: "Oil on canvas",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?art=4",
    title: "Digital Waves",
    description: "Digital illustration",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?art=5",
    title: "Ethereal Light",
    description: "Photography",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?art=6",
    title: "Modern Expression",
    description: "Acrylic on canvas",
  },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
      {artworks.map((artwork, index) => (
        <ArtworkCard key={index} {...artwork} />
      ))}
    </div>
  );
};

export default Gallery;