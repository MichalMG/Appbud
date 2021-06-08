export default function Projectv2(props) {

  return (
    <>
      <div className="row bg-dark text-light d-flex align-items-stretch my-4 rounded project-container">
        <div className={`col-12 col-md-6 px-0 rounded overflow-hidden order-1 order-md-${props.order ? "2" : "1"} project__img-container`}>
          <img
            src={props.img}
            alt="..."
            style={{ width: '100%', minHeight: '100%' }}
          />
        </div>
        <div className={`col-12 col-md-6 px-0 d-flex flex-column rounded overflow-hidden  order-2 order-md-${props.order ? "1" : "2"} project__text-container`} >
          <div className="card-header border-warning text-center text-warning fw-bold" style={{ backgroundColor: 'rgba(0,0,0, .3)' }}>{props.title}</div>
          <div className="d-flex align-items-center" style={{ flexGrow: 1 }}>
            <div className="card-body">{props.description}</div>
          </div>
        </div>
      </div>
    </>
  )
}