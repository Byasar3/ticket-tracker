import { FormEvent, useState } from "react";
import "./App.scss";
import EmployeeTiles from "./components/Employees/EmployeeTiles";
import team from "./data/team";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchDropdown from "./components/SearchDropdown/SearchDropdown";

const App = () => {
  const [searchTermName, setSearchTermName] = useState<string>("");

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchTermName(cleanedInput);
  };
  const filteredEmployeesByName = team.filter((employee) =>
    employee.name.toLowerCase().includes(searchTermName)
  );

  const possibleRoles: string[] = [];

  team.forEach((employee) => {
    const employeeRole = employee.role;

    if (!possibleRoles.includes(employeeRole)) {
      possibleRoles.push(employeeRole);
    }

  });
console.log(possibleRoles);
    // const cleanedPossibleRoles = possibleRoles.filter(
    //   (value, index) => possibleRoles.indexOf(value) === index
    // );
    // console.log(cleanedPossibleRoles);
    
    // return cleanedPossibleRoles;

  return (
    <div className="main-page">
      <h1 className="main-page__title">Ticket Tracker</h1>
      <SearchBox
        placeholder="Search by name"
        searchTerm={searchTermName}
        handleInput={handleSearch}
      />
      <SearchDropdown possibleRoles={possibleRoles}/>

      <div className="employee-container">
        {/* // need to map over team data to get each employee stuff */}
        {filteredEmployeesByName.map((employee) => (
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
