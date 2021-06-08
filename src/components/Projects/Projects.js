import Section from "../Section/Section";
import proj from '../../assets/img/proj.jpg';
import proj2 from '../../assets/img/proj_1.jpg';
import Projectv3Home from "./Project/Projectv3Home";
import { useEffect, useRef, useState } from "react";
import './Projects.css';
import LinkHandler from "../../helpers/LinkHandler";

export default function Projects() {

  const projectsContainer = useRef();
  const [flag, setFlag] = useState(null);

  const showProjects = () => {
    let time = .25;
    for (let i = 0; i < projectsContainer.current.children.length; i++) {
      projectsContainer.current.children[i].classList.add('showElement');
      projectsContainer.current.children[i].style.animationDelay = `${time}s`;
      time = time + .25;
    }
  }


  if (flag) {
    showProjects();
  } else if (flag === false) {
    for (let i = 0; i < projectsContainer.current.children.length; i++) {
      projectsContainer.current.children[i].classList.remove('showElement');
    }
  }

  useEffect(() => {

    const projectsContainerEl = projectsContainer.current;

    const scrollHandler = () => {
      if (window.scrollY > projectsContainerEl.offsetTop / 4) {
        setFlag(true);
      } else if (window.scrollY < projectsContainerEl.offsetTop / 6) {
        setFlag(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, [])



  return (
    <Section title="Nasze realizacje" >
      <div className="row">
        <div className="col-12">
          <div ref={projectsContainer} className="row justify-content-center">
            <Projectv3Home img={proj2} title="Header" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <Projectv3Home img={proj} title="Header" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <Projectv3Home img={proj} title="Header" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
          </div>
        </div>

        <div className="col-12 mt-3 text-center">
          <LinkHandler to='/projects' title="Sprawdź pozostałe realizacje" />
        </div>

      </div>
    </Section>
  )
}