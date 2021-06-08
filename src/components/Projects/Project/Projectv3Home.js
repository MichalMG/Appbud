export default function Projectv2(props) {

  return (
    <div className="mb-3 col-10 col-sm-4 col-xxl-3 projectHandler">
      <div className={`card text-light bg-secondary shadow overflow-hidden`}>
        <div>
          <img className="card-img-top imgHome" src={props.img} alt="..." style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="card-header fw-bold text-center border-1 border-bottom border-warning">{props.title}</div>
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}