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
    description: "Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vsit amet consectetur adipisicing elit. Incidunt",
  }, {
    title: "Lorem 2",
    img: calendarIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 3",
    img: excavatorIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vsit amet consectetur adipisicing elit.",
  }, {
    title: "Lorem 4",
    img: engineerIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 5",
    img: fastIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atqsit amet consectetur adipisicing elit. Incidunt expedita, voluptate ",
  }, {
    title: "Lorem 6",
    img: toolsIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }, {
    title: "Lorem 7",
    img: afforIco,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita, voluptate sed atque impedit reprehenderit vident?",
  }];


  return (
    <>
      <HeaderPage />
      <Section title="Oferta v1" color="light">
        <div className="row justify-content-center">

          <div className="col-10 mb-4 mb-md-0 col-md-6 d-flex align-items-center justify-content-center">
            <img src={toolsIco} alt="tools ico" style={{ width: '50%', height: 'auto' }} />
          </div>
          <div className="col-12 col-md-6">

            <div className="accordion accordion-flush" id="accordionOfers">

              {offers.map((offer, index) => {
                return (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`flush-heading${index}`}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                        {offer.title}
                      </button>
                    </h2>
                    <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionOfers">
                      <div className="accordion-body">
                        {offer.description}
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>

          </div>

        </div>
      </Section>
      <Section title="Oferta v2" color="light">
        <div className="row justify-content-center d-flex">

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