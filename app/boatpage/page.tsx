import Footer from "../components/Footer";
import Header from "../components/Header";
import Wave from "../components/Wave";
import DescriptionPage from "./Description";

export default function BoatPage() {
    return (
      <main className="flex flex-col items-center ">
        <Header/>
        <DescriptionPage/>
        <Wave/>
      </main>
    );
  }
  