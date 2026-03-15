import { useState } from "react";
import { KeyResult } from "./KeyResult";

function computeObjectivePercent(objective) {
  const krs = objective.keyResults;
  if (krs.length === 0) return 0;
  const total = krs.reduce(
    (sum, kr) => sum + (kr.target > 0 ? (kr.current / kr.target) * 100 : 0),
    0
  );
  return Math.round(total / krs.length);
}

export function ObjectiveCard({ objective, period, onUpdate }) {
  const [expanded, setExpanded] = useState(false);
  const percent = computeObjectivePercent(objective);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
      >
        <span
          className="w-3 h-3 rounded-full shrink-0"
          style={{ backgroundColor: objective.color }}
        />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex-1 leading-snug">
          {objective.title}
        </span>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
          style={{
            backgroundColor: `${objective.color}18`,
            color: objective.color,
          }}
        >
          {percent}%
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-700">
          <div className="divide-y divide-gray-100 dark:divide-gray-700 pt-3">
            {objective.keyResults.map((kr) => (
              <KeyResult
                key={kr.id}
                kr={kr}
                color={objective.color}
                onIncrement={() =>
                  onUpdate(period, objective.id, kr.id, kr.unit === "%" ? 5 : 1)
                }
                onDecrement={() =>
                  onUpdate(period, objective.id, kr.id, kr.unit === "%" ? -5 : -1)
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
