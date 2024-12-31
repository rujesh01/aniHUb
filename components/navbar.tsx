import { Menu, MoveIcon, TvIcon } from "lucide-react";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Home from "@/app/page";
import { JSX } from "react";

type NavLinksProps = {
  id: number;
  icons: JSX.Element;
  label: string;
  link: string;
};

const NavLinks = [
  {
    id: 11220,
    icons: <Home />,
    label: "Home",
    link: "/home",
  },
  {
    id: 1,
    icons: <MoveIcon />,
    label: "Movies",
    link: "/Movies",
  },
  {
    id: 2,
    icons: <TvIcon />,
    label: "Tv Series",
    link: "tvSeries",
  },
];

const Navbar = () => {
  return (
    <nav className="h-20 bg-primary-foreground flex flex-row items-center">
      <div>
        <Logo />
      </div>
      <div className="block sm:hidden ">
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
