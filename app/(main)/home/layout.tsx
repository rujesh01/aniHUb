import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <section>
        <Navbar />
        {children}
      </section>
    </>
  );
};

export default HomeLayout;
