'use client'

import { Dot, Mic, Plus } from "lucide-react";
import Image from "next/image";

const MostPopular = ({ popularAnimes }: { popularAnimes: any }) => {
    return (
        <div className="mx-4">
            <h1 className="font-bold text-xl text-pink-300 py-6">Most Popular</h1>
            <div className="space-y-2 bg-slate-800">
                {popularAnimes.map((anime: any, index: number) => (
                    <div key={index}>
                        <div className="flex items-center rounded-lg p-4 ">
                           
                            <div className="w-16 h-20 overflow-hidden rounded-lg flex-shrink-0">
                                <Image
                                    src={anime.poster}
                                    alt={anime.name}
                                    width={64}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>

                            <div className="ml-4 flex-grow">
                                <h2 className="text-white font-bold text-sm">{anime.name}</h2>
                                <div className="flex items-center mt-2 space-x-1">
                        
                                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-lg ">
                                        CC {anime.episodes.sub}
                                    </span>
                                 
                                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-lg flex justify-center items-center">
                                        <Mic size={16} /> {anime.episodes.dub}
                                    </span>
                                    <span className="pr-1 py-1 text-gray-400 text-sm">
                                        •{anime.type}
                                    </span>
                                </div>
                            </div>

                           
                            <div className="ml-1">
                                <button className="text-gray-400 hover:text-white"><Plus size={22} /></button>
                            </div>
                        </div>
                        {/* Horizontal line */}
                        <hr className="border-t-1 border-gray-700 mx-4" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MostPopular;