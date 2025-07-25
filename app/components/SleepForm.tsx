'use client'
import { useForm } from 'react-hook-form'

export default function SleepForm() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: any) => {
    await fetch('/api/logs/sleep', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, log_date: new Date().toISOString().slice(0,10) })
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 p-4 border rounded-lg">
      <h2 className="text-lg font-semibold">😴 Sleep Log</h2>
      <input type="number" {...register("hours")} placeholder="Hours slept" className="input" />
      <select {...register("quality")} className="input">
        <option value="5">Excellent</option>
        <option value="4">Good</option>
        <option value="3">Average</option>
        <option value="2">Poor</option>
        <option value="1">Very Poor</option>
      </select>
      <textarea {...register("notes")} placeholder="Sleep notes" className="input" />
      <button type="submit" className="btn">Add Sleep Log</button>
    </form>
  )
}
