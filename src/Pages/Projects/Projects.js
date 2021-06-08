import ProjectPage from '../../components/Projects/Project/ProjectPage';
import Section from "../../components/Section/Section";
import proj from '../../assets/img/proj.jpg'
import proj2 from '../../assets/img/proj_1.jpg';
import proj3 from '../../assets/img/proj_2.jpg';
import { useEffect, useRef } from "react";
import HeaderPage from '../../components/Header/HeaderPage/HeaderPage';
import { gsap } from 'gsap';
import useWebTitle from '../../hooks/useWebTitle';

export default function Projects() {

  const setTitle = useWebTitle();
  setTitle("Realizacje");

  const projects = [{
    img: proj2,
    title: 'Projekt 1',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolorem, fugiat quae reiciendis necessitatibus aut praesentium ratione quibusdam provident at. Impedit, dolor. Et accusamus impedit voluptate, ducimus quae facere perspiciatis."
  }, {
    img: proj3,
    title: 'Projekt 2',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolorem, fugiat quae reiciendis necessitatibus aut praesentium ratione quibusdam provident at. Impedit, dolor. Et accusamus impedit voluptate, ducimus quae facere perspiciatis."
  }, {
    img: proj,
    title: 'Projekt 3',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolorem, fugiat quae reiciendis necessitatibus aut praesentium ratione quibusdam provident at. Impedit, dolor. Et accusamus impedit voluptate, ducimus quae facere perspiciatis."
  }, {
    img: proj2,
    title: 'Projekt 4',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolorem, fugiat quae reiciendis necessitatibus aut praesentium ratione quibusdam provident at. Impedit, dolor. Et accusamus impedit voluptate, ducimus quae facere perspiciatis."
  }, {
    img: proj3,
    title: 'Projekt 5',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolorem, fugiat quae reiciendis necessitatibus aut praesentium ratione quibusdam provident at. Impedit, dolor. Et accusamus impedit voluptate, ducimus quae facere perspiciatis."
  }, {
    img: proj,
    title: 'Projekt 6',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolorem, fugiat quae reiciendis necessitatibus aut praesentium ratione quibusdam provident at. Impedit, dolor. Et accusamus impedit voluptate, ducimus quae facere perspiciatis."
  }]

  const projectsContainer = useRef();

  useEffect(() => {
    const visibleElements = [];

    const projectsContainerElements = projectsContainer.current.children;

    const gsapHandler = (elements, index) => {

      if (visibleElements.includes(index)) return;

      const container = elements;
      const imgContainer = elements.querySelector('.project__img-container');
      const textContainer = elements.querySelector('.project__text-container');

      const tlElement = gsap.timeline();

      tlElement.set(container, {
        visibility: 'visible',
        scaleX: 0,
        transformOrigin: '50% 50%',
      })
        .set(imgContainer, {
          visibility: 'visible',
          scale: 0,
          transformOrigin: '50% 50%',

        })
        .set(textContainer, {
          visibility: 'visible',
          opacity: 0,
        })

      tlElement.to(container, {
        duration: 1,
        scaleX: 1,
        repeat: 0,
        delay: .25,
        ease: 'back.out(1.7)'
      })
        .to(imgContainer, {
          duration: .75,
          scale: 1,
          ease: 'none'
        })
        .to(textContainer, {
          duration: .75,
          opacity: 1,
          ease: 'none',
          delay: -.25
        })

      visibleElements.push(index)
    };

    gsapHandler(projectsContainerElements[0], 0);

    for (let i = 1; i < projectsContainerElements.length; i++) {
      const projectContainer = projectsContainerElements[i];
      document.addEventListener("scroll", () => {
        if (window.scrollY > (projectsContainerElements[i - 1].offsetTop - 100)) {
          return gsapHandler(projectContainer, i);
        }
      })
    }

  })



  return (
    <>
      <HeaderPage />
      <Section title="Nasze realizacje" color="light">
        <div ref={projectsContainer}>
          {projects.map((project, index) => {
            return index % 2 !== 0
              ? (<ProjectPage key={index} {...project} order={true} />)
              : (<ProjectPage key={index} {...project} />);
          })}
        </div>
      </Section>
    </>
  )
}