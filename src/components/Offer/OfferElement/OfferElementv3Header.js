export default function OfferElementv3Header(props) {

  return (
    <div className="mb-3 col-6 col-sm-5 col-lg-3 col-xxl-2">
      <div className="card shadow text-light"  >
        <img src={props.img} className="card-img-top p-3" style={{ width: 'auto', height: '150px' }} alt="project" />
        <div className="card-header text-center fw-bold bg-secondary border-1 border-bottom border-warning">{props.title}</div>
        <div className="bg-secondary card-body">
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}