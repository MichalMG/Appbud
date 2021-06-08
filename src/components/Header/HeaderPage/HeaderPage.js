import '../Header.css';
import Navigation from '../../Navigation/Navigation';


export default function HeaderPage() {

  return (
    <>
      <div className="position-relative overflow-hidden mb-4" style={{ height: '37vh', width: '100%', minHeight: '300px' }}>
        <Navigation />
        <div className="header-page__background "></div>
        <div className="header-page__background-dark d-flex justify-content-center align-items-center">
        </div>
      </div>
    </>
  )
}