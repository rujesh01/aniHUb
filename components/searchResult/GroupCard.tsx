import { Mic } from "lucide-react";
import Image from "next/image";

const GroupCard = ({ cards, animeName }: { cards: any, animeName: string | null | undefined }) => {
  return (
    <>
      <h1 className="font-bold text-xl text-pink-200 mx-4 py-6">Search Results for: {animeName}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {cards.map((card: any, index: number) => (
          <div
            key={index}
            className="  relative group"
          >
            {/* Image */}
            <div className="relative h-72 shadow-xl bg-slate-300">
              <Image
                src={card.poster}
                alt={card.name}
                layout="fill"
                // objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {/* Badge (e.g., 18+) */}
              {card.rating && (
                <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
                  {card.rating}
                </span>
              )}

              {card.episodes && (
                <div className="absolute left-2 bottom-2 flex items-center space-x-1 mt-2">
                  <span className="bg-lime-300 text-black text-xs px-2 py-1 rounded-md">
                    CC {card.episodes.sub}
                  </span>
                  {card.episodes.dub && (
                    <span className="bg-lime-200 text-black text-xs px-2 py-1 rounded-md flex">
                      <Mic size={16} /> {card.episodes.dub}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-white font-semibold text-sm truncate">
                {card.name}
              </h3>
              <p className="text-gray-400 text-xs mt-1">{card.type} • {card.duration}</p>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GroupCard;
