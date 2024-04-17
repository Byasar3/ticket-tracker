
import Counter from "../Counter/Counter";
import "./EmployeeTiles.scss"

type EmployeeTileProps = {
	id: number;
	name: string;
	role: string;
}



const EmployeeTiles = ({ name, role}: EmployeeTileProps) => {
  return (
	<div className="employee-tiles">
		<h2>{name}</h2>
		<h3>{role}</h3>
		<Counter/>
	</div>
  )
}

export default EmployeeTiles