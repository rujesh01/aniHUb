"use client";

import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Separator } from "./ui/separator";
import { Box, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Generate alphabet array
const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

const Footer = () => {
  const router = useRouter();

  const handleClick = (endpoint: string) => {
    router.push(`/az-list/${endpoint}`);
  };

  return (
    <div className="w-full bg-slate-900">
      <header className="border-b border-slate-800 px-2">
        <div className=" mx-auto flex items-center gap-4">
          <Logo />
          <Separator orientation="vertical" className="h-14 bg-gray-700" />
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-gray-500 font-semibold text-sm">
              Join <br /> Now
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#229ED9] hover:bg-[#1c87bc] rounded-md w-8 h-8 p-1.5"
              >
                <MessageCircle className="w-full h-full text-white" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="bg-[#FF4500] hover:bg-[#d93a00] rounded-md w-8 h-8 p-1.5"
              >
                <Box className="w-full h-full text-white" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] rounded-md w-8 h-8 p-1.5"
              >
                <Twitter className="w-full h-full text-white" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto p-4">
        <div className="mb-6 flex items-center gap-3">
          <h1 className="text-xl text-white font-semibold">A-Z LIST</h1>
          <Separator orientation="vertical" className="h-4 bg-gray-700" />
          <p className="text-slate-400 text-sm">
            Searching anime order by alphabet name A to Z.
          </p>
        </div>

        <nav className="flex flex-wrap gap-1 mb-6">
          <Button
            variant="ghost"
            className="text-white hover:bg-pink-500 hover:text-white bg-slate-500/40 px-3"
            onClick={() => handleClick("")}
          >
            All
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-pink-500 hover:text-white bg-slate-500/40 px-3"
            onClick={() => handleClick("other")}
          >
            #
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-pink-500 hover:text-white bg-slate-500/40 px-3"
            onClick={() => handleClick("0-9")}
          >
            0-9
          </Button>
          {alphabet.map((letter) => (
            <Button
              key={letter}
              variant="ghost"
              className="text-white hover:bg-pink-500 hover:text-white bg-slate-500/40 px-3"
              onClick={() => handleClick(letter)}
            >
              {letter}
            </Button>
          ))}
        </nav>

        {/* Footer */}
        <footer className="border-t border-slate-800 mt-8 py-4 text-sm text-slate-400">
          <div className="flex gap-4 mb-4 text-white/80 text-xs">
            <Link href="#" className="hover:text-white">
              Terms of service
            </Link>
            <Link href="#" className="hover:text-white">
              DMCA
            </Link>
            <Link href="#" className="hover:text-white">
              Contact
            </Link>
            <Link href="#" className="hover:text-white">
              HiAnime App
            </Link>
          </div>
          <p className="mb-1">
            AniHub does not store any files on our server, we only linked to the
            media which is hosted on 3rd party services.
          </p>
          <p>© AniHub. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
