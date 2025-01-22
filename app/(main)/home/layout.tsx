import Footer from "@/components/Footer";
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
        <Footer />
      </section>
    </>
  );
};

export default HomeLayout;
