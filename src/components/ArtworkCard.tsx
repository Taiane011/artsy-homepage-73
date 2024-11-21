import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface Comment {
  id: number;
  text: string;
  author: string;
  date: string;
}

interface ArtworkCardProps {
  image: string;
  title: string;
  description: string;
}

const ArtworkCard = ({ image, title, description }: ArtworkCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        text: newComment,
        author: "Anonymous",
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg animate-fade-in">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-medium text-lg mb-1">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>

      <div className="mt-4">
        <Button
          variant="outline"
          className="w-full mb-4"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>

        {showComments && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white p-3 rounded shadow-sm">
                <p className="text-sm text-gray-800">{comment.text}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <span>{comment.author}</span> • <span>{comment.date}</span>
                </div>
              </div>
            ))}

            <div className="space-y-2">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[80px]"
              />
              <Button onClick={handleAddComment} className="w-full">
                Post Comment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtworkCard;