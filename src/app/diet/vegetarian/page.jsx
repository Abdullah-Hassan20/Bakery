"use client"

import { useState } from "react"
import { Leaf, Sprout, ChevronDown, ChevronUp } from "lucide-react"

export default function VegetarianDiets() {
  const [activePlan, setActivePlan] = useState(null)

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan)
  }

  return (
    <section className="bg-black py-10 px-4 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-teal-400">🌿 Vegetarian Diet Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Budget-Friendly Vegetarian */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-teal-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Leaf className="text-teal-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold">Budget Vegetarian Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-teal-400 font-semibold">🍳 Breakfast</h3>
              <p>Oats with banana, tea or milk, 1 boiled egg (optional)</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🥘 Lunch</h3>
              <p>Daal (lentils), rice or chapati, mixed sabzi</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🍲 Dinner</h3>
              <p>Sweet potato, curd (yogurt), sautéed vegetables</p>
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
                { day: "Monday", meals: { breakfast: "Oats + milk", lunch: "Daal + rice", dinner: "Veggies + curd" } },
                { day: "Tuesday", meals: { breakfast: "Bread + tea", lunch: "Chickpeas + roti", dinner: "Potato + spinach" } },
                { day: "Wednesday", meals: { breakfast: "Oats + banana", lunch: "Lentils + chapati", dinner: "Sweet potato + veggies" } },
                { day: "Thursday", meals: { breakfast: "Boiled egg + toast", lunch: "Daal + rice", dinner: "Mixed sabzi + curd" } },
                { day: "Friday", meals: { breakfast: "Paratha + tea", lunch: "Chana + chapati", dinner: "Potato curry + roti" } },
                { day: "Saturday", meals: { breakfast: "Fruit + oats", lunch: "Daal chawal", dinner: "Veg biryani + raita" } },
                { day: "Sunday", meals: { breakfast: "Poha + tea", lunch: "Vegetable curry + chapati", dinner: "Curd + rice" } },
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

        {/* Rich Vegetarian */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-cyan-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Sprout className="text-cyan-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold">Rich Vegetarian Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-cyan-400 font-semibold">🥗 Breakfast</h3>
              <p>Fruit smoothie with protein, multigrain toast, almonds</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🍛 Lunch</h3>
              <p>Quinoa, paneer sabzi, mixed vegetable salad</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🍝 Dinner</h3>
              <p>Tofu curry, brown rice, steamed greens</p>
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
                { day: "Monday", meals: { breakfast: "Smoothie + toast", lunch: "Quinoa + veggies", dinner: "Tofu + greens" } },
                { day: "Tuesday", meals: { breakfast: "Chia pudding + fruit", lunch: "Paneer wrap + salad", dinner: "Mushroom curry + rice" } },
                { day: "Wednesday", meals: { breakfast: "Oats + almond milk", lunch: "Chickpea bowl", dinner: "Lentil soup + roti" } },
                { day: "Thursday", meals: { breakfast: "Granola + yogurt", lunch: "Vegetable khichdi", dinner: "Paneer curry + quinoa" } },
                { day: "Friday", meals: { breakfast: "Peanut toast + banana", lunch: "Tofu stir fry", dinner: "Curd rice + salad" } },
                { day: "Saturday", meals: { breakfast: "Smoothie bowl", lunch: "Spinach rice + beans", dinner: "Vegetable stew + bread" } },
                { day: "Sunday", meals: { breakfast: "Oats + nuts", lunch: "Lentil wrap", dinner: "Paneer biryani + raita" } },
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
