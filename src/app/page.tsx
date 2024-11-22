import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import DhruvaDoes from "@/components/DhruvaDoes";
import Title from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Title />
      <DhruvaDoes />
      <AboutUs />
      <ContactUs/>
    </>
  );
}
