import RaccoonCard from './RaccoonCard'

const raccoons = [
  { id: 1, name: "Robert", favFood: "hamburgers" },
  { id: 2, name: "Rocket", favFood: "pizza" },
  { id: 3, name: "Rocky", favFood: "pizza" },
  { id: 4, name: "Red", favFood: "hamburgers" },
]

function RaccoonsList() {

  return (
    <div className="raccoons-list border-black">

      <h2>Raccoons</h2>

      {/* filter shown raccoons so it only shows the ones who like what's currently selected */}
      <select>
        <option value="pizza">Pizza</option>
        <option value="hamburgers">Hamburgers</option>
      </select>

      <div className="flex">

        {/* Delete the card below and replace it with the raccoons array mapped onto cards */}
        <RaccoonCard name="Bob" favFood="pizza" />

      </div>

    </div>
  )
}

export default RaccoonsList
