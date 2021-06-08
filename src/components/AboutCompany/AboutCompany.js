import Section from "../Section/Section";
import companyLogo from '../../assets/logo_.png';
import './AboutCompany.css';
import LinkHandler from "../../helpers/LinkHandler";


export default function AboutCompany() {

  return (
    <Section title="Kilka słów o firmie" color="light" id="aboutComapny">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="logoAbout rounded-circle d-flex align-items-center justify-content-center" >
            <img src={companyLogo} alt="" style={{ width: '75%', height: 'auto' }} />
          </div>
        </div>
        <div className="col-12 col-md-6 mt-3 d-flex flex-column text-center text-md-start align-items-md-start align-items-center"  >
          <p className="pe-xl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam ipsa quos deserunt nihil, fugiat porro voluptates dignissimos hic inventore eius architecto. Repellat quis nesciunt reiciendis iure incidunt cupiditate suscipit!</p>
          <LinkHandler to="/about" title="Więcej informacji" />
        </div>
      </div>
    </Section >
  )
}