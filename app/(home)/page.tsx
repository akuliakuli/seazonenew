import About from "../components/About";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import Slider from "../components/Slider";
import Wave from "../components/Wave";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Header/>
      <Slider/>
      <Ad/>
      <Search/>
      <Wave/>
      <About/>
      <Footer/>
    </main>
  );
}
