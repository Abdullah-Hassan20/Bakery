"use client"

import { useState } from "react"
import { Clock8, TimerReset, ChevronDown, ChevronUp } from "lucide-react"

export default function IntermittentFastingDiets() {
  const [activePlan, setActivePlan] = useState(null)

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan)
  }

  return (
    <section className="bg-black py-10 px-4 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-teal-400">⏱️ Intermittent Fasting Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Budget IF Plan */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-teal-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Clock8 className="text-teal-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold">Budget Intermittent Fasting</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-teal-400 font-semibold">🍽️ Eating Window (12 PM – 8 PM)</h3>
              <p>2 solid meals + 1 light snack</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🥘 Meal Examples</h3>
              <p>Daal, rice, boiled eggs, salad, seasonal fruits, tea</p>
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
                { day: "Monday", meals: { meal1: "Daal + chapati + cucumber", meal2: "Boiled egg + tea", meal3: "Rice + veggies" } },
                { day: "Tuesday", meals: { meal1: "Oats + nuts", meal2: "Fruit + green tea", meal3: "Lentils + rice" } },
                { day: "Wednesday", meals: { meal1: "Chickpeas + roti", meal2: "Egg + salad", meal3: "Sweet potato + yogurt" } },
                { day: "Thursday", meals: { meal1: "Daal + bread", meal2: "Fruit + tea", meal3: "Spinach + egg curry" } },
                { day: "Friday", meals: { meal1: "Omelette + roti", meal2: "Banana + milk", meal3: "Boiled egg + veggies" } },
                { day: "Saturday", meals: { meal1: "Rice + lentils", meal2: "Apple + tea", meal3: "Chapati + sabzi" } },
                { day: "Sunday", meals: { meal1: "Daal + rice", meal2: "Egg + toast", meal3: "Chickpeas + salad" } },
              ].map(({ day, meals }) => (
                <div key={day}>
                  <p className="text-teal-300 font-semibold">{day}</p>
                  <ul className="ml-4 list-disc">
                    <li><strong>Meal 1:</strong> {meals.meal1}</li>
                    <li><strong>Snack:</strong> {meals.meal2}</li>
                    <li><strong>Meal 2:</strong> {meals.meal3}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rich IF Plan */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-cyan-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <TimerReset className="text-cyan-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold">Rich Intermittent Fasting</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-cyan-400 font-semibold">🍽️ Eating Window (1 PM – 9 PM)</h3>
              <p>2 nutrient-dense meals + 1 healthy snack</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🥗 Meal Examples</h3>
              <p>Grilled chicken, quinoa, smoothies, greek yogurt, nuts</p>
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
                { day: "Monday", meals: { meal1: "Grilled chicken + salad", meal2: "Smoothie", meal3: "Quinoa + veggies" } },
                { day: "Tuesday", meals: { meal1: "Oats + nuts + milk", meal2: "Greek yogurt + honey", meal3: "Salmon + salad" } },
                { day: "Wednesday", meals: { meal1: "Egg wrap + avocado", meal2: "Protein shake", meal3: "Grilled paneer + greens" } },
                { day: "Thursday", meals: { meal1: "Tuna salad + soup", meal2: "Fruit + almond butter", meal3: "Chicken stir fry + rice" } },
                { day: "Friday", meals: { meal1: "Beef steak + salad", meal2: "Smoothie bowl", meal3: "Baked chicken + broccoli" } },
                { day: "Saturday", meals: { meal1: "Egg muffins + toast", meal2: "Peanut butter + banana", meal3: "Shrimp + quinoa" } },
                { day: "Sunday", meals: { meal1: "Oats + berries", meal2: "Yogurt + granola", meal3: "Lamb + steamed vegetables" } },
              ].map(({ day, meals }) => (
                <div key={day}>
                  <p className="text-cyan-300 font-semibold">{day}</p>
                  <ul className="ml-4 list-disc">
                    <li><strong>Meal 1:</strong> {meals.meal1}</li>
                    <li><strong>Snack:</strong> {meals.meal2}</li>
                    <li><strong>Meal 2:</strong> {meals.meal3}</li>
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
