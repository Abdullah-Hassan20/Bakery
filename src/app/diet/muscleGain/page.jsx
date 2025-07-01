"use client"
import { useState } from "react"
import { Wallet, Beef, ChevronDown, ChevronUp } from "lucide-react"

export default function MuscleGainDiets() {
  const [activePlan, setActivePlan] = useState(null)

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan)
  }

  return (
    <section className="bg-black py-10 px-4 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-teal-400">💪 Muscle Gain Diet Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Budget-Friendly Card */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-teal-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Wallet className="text-teal-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold text-teal-400">Budget-Friendly Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-teal-400 font-semibold">🍳 Breakfast</h3>
              <p>2 boiled eggs, 1 chapati, banana, milk</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🍛 Lunch</h3>
              <p>Lentils (daal), 1 cup rice, chickpeas or egg curry</p>
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">🍲 Dinner</h3>
              <p>Sweet potato, sautéed vegetables, boiled eggs</p>
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
                { day: "Monday", meals: { breakfast: "2 eggs, chapati, tea", lunch: "Daal + rice", dinner: "Potato + eggs" } },
                { day: "Tuesday", meals: { breakfast: "Boiled eggs + banana", lunch: "Chickpeas + roti", dinner: "Mixed veggies + egg curry" } },
                { day: "Wednesday", meals: { breakfast: "Oats + milk", lunch: "Daal chawal", dinner: "Boiled potato + eggs" } },
                { day: "Thursday", meals: { breakfast: "Egg paratha", lunch: "Spinach + rice", dinner: "Chana + sweet potato" } },
                { day: "Friday", meals: { breakfast: "Chapati + tea", lunch: "Daal + roti", dinner: "Mixed sabzi + boiled egg" } },
                { day: "Saturday", meals: { breakfast: "Boiled eggs + bread", lunch: "Chickpeas + rice", dinner: "Sweet potato + eggs" } },
                { day: "Sunday", meals: { breakfast: "Oats + banana", lunch: "Lentils + roti", dinner: "Boiled eggs + veggies" } },
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

        {/* Rich Diet Card */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-cyan-400/20 shadow-lg transition-all duration-500 ease-in-out h-fit">
          <div className="flex items-center mb-4">
            <Beef className="text-cyan-400 w-7 h-7 mr-2" />
            <h2 className="text-2xl font-bold text-cyan-400">Rich Muscle Gain Diet</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-200">
            <div>
              <h3 className="text-cyan-400 font-semibold">🥚 Breakfast</h3>
              <p>4 eggs, oats with berries, whey shake</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🍗 Lunch</h3>
              <p>Grilled chicken, quinoa, roasted veggies, avocado</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold">🍣 Dinner</h3>
              <p>Lean beef or salmon, sweet potato, steamed broccoli</p>
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
                { day: "Monday", meals: { breakfast: "Eggs + oats + berries", lunch: "Grilled chicken + quinoa", dinner: "Salmon + broccoli" } },
                { day: "Tuesday", meals: { breakfast: "Greek yogurt + almonds", lunch: "Turkey breast + sweet potato", dinner: "Lean beef + veggies" } },
                { day: "Wednesday", meals: { breakfast: "Protein smoothie", lunch: "Grilled chicken + avocado", dinner: "Cottage cheese + sweet potato" } },
                { day: "Thursday", meals: { breakfast: "Oats + whey shake", lunch: "Salmon bowl", dinner: "Steak + steamed spinach" } },
                { day: "Friday", meals: { breakfast: "Eggs + toast + shake", lunch: "Chicken rice bowl", dinner: "Beef stir-fry + quinoa" } },
                { day: "Saturday", meals: { breakfast: "Pancakes + fruit", lunch: "Fish fillet + mashed potato", dinner: "Cottage cheese + broccoli" } },
                { day: "Sunday", meals: { breakfast: "Oats + banana", lunch: "Grilled beef wrap", dinner: "Lean chicken + salad" } },
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


