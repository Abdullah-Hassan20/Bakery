"use client"

import { useState } from "react"
import { Apple, HeartPulse, ChevronDown, ChevronUp } from "lucide-react"

export default function BalancedNutritionDiets() {
  const [activePlan, setActivePlan] = useState(null)

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan)
  }

  return (
    <section className="bg-black py-10 px-4 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-teal-400">🥗 Balanced Nutrition Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Budget Balanced Diet */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-teal-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Apple className="text-teal-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold">Budget Balanced Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-teal-400 font-semibold">🍳 Breakfast</h3>
              <p>Oats, boiled egg, banana</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🍛 Lunch</h3>
              <p>Daal, brown rice, mixed vegetables</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🥗 Dinner</h3>
              <p>Chapati, lentil soup, cucumber salad</p>
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
                { day: "Monday", meals: { breakfast: "Oats + banana", lunch: "Daal + rice", dinner: "Soup + chapati" } },
                { day: "Tuesday", meals: { breakfast: "Boiled egg + toast", lunch: "Vegetables + roti", dinner: "Rice + yogurt" } },
                { day: "Wednesday", meals: { breakfast: "Fruit + tea", lunch: "Daal chawal", dinner: "Chapati + sabzi" } },
                { day: "Thursday", meals: { breakfast: "Oats + milk", lunch: "Egg curry + rice", dinner: "Roti + cucumber salad" } },
                { day: "Friday", meals: { breakfast: "Tea + biscuits", lunch: "Chickpeas + rice", dinner: "Vegetable soup + bread" } },
                { day: "Saturday", meals: { breakfast: "Omelette + toast", lunch: "Spinach + rice", dinner: "Boiled potato + egg" } },
                { day: "Sunday", meals: { breakfast: "Oats + nuts", lunch: "Mixed sabzi + roti", dinner: "Chana salad + chapati" } },
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

        {/* Rich Balanced Diet */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-cyan-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <HeartPulse className="text-cyan-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold">Rich Balanced Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-cyan-400 font-semibold">🍓 Breakfast</h3>
              <p>Greek yogurt, granola, berries, boiled egg</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🥘 Lunch</h3>
              <p>Grilled chicken, quinoa, steamed veggies, salad</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🍵 Dinner</h3>
              <p>Salmon, mashed potato, broccoli, herbal tea</p>
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
                { day: "Monday", meals: { breakfast: "Yogurt + berries", lunch: "Chicken + salad", dinner: "Salmon + broccoli" } },
                { day: "Tuesday", meals: { breakfast: "Smoothie + toast", lunch: "Fish + quinoa", dinner: "Grilled veggies + soup" } },
                { day: "Wednesday", meals: { breakfast: "Oats + banana", lunch: "Beef wrap + salad", dinner: "Chicken + steamed greens" } },
                { day: "Thursday", meals: { breakfast: "Boiled eggs + fruit", lunch: "Lentil bowl + rice", dinner: "Paneer + roti" } },
                { day: "Friday", meals: { breakfast: "Nuts + tea", lunch: "Quinoa + roasted veggies", dinner: "Yogurt + cucumbers + egg" } },
                { day: "Saturday", meals: { breakfast: "Protein shake + toast", lunch: "Grilled chicken bowl", dinner: "Soup + veggies" } },
                { day: "Sunday", meals: { breakfast: "Oats + milk", lunch: "Brown rice + daal", dinner: "Steamed broccoli + paneer" } },
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
