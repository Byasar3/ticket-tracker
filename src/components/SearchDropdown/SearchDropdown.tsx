import React from 'react'

type SearchDropdownProps = {
	possibleRoles : string[];
}

const SearchDropdown = ({possibleRoles} : SearchDropdownProps) => {
  return (
	<div>
		<select name="Search by role" id="">
		{/* map to create a li element for each role? */}
		{possibleRoles.map((role, index) => (
			<option key={index} value={role}>{role}</option>
		))}

		</select>
	</div>
  )
}

export default SearchDropdown