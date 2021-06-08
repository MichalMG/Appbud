export default function Section(props) {

  return (
    <>
      <div className={`${props.color ? `bg-${props.color}` : ''} mb-4`} id={props.id ? props.id : null}>
        <div className="">
          <div className="row border-2 border-bottom border-warning text-center m-0 p-0 pt-3">
            <h1>{props.title}</h1>
          </div>
          <div className="container">
            <div className=" py-4">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}