'use client'
import { useForm } from 'react-hook-form'

export default function WorkoutForm() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: any) => {
    await fetch('/api/logs/workout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, log_date: new Date().toISOString().slice(0,10) })
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 p-4 border rounded-lg">
      <h2 className="text-lg font-semibold">🏋️ Workout Log</h2>
      <input {...register("exercise_name")} placeholder="Exercise" className="input" />
      <input type="number" {...register("sets")} placeholder="Sets" className="input" />
      <input type="number" {...register("reps")} placeholder="Reps" className="input" />
      <input type="number" {...register("weight_kg")} placeholder="Weight (kg)" className="input" />
      <input type="number" {...register("duration_min")} placeholder="Duration (min)" className="input" />
      <select {...register("workout_type")} className="input">
        <option value="strength">Strength</option>
        <option value="cardio">Cardio</option>
        <option value="mobility">Mobility</option>
      </select>
      <textarea {...register("notes")} placeholder="Notes" className="input" />
      <button type="submit" className="btn">Add Workout</button>
    </form>
  )
}
