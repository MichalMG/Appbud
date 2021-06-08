import Section from "../../components/Section/Section";
import companyLogo from '../../assets/logo_.png'
import HeaderPage from '../../components/Header/HeaderPage/HeaderPage.js'
import useWebTitle from "../../hooks/useWebTitle";

export default function Company() {

  const setTitle = useWebTitle();
  setTitle("O firmie");

  return (
    <>
      <HeaderPage />
      <Section title="Kilka słów o firmie" color="light" id="aboutComapny">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="logoAbout rounded-circle d-flex align-items-center justify-content-center" >
              <img src={companyLogo} alt="" style={{ width: '75%', height: 'auto' }} />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3 d-flex flex-column text-center text-md-start align-items-md-start align-items-center"  >
            <p className="pe-xl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam ipsa quos deserunt nihil, fugiat porro voluptates dignissimos hic inventore eius architecto. Repellat quis nesciunt reiciendis iure incidunt cupiditate suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam ipsa quos deserunt nihil, fugiat porro voluptates dignissimos hic inventore eius architecto. Repellat quis nesciunt reiciendis iure incidunt cupiditate suscipit! </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4 mb-4">
            <img src="https://placeimg.com/640/480/arch" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-4 mb-4">
            <img src="https://placeimg.com/640/480/any" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-4 mb-4">
            <img src="https://placeimg.com/640/480/tech" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-4 mb-4">
            <img src="https://placeimg.com/640/480/tech/grayscale" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-4 mb-4">
            <img src="https://placeimg.com/640/480/nature" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-4 mb-4">
            <img src="https://placeimg.com/640/480/grayscale" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </Section >
    </>
  )
}