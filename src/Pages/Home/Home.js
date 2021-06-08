import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Offer from "../../components/Offer/Offer";
import Projects from "../../components/Projects/Projects";
import HeaderHome from "../../components/Header/HeaderHome/HeaderHome.js"
import useWebTitle from "../../hooks/useWebTitle";

export default function Home() {

  const setTitle = useWebTitle();
  setTitle("Strona główna");


  return (
    <>
      <HeaderHome />
      <AboutCompany />
      <Projects />
      <Offer />
    </>
  )
}