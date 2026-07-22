// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { getConditions } from "@/sanity/client";

interface Condition {
  _id: string;
  title: string;
  description: string;
  symptoms: string[];
}

export default function Home() {
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(
    null,
  );

  useEffect(() => {
    getConditions()
      .then((data) => {
        setConditions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch conditions:", err);
        setLoading(false);
      });
  }, []);

  // Filter conditions based on title or matching symptoms
  const filteredConditions = conditions.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesTitle = item.title?.toLowerCase().includes(query);
    const matchesSymptoms = item.symptoms?.some((symptom) =>
      symptom.toLowerCase().includes(query),
    );
    return matchesTitle || matchesSymptoms;
  });

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 relative">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
            AfyaApp Knowledge Base
          </h1>
          <p className="text-slate-600">
            Search health conditions, symptoms, and medical misconceptions.
          </p>
        </header>

        {/* Search Input Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by condition name or symptom (e.g., headache, fatigue)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-900"
          />
        </div>

        {/* Loading & Content State */}
        {loading ? (
          <p className="text-center text-slate-500">
            Loading health data from Sanity...
          </p>
        ) : filteredConditions.length === 0 ? (
          <p className="text-center text-slate-500">
            No conditions found matching your search.
          </p>
        ) : (
          <div className="space-y-4">
            {filteredConditions.map((condition) => (
              <div
                key={condition._id}
                onClick={() => setSelectedCondition(condition)}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-blue-400 transition-all hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-slate-800 mb-2">
                  {condition.title}
                </h2>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {condition.description}
                </p>
                {condition.symptoms && condition.symptoms.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {condition.symptoms.map((symptom, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Condition Detail Modal Overlay */}
      {selectedCondition && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedCondition(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold p-2"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 pr-8">
              {selectedCondition.title}
            </h2>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Detailed Overview
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {selectedCondition.description}
              </p>
            </div>
            {selectedCondition.symptoms &&
              selectedCondition.symptoms.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Associated Symptoms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCondition.symptoms.map((symptom, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedCondition(null)}
                className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
