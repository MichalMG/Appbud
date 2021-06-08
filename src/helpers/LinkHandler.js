import { Link } from "react-router-dom";

export default function LinkHandler({ title, to, color, margin }) {

  return (
    <Link onClick={() => window.scrollTo(0, 0)} to={to} className={`btn btn-outline-${color ? color : 'success'} ${margin ? margin : ''}`} >{title}</Link>
  )
}