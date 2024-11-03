import Nav from "@/app/layouts/Nav";
import Hero from "@/app/layouts/Hero";
import PreLoader from "@/app/layouts/PreLoader";
import Wilderlee from "@/app/layouts/Wilderlee";
import Jubas from "@/app/layouts/Jubas";
import MoreProjects from "@/app/layouts/MoreProjects";
import Profile from "@/app/layouts/Profile";
import Footer from "@/app/layouts/Footer";

export default function Home() {
  return (
  <>
  <PreLoader/>
    <header>
      <Nav/>
    </header>
    <main>
      <Hero/>
      <Wilderlee/>
      <Jubas/>
      <MoreProjects/>
      <Profile/>
      <Footer/>
    </main>
  </>
  );
}
