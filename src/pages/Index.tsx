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
          Art Portfolio
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A curated collection of contemporary artworks exploring the intersection
          of traditional and digital mediums.
        </p>
      </header>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-20">
        <Gallery />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">About the Artist</h2>
          <p className="text-gray-600 leading-relaxed">
            Exploring the boundaries between traditional and digital art, creating
            pieces that reflect the harmony of these two worlds. Each artwork is a
            journey through color, texture, and emotion.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Interested in collaborations or purchasing artwork? Let's connect.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;