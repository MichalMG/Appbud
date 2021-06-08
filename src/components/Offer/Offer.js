import Section from "../Section/Section";
import toolsIco from '../../assets/ico/tools.svg';
import afforIco from '../../assets/ico/affordable.svg';
import engineerIco from '../../assets/ico/engineer.svg';
import OfferElementv3Header from "./OfferElement/OfferElementv3Header";
import LinkHandler from "../../helpers/LinkHandler";

export default function Offer() {


  return (
    <Section title="Oferta" color="light">
      <div className="row">
        <div className="col-12">
          <div className="row justify-content-center">
            <OfferElementv3Header order="order-1 order-lg-1" title="Lorem " img={toolsIco} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <OfferElementv3Header order="order-2 order-lg-2" title="Lorem 2" img={afforIco} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <OfferElementv3Header order="order-4 order-lg-3" title="Lorem 3" img={engineerIco} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <OfferElementv3Header order="order-3 order-lg-4" title="Lorem 4" img={toolsIco} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
          </div>
        </div>

        <div className="col-12 mt-3 text-center">
          <LinkHandler to='/offers' title="Sprawdź naszą ofertę" />
        </div>
      </div>
    </Section>
  )
}