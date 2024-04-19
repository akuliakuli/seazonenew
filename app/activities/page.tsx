import Footer from "../components/Footer";
import About from "../components/About";
import Header from "../components/Header";
import Activities from "./components/Activities";

export default function ActivitiesPage() {
    return (
      <main className="flex flex-col items-center ">
        <Header/>
        <Activities/>
        <Footer/>
      </main>
    );
  }
  