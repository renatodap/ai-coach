'use client'
import { useForm } from 'react-hook-form'

export default function FoodForm() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: any) => {
    await fetch('/api/logs/food', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, log_date: new Date().toISOString().slice(0,10) })
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 p-4 border rounded-lg">
      <h2 className="text-lg font-semibold">🍽️ Food Log</h2>
      <input {...register("food_name")} placeholder="Food" className="input" />
      <input type="number" {...register("quantity_g")} placeholder="Quantity (g)" className="input" />
      <input type="number" {...register("calories")} placeholder="Calories" className="input" />
      <input type="number" {...register("protein_g")} placeholder="Protein (g)" className="input" />
      <input type="number" {...register("carbs_g")} placeholder="Carbs (g)" className="input" />
      <input type="number" {...register("fat_g")} placeholder="Fat (g)" className="input" />
      <select {...register("meal_type")} className="input">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <button type="submit" className="btn">Add Food</button>
    </form>
  )
}
