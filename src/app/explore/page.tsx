// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { getConditions } from "@/sanity/client";

interface Condition {
  _id: string;
  title: string;
  category?: "common" | "major" | "wellness";
  description: string;
  symptoms?: string[];
  riskFactors?: string[];
  earlyWarningSigns?: string[];
  diagnosticOverview?: string;
  screeningGuidelines?: string;
  mythBusting?: string;
  showClinicalDisclaimer?: boolean;
}

export default function Home() {
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
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

  // Filter conditions based on category and search query (title, description, or symptoms)
  const filteredConditions = conditions.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesTitle = item.title?.toLowerCase().includes(query);
    const matchesDescription = item.description?.toLowerCase().includes(query);
    const matchesSymptoms = item.symptoms?.some((symptom) =>
      symptom.toLowerCase().includes(query),
    );

    const matchesSearch = matchesTitle || matchesDescription || matchesSymptoms;
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 relative">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
            AfyaApp Knowledge Base
          </h1>
          <p className="text-slate-600">
            Search health conditions, symptoms, risk factors, and medical
            insights.
          </p>
        </header>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {[
            { label: "All", value: "all" },
            { label: "Major Diseases", value: "major" },
            { label: "Common Ailments", value: "common" },
            { label: "Wellness Guides", value: "wellness" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === tab.value
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by condition name, symptom, or keyword (e.g., breast cancer, fatigue, diabetes)..."
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
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-slate-800">
                    {condition.title}
                  </h2>
                  {condition.category && (
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        condition.category === "major"
                          ? "bg-red-50 text-red-700 border border-red-200"
                          : condition.category === "wellness"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {condition.category === "major"
                        ? "Major Disease"
                        : condition.category === "wellness"
                          ? "Wellness Guide"
                          : "Common Ailment"}
                    </span>
                  )}
                </div>
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
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCondition(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold p-2"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h2 className="text-2xl font-bold text-slate-900">
                {selectedCondition.title}
              </h2>
              {selectedCondition.category && (
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    selectedCondition.category === "major"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : selectedCondition.category === "wellness"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {selectedCondition.category === "major"
                    ? "Major Disease"
                    : selectedCondition.category === "wellness"
                      ? "Wellness Guide"
                      : "Common Ailment"}
                </span>
              )}
            </div>

            {/* Description / Overview */}
            <div className="mb-6 mt-4">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {selectedCondition.description}
              </p>
            </div>

            {/* Symptoms */}
            {selectedCondition.symptoms &&
              selectedCondition.symptoms.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Symptoms
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

            {/* Risk Factors */}
            {selectedCondition.riskFactors &&
              selectedCondition.riskFactors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Risk Factors
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                    {selectedCondition.riskFactors.map((risk, idx) => (
                      <li key={idx}>{risk}</li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Early Warning Signs */}
            {selectedCondition.earlyWarningSigns &&
              selectedCondition.earlyWarningSigns.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
                    Early Warning Signs
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                    {selectedCondition.earlyWarningSigns.map((sign, idx) => (
                      <li key={idx}>{sign}</li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Diagnostic Overview */}
            {selectedCondition.diagnosticOverview && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Diagnostic Overview
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedCondition.diagnosticOverview}
                </p>
              </div>
            )}

            {/* Screening Guidelines */}
            {selectedCondition.screeningGuidelines && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Screening Guidelines
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedCondition.screeningGuidelines}
                </p>
              </div>
            )}

            {/* Myth Busting */}
            {selectedCondition.mythBusting && (
              <div className="mb-6 bg-purple-50 border border-purple-200 rounded-xl p-4">
                <h3 className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-2">
                  💡 Myth Busting
                </h3>
                <p className="text-purple-900 text-sm leading-relaxed">
                  {selectedCondition.mythBusting}
                </p>
              </div>
            )}

            {/* Clinical Disclaimer Banner */}
            {selectedCondition.showClinicalDisclaimer && (
              <div className="mb-6 bg-slate-100 border border-slate-200 rounded-lg p-3 text-xs text-slate-500 italic">
                Clinical Disclaimer: This information is for educational
                purposes only and should not be used as a substitute for
                professional medical advice, diagnosis, or treatment.
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
