"use client"

import { useState } from "react"
import { Salad, Drumstick, ChevronDown, ChevronUp } from "lucide-react"

export default function KetoDietDiets() {
  const [activePlan, setActivePlan] = useState(null)

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan)
  }

  return (
    <section className="bg-black py-10 px-4 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-teal-400">🥑 Keto Diet Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Budget-Friendly Keto */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-teal-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Salad className="text-teal-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold">Budget Keto Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-teal-400 font-semibold">🍳 Breakfast</h3>
              <p>Boiled eggs, butter tea, cucumber</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🥘 Lunch</h3>
              <p>Fried eggplant, shredded chicken, salad</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🍲 Dinner</h3>
              <p>Paneer, spinach curry, boiled eggs</p>
            </div>
          </div>

          <button
            onClick={() => togglePlan("budget")}
            className="mt-5 w-full py-2 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-xl flex items-center justify-center gap-2"
          >
            {activePlan === "budget" ? "Hide Weekly Plan" : "View Weekly Plan"}
            {activePlan === "budget" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          <div
            className={`transition-[max-height,margin] duration-500 ease-in-out overflow-hidden ${
              activePlan === "budget" ? "max-h-[1000px] mt-4 pb-4" : "max-h-0"
            }`}
          >
            <div className="bg-teal-900/20 rounded-xl p-4 mt-2 space-y-3 text-sm">
              {[
                { day: "Monday", meals: { breakfast: "Eggs + butter tea", lunch: "Fried eggplant + salad", dinner: "Paneer + spinach" } },
                { day: "Tuesday", meals: { breakfast: "Omelette + cucumber", lunch: "Chicken + cabbage", dinner: "Eggs + stir-fried greens" } },
                { day: "Wednesday", meals: { breakfast: "Avocado + tea", lunch: "Fried cauliflower + chicken", dinner: "Paneer + salad" } },
                { day: "Thursday", meals: { breakfast: "Boiled eggs + butter", lunch: "Eggplant + yogurt", dinner: "Chicken + spinach" } },
                { day: "Friday", meals: { breakfast: "Cucumber + tea", lunch: "Omelette + stir-fried veggies", dinner: "Paneer + salad" } },
                { day: "Saturday", meals: { breakfast: "Avocado + egg", lunch: "Chicken + mixed veggies", dinner: "Spinach + boiled eggs" } },
                { day: "Sunday", meals: { breakfast: "Boiled egg + butter tea", lunch: "Cauliflower stir-fry", dinner: "Paneer + cucumber" } },
              ].map(({ day, meals }) => (
                <div key={day}>
                  <p className="text-teal-300 font-semibold">{day}</p>
                  <ul className="ml-4 list-disc">
                    <li><strong>Breakfast:</strong> {meals.breakfast}</li>
                    <li><strong>Lunch:</strong> {meals.lunch}</li>
                    <li><strong>Dinner:</strong> {meals.dinner}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rich Keto Diet */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-cyan-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Drumstick className="text-cyan-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold">Rich Keto Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-cyan-400 font-semibold">🥚 Breakfast</h3>
              <p>Eggs with avocado, cheese omelette, black coffee</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🥗 Lunch</h3>
              <p>Grilled chicken, zucchini noodles, avocado salad</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🥩 Dinner</h3>
              <p>Steak, buttered broccoli, keto bread</p>
            </div>
          </div>

          <button
            onClick={() => togglePlan("rich")}
            className="mt-5 w-full py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-xl flex items-center justify-center gap-2"
          >
            {activePlan === "rich" ? "Hide Weekly Plan" : "View Weekly Plan"}
            {activePlan === "rich" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          <div
            className={`transition-[max-height,margin] duration-500 ease-in-out overflow-hidden ${
              activePlan === "rich" ? "max-h-[1000px] mt-4 pb-4" : "max-h-0"
            }`}
          >
            <div className="bg-cyan-900/20 rounded-xl p-4 mt-2 space-y-3 text-sm">
              {[
                { day: "Monday", meals: { breakfast: "Eggs + cheese", lunch: "Chicken + salad", dinner: "Beef + veggies" } },
                { day: "Tuesday", meals: { breakfast: "Omelette + black coffee", lunch: "Zucchini noodles + avocado", dinner: "Salmon + spinach" } },
                { day: "Wednesday", meals: { breakfast: "Avocado + eggs", lunch: "Chicken + feta salad", dinner: "Steak + broccoli" } },
                { day: "Thursday", meals: { breakfast: "Cheese omelette", lunch: "Tuna lettuce wrap", dinner: "Lamb + salad" } },
                { day: "Friday", meals: { breakfast: "Bulletproof coffee", lunch: "Beef burger (no bun)", dinner: "Keto pizza + greens" } },
                { day: "Saturday", meals: { breakfast: "Boiled eggs + avocado", lunch: "Shrimp + cauliflower rice", dinner: "Turkey + veggies" } },
                { day: "Sunday", meals: { breakfast: "Protein smoothie", lunch: "Chicken salad", dinner: "Grilled beef + broccoli" } },
              ].map(({ day, meals }) => (
                <div key={day}>
                  <p className="text-cyan-300 font-semibold">{day}</p>
                  <ul className="ml-4 list-disc">
                    <li><strong>Breakfast:</strong> {meals.breakfast}</li>
                    <li><strong>Lunch:</strong> {meals.lunch}</li>
                    <li><strong>Dinner:</strong> {meals.dinner}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
