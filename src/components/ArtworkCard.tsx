import { useState } from "react";

interface ArtworkCardProps {
  image: string;
  title: string;
  description: string;
}

const ArtworkCard = ({ image, title, description }: ArtworkCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="space-y-4 text-left p-4 bg-white rounded-lg shadow-sm">
        <h3 className="text-2xl font-medium text-gray-900">{title}</h3>
        <div className="prose prose-sm text-gray-600 whitespace-pre-line">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;