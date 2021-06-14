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
                <p className="mb-0">Nazwa firmy</p>
                <p className="mb-0">ulica Przykładowa 15</p>
                <p className="mb-0">00-000 Warszawa</p>
                <p>NIP: 000000000</p>
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
                  <span className="ms-3 text-warning">biuro@nazwafirmy.pl</span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="card-footer text-muted text-center" style={{ backgroundColor: "rgb(33,33,33)" }}>
        <p className="m-0 p-0">Copyright  <a className="link-success text-decoration-none" href="https://michalmg.github.io/Portfolio/">MG</a></p>
      </div>
    </footer>
  )
}