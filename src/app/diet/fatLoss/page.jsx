"use client"

import { useState } from "react"
import { Salad, Flame, ChevronDown, ChevronUp } from "lucide-react"

export default function FatLossDiets() {
  const [activePlan, setActivePlan] = useState(null)

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan)
  }

  return (
    <section className="bg-black py-10 px-4 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-teal-400">🔥 Fat Loss Diet Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Budget Fat Loss Card */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-teal-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Salad className="text-teal-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold text-teal-400">Budget Fat Loss Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-teal-400 font-semibold">🍳 Breakfast</h3>
              <p>Boiled eggs, green tea, oats</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🥗 Lunch</h3>
              <p>Grilled vegetables, chapati, daal</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🥦 Dinner</h3>
              <p>Boiled chicken or lentils, cucumber salad</p>
            </div>
          </div>

          <button
            onClick={() => togglePlan("budget")}
            className="mt-5 w-full py-2 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-xl flex items-center justify-center gap-2"
          >
            {activePlan === "budget" ? "Hide Weekly Plan" : "View Weekly Plan"}
            {activePlan === "budget" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {/* Weekly Plan */}
          <div
            className={`transition-[max-height,margin] duration-500 ease-in-out overflow-hidden ${
              activePlan === "budget" ? "max-h-[1000px] mt-4 pb-4" : "max-h-0"
            }`}
          >
            <div className="bg-teal-900/20 rounded-xl p-4 mt-2 space-y-3 text-sm">
              {[
                { day: "Monday", meals: { breakfast: "Oats + green tea", lunch: "Daal + chapati", dinner: "Boiled chicken + salad" } },
                { day: "Tuesday", meals: { breakfast: "Boiled egg + cucumber", lunch: "Mixed sabzi + roti", dinner: "Soup + fruit" } },
                { day: "Wednesday", meals: { breakfast: "Oats + tea", lunch: "Chickpeas + rice", dinner: "Egg whites + veggies" } },
                { day: "Thursday", meals: { breakfast: "Fruit + nuts", lunch: "Lentils + salad", dinner: "Grilled veggies" } },
                { day: "Friday", meals: { breakfast: "Boiled eggs", lunch: "Daal chawal", dinner: "Soup + salad" } },
                { day: "Saturday", meals: { breakfast: "Oats", lunch: "Boiled potato + chana", dinner: "Yogurt + cucumber" } },
                { day: "Sunday", meals: { breakfast: "Tea + eggs", lunch: "Vegetable rice", dinner: "Egg whites + apple" } },
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

        {/* Rich Fat Loss Card */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-cyan-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Flame className="text-cyan-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold text-cyan-400">Rich Fat Loss Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-cyan-400 font-semibold">🥚 Breakfast</h3>
              <p>Egg whites, avocado toast, black coffee</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🥗 Lunch</h3>
              <p>Grilled salmon, steamed broccoli, quinoa</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🍵 Dinner</h3>
              <p>Chicken salad, green tea, almonds</p>
            </div>
          </div>

          <button
            onClick={() => togglePlan("rich")}
            className="mt-5 w-full py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-xl flex items-center justify-center gap-2"
          >
            {activePlan === "rich" ? "Hide Weekly Plan" : "View Weekly Plan"}
            {activePlan === "rich" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {/* Weekly Plan */}
          <div
            className={`transition-[max-height,margin] duration-500 ease-in-out overflow-hidden ${
              activePlan === "rich" ? "max-h-[1000px] mt-4 pb-4" : "max-h-0"
            }`}
          >
            <div className="bg-cyan-900/20 rounded-xl p-4 mt-2 space-y-3 text-sm">
              {[
                { day: "Monday", meals: { breakfast: "Oats + protein shake", lunch: "Chicken + quinoa", dinner: "Salad + nuts" } },
                { day: "Tuesday", meals: { breakfast: "Eggs + avocado", lunch: "Salmon + broccoli", dinner: "Green tea + almonds" } },
                { day: "Wednesday", meals: { breakfast: "Smoothie + toast", lunch: "Grilled chicken bowl", dinner: "Steamed veggies" } },
                { day: "Thursday", meals: { breakfast: "Yogurt + berries", lunch: "Lean beef + spinach", dinner: "Soup + cucumber" } },
                { day: "Friday", meals: { breakfast: "Oats + chia seeds", lunch: "Tuna salad", dinner: "Chicken + broccoli" } },
                { day: "Saturday", meals: { breakfast: "Avocado toast", lunch: "Fish + asparagus", dinner: "Egg whites + salad" } },
                { day: "Sunday", meals: { breakfast: "Protein shake", lunch: "Grilled chicken wrap", dinner: "Soup + nuts" } },
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

