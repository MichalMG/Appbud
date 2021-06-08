export default function OfferElementv2(props) {

  return (
    <div className="mb-3 col-8 col-sm-5 col-lg-4 col-xl-3 col-xxl-2" >
      <div className="card shadow" style={{ height: '100%' }}>
        <img src={props.img} className="card-img-top p-3" style={{ width: 'auto', height: '150px' }} alt="..." />
        <div className={`card-header text-center fw-bold border-warning ${props.dark ? 'bg-secondary text-light' : ''}`}>{props.title}</div>
        <div className={`card-body ${props.dark ? 'bg-secondary text-light' : ''}`}>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}