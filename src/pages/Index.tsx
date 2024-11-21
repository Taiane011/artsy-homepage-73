import MobileMenu from "@/components/MobileMenu";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MobileMenu />
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center space-x-12 py-8">
        {["Gallery", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16 md:py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
          Explorando os Grandes Museus do Mundo
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Este portfólio apresenta informações detalhadas sobre dois dos museus mais icônicos do mundo: o
          Museu de Arte de São Paulo (MASP) e o Museu do Louvre.
        </p>
      </header>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-20">
        <Gallery />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">ARTE E O MEIO AMBIENTE
  TEMA 5:
  </h2>
          <h3>ARTE E O MEIO AMBIENTE
            PAG:51</h3>
          <p className="text-gray-600 mb-8">
            A Land Art não apenas amplia a definição tradicional de arte, mas também reitera a 
            importância de uma relação mais profunda e respeitosa com o meio ambiente. Ao interagir diretamente com 
            a natureza e ao usar a paisagem como sua tela, essa forma de arte destaca a beleza efêmera do mundo natural
            e convida o público a refletir sobre o impacto humano no planeta.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Contate-nos
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
