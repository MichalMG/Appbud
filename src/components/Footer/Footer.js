import phoneIco from '../../assets/ico/phone.png';
import mailIco from '../../assets/ico/mail.png';
import './Footer.css';

export default function Footer() {

  return (
    <footer className="text-light  border-5 border-top border-warning" style={{ backgroundColor: "rgb(40,40,40)" }}>
      <div className="container">

        <div className="row d-flex justify-content-center">

          <div className="col-6 col-md-4 my-4 align-items-center d-flex borderStartFooter">

            <div>
              <p className="card-title mb-4">Firma budowlana</p>
              <p className="text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis soluta asperiores hic, ut illum beatae vitae consectetur excepturi pariatur, aliquam rerum? Voluptatem ut eligendi unde minus eum recusandae voluptas natus.
            </p>
            </div>
          </div>


          <div className="col-6 col-md-4  border-start border-1 border-secondary my-4 align-items-start d-flex">
            <div className="card-body ">
              <p className="card-title mb-4">Dane firmy:</p>
              <div className="card-text text-warning">
                <p>Nazwa firmy</p>
                <p>Ulica 15</p>
                <p>00-000 Miasto</p>
              </div>
            </div>
          </div>


          <div className="col-12 col-md-4 my-4 align-items-start d-flex justify-content-center justify-content-md-start order-first order-md-last borderStartFooter">
            <div>
              <div className="card-body text-center text-md-start">
                <p className="card-title mb-4">Kontakt:</p>
                <p className="card-text d-flex justify-content-start align-items-center">
                  <img src={phoneIco} alt="" style={{ width: '26px' }} />
                  <span className="ms-3 text-warning">+48 000 000 000</span>
                </p>
                <p className="card-text d-flex justify-content-start align-items-center">
                  <img src={mailIco} alt="" style={{ width: '26px' }} />
                  <span className="ms-3 text-warning">lorem@lorem.lorem</span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="card-footer text-muted text-center" style={{ backgroundColor: "rgb(33,33,33)" }}>
        <span className="me-2">Copyright by</span>
        <a className="link-secondary fw-bold" href="https://michalmg.github.io/Portfolio/#/" >MG</a>
      </div>
    </footer>
  )
}