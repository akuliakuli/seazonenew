import Footer from "../components/Footer";
import About from "../components/About";
import Header from "../components/Header";

export default function AboutPage() {
    return (
      <main className="flex flex-col items-center ">
        <Header/>
        <About />
        <Footer/>
      </main>
    );
  }
  