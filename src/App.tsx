import { FormEvent, useState } from "react";
import "./App.css";
import EmployeeTiles from "./components/Employees/EmployeeTiles";
import team from "./data/team";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {

  const [searchTerm , setSearchTerm] = useState<string>("")

  const handleSearch = (event : FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanedInput);
    return team.map((employee) => employee.name.toLowerCase().includes(searchTerm))
  }


  return (
    <div className="main-page">
      <h1 className="main-page__title">Ticket Tracker</h1>
      <SearchBox placeholder="Search by name" searchTerm={searchTerm} handleInput={handleSearch}/>
      <div className="employee-container">
        {/* // need to map over team data to get each employee stuff */}
        {team.map((employee) => (
          <EmployeeTiles
            name={employee.name}
            id={employee.id}
            role={employee.role}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
