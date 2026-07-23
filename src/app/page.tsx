// src/app/page.tsx
import { Activity, Droplet, Flame, Footprints, Moon, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Good morning, Alex.
          </h1>
          <p className="text-slate-500 mt-1">
            Here is your health overview for today.
          </p>
        </div>
        {/* Profile Avatar */}
        <div className="w-12 h-12 bg-slate-200 rounded-full border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
          <span className="text-slate-500 font-bold">AL</span>
        </div>
      </header>

      {/* The Bento Box Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Main Hero Card (Spans 2 columns) */}
        <div className="col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 shadow-md text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-blue-100 font-medium mb-1">Daily Goal</h2>
            <p className="text-2xl font-bold mb-4">
              Complete your Symptom Check-in
            </p>
            <button className="bg-white text-blue-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2 shadow-sm">
              <Plus size={16} /> Log Symptoms
            </button>
          </div>
          {/* Decorative Background Element */}
          <Activity
            size={120}
            className="absolute -bottom-6 -right-6 text-white/10"
          />
        </div>

        {/* Water Tracker Card */}
        <div className="col-span-1 bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <Droplet size={20} />
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
              3 / 8
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">1.2L</p>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Water Intake
            </p>
          </div>
        </div>

        {/* Calories / Nutrition Card */}
        <div className="col-span-1 bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <Flame size={20} />
            </div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md">
              800 kcal left
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">1,450</p>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Calories Eaten
            </p>
          </div>
        </div>

        {/* Sleep Tracker Card */}
        <div className="col-span-2 md:col-span-1 bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center md:flex-col md:items-start justify-between gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
            <Moon size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">6h 20m</p>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Sleep Last Night
            </p>
          </div>
        </div>

        {/* Activity Tracker Card */}
        <div className="col-span-2 md:col-span-1 bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center md:flex-col md:items-start justify-between gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
            <Footprints size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">5,432</p>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Steps Today
            </p>
          </div>
        </div>

        {/* Recent Insights Widget (Spans full width below) */}
        <div className="col-span-2 md:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">Recent Insights</h3>
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
            <p className="text-sm text-slate-600">
              You logged{" "}
              <span className="font-semibold text-slate-900">Fatigue</span> and{" "}
              <span className="font-semibold text-slate-900">Headache</span> for
              3 consecutive days. Consider exploring potential causes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
