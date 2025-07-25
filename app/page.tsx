import FoodForm from './components/FoodForm'
import WorkoutForm from './components/WorkoutForm'
import SleepForm from './components/SleepForm'

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">
      <FoodForm />
      <WorkoutForm />
      <SleepForm />
    </div>
  )
}
