import { useHistory } from "react-router"
import HeaderPage from '../../components/Header/HeaderPage/HeaderPage.js'

export default function Page404() {
  const history = useHistory();

  return (
    <>
      <HeaderPage />
      <div className="container">
        <div className="alert alert-danger text-center">
          <h1>Nie znaleziono strony! Błąd 404</h1>
          <button className="btn btn-outline-dark mt-3" onClick={() => history.push('/')}>Strona główna</button>
        </div>
      </div>
    </>
  )
}