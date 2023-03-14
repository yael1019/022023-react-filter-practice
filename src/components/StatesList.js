import StateCard from "./StateCard"

const stateNames = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "District of Columbia", "American Samoa", "Guam", "Northern Mariana Islands", "Puerto Rico", "U.S. Virgin Islands"
]

function StatesList(props) {

  function handleChange(e) {
    console.log(e.target.value)
  }

  return (
    <div className="states-list border-black">

      <h2>U.S. States</h2>

      <label>Filter States:</label>
      <input type="text" onChange={handleChange} />
      {/* When someone types into the input above, only show the states that include what has been typed */}

      <div className="flex">

        <StateCard />
        <StateCard />
        <StateCard />

        {/* delete the state cards above and instead map through the state names to create your cards */}

      </div>

    </div>
  )
}

export default StatesList
