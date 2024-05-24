import Image from "next/image";
import Header from '././components/header'
import Footer from '././components/footer'
import Homepage from "./home/page";

export default function Home() {
  return (
    <>
    <Header/>
  <main>
    <Homepage/>
    <Footer/>
    </main>
    </>
  );
}
