import ArtworkCard from "./ArtworkCard";

const artworks = [
  {
    image: "https://source.unsplash.com/random/800x1000?MASP",
    title: "Museu de Arte de São Paulo (MASP)",
    description: "Localização: Avenida Paulista, São Paulo, Brasil.\n\nHistória: Fundado em 1947 por Assis Chateaubriand e Lina Bo Bardi, o MASP é reconhecido pela sua arquitetura moderna e suspensa, projetada por Lina Bo Bardi. É um marco cultural e histórico do Brasil.\n\nFuncionamento: O MASP exibe exposições permanentes e temporárias, incluindo obras de grandes artistas brasileiros e internacionais. É um ponto de encontro para amantes da arte.\n\nCuriosidades: O MASP possui um dos acervos mais importantes da América Latina, abrangendo diversos períodos e estilos artísticos.",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?Louvre",
    title: "Museu do Louvre",
    description: "Localização: Paris, França.\n\nHistória: Inaugurado em 1793, o Louvre foi originalmente um palácio real antes de se tornar um museu após a Revolução Francesa. Hoje, é o museu mais visitado do mundo, famoso por sua pirâmide de vidro e acervo inigualável.",
  },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
      {artworks.map((artwork, index) => (
        <ArtworkCard key={index} {...artwork} />
      ))}
    </div>
  );
};

export default Gallery;