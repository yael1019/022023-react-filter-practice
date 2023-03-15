import { useState } from 'react';
import RaccoonCard from './RaccoonCard'

const raccoons = [
  { id: 1, name: "Robert", favFood: "hamburgers" },
  { id: 2, name: "Rocket", favFood: "pizza" },
  { id: 3, name: "Rocky", favFood: "pizza" },
  { id: 4, name: "Red", favFood: "hamburgers" },
]



function RaccoonsList() {
  // creating a state for the select
  const [food, setFood] = useState('All');
  // creating an array depending on what food is equal to
  const filtered = food === "All" ? raccoons : raccoons.filter(raccoon => food === raccoon.favFood);
  // cad do .includes(food) on raccon.favFood : raccoon.favFood.includes(food)
  // another way to do the filter:
  // const filteredRaccoons = raccoons.filter( raccoon => food === 'All' || raccoon.favFood === food)

  return (
    <div className="raccoons-list border-black">

      <h2>Raccoons</h2>

      {/* filter shown raccoons so it only shows the ones who like what's currently selected */}
      <select onChange={(e) => setFood(e.target.value)}>
        <option value="All">Pick One:</option>
        <option value="pizza">Pizza</option>
        <option value="hamburgers">Hamburgers</option>
      </select>

      <div className="flex">

        {/* Delete the card below and replace it with the raccoons array mapped onto cards */}
        {
          filtered.map(raccoon => {
            return (
              <RaccoonCard
                name={raccoon.name}
                favFood={raccoon.favFood}
              />)
          })
        }

      </div>

    </div>
  )
}

export default RaccoonsList
