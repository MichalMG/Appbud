import Navigation from '../../Navigation/Navigation';
import LinkHandler from '../../../helpers/LinkHandler.js';


export default function HeaderHome() {

  return (
    <>
      <div className="position-relative overflow-hidden mb-4" style={{ height: '50vh', width: '100%', minHeight: '300px' }}>

        <Navigation />

        <div className="header-home__background "></div>
        <div className="header-home__background-dark d-flex justify-content-center align-items-center">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <div>
              <h5 className="text-white text-center">
                Zapraszamy do zapoznania się z naszą ofertą
            </h5>
            </div>
            <div className="mt-3">
              <LinkHandler to="/projects" title="Realizacje" color="warning" margin="me-3" />
              <LinkHandler to="/offers" title="Oferta" color="warning" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}