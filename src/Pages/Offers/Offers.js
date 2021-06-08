import Section from "../../components/Section/Section";
import OfferElement from '../../components/Offer/OfferElement/OfferElement.js'
import toolsIco from '../../assets/ico/tools.svg';
import afforIco from '../../assets/ico/affordable.svg';
import calendarIco from '../../assets/ico/calendar.svg';
import excavatorIco from '../../assets/ico/construction-excavator.svg';
import engineerIco from '../../assets/ico/engineer.svg';
import fastIco from '../../assets/ico/fast.svg';
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import useWebTitle from "../../hooks/useWebTitle";


export default function Offers() {

  const setTitle = useWebTitle();
  setTitle("Oferta");

  const offers = [{
    title: "Lorem",
    img: toolsIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 1",
    img: afforIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 2",
    img: calendarIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 3",
    img: excavatorIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 4",
    img: engineerIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 5",
    img: fastIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 6",
    img: toolsIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 7",
    img: afforIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 8",
    img: calendarIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 9",
    img: excavatorIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 10",
    img: engineerIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 11",
    img: fastIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }];


  return (
    <>
      <HeaderPage />
      <Section title="Nasza oferta" color="light">
        <div className="row justify-content-center">

          {offers.map((offer, index) => {
            if ((index % 2) !== 0) {
              return <OfferElement key={index} title={offer.title} img={offer.img} description={offer.description} dark={false} />
            } else {
              return <OfferElement key={index} title={offer.title} img={offer.img} description={offer.description} dark={true} />
            }
          })}
        </div>
      </Section>
    </>
  )
}