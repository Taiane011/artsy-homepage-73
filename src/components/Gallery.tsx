import ArtworkCard from "./ArtworkCard";

const artworks = [
  {
    image: "/lovable-uploads/3ae741e8-fada-4fa9-8030-8a4f7f7256d9.png",
    title: "Museu de Arte de São Paulo (MASP)",
    description: "Localização: Avenida Paulista, São Paulo, Brasil.\n\nHistória: Fundado em 1947 por Assis Chateaubriand e Lina Bo Bardi, o MASP é reconhecido pela sua arquitetura moderna e suspensa, projetada por Lina Bo Bardi. É um marco cultural e histórico do Brasil.\n\nFuncionamento: O MASP exibe exposições permanentes e temporárias, incluindo obras de grandes artistas brasileiros e internacionais. É um ponto de encontro para amantes da arte.\n\nCuriosidades: O MASP possui um dos acervos mais importantes da América Latina, abrangendo diversos períodos e estilos artísticos.",
  },
  {
    image: "/lovable-uploads/a140b836-a0e9-4c69-8d2e-ad4d1f7b4550.png",
    title: "Museu do Louvre",
    description: "Localização: Paris, França.\n\nHistória: Inaugurado em 1793, o Louvre foi originalmente um palácio real antes de se tornar um museu após a Revolução Francesa. Hoje, é o museu mais visitado do mundo, famoso por sua pirâmide de vidro e acervo inigualável.",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?museum",
    title: "Novo Museu",
    description: "Adicione a descrição do museu aqui...",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?art-gallery",
    title: "Novo Museu",
    description: "Adicione a descrição do museu aqui...",
  },
  {
    image: "https://source.unsplash.com/random/800x1000?gallery",
    title: "Novo Museu",
    description: "Adicione a descrição do museu aqui...",
  }
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