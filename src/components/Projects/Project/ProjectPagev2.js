export default function ProjectPagev2(props) {

  return (
    <div className="mb-3 col-12 col-md-6 col-lg-4 col-xl-3 projectHandler">
      <div className="card text-light bg-dark shadow">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-header fw-bold text-center text-warning border-bottom border-1 border-secondary">{props.title}</div>
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}