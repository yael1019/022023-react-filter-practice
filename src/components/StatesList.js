import { useState } from "react"
import StateCard from "./StateCard"

const stateNames = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "District of Columbia", "American Samoa", "Guam", "Northern Mariana Islands", "Puerto Rico", "U.S. Virgin Islands"
]

function StatesList(props) {
  // created a state for the change of input 
  const [state, setState] = useState('');
  // filtered the array based on what was inputted 
  const filtered = stateNames.filter(sName => sName.toLowerCase().includes(state.toLocaleLowerCase()));
  // or you can do state.toLowerCase() === sName.toLowerCase(), but then you have to type the whole state name 
  // we do not need the terniary statement here if we use .includes because each state technically includes an empty string
  // if use strictly equals to we will need the terinary statement to check if state === "" ? stateNames : filter the array

  return (
    <div className="states-list border-black">

      <h2>U.S. States</h2>

      <label>Filter States:</label>
      <input type="text" onChange={(e) => setState(e.target.value)} />
      {/* When someone types into the input above, only show the states that include what has been typed */}

      <div className="flex">
        { filtered.map(sName => <StateCard key={ sName } sName={ sName }/>) }

        {/* delete the state cards above and instead map through the state names to create your cards */}

      </div>

    </div>
  )
}

export default StatesList
