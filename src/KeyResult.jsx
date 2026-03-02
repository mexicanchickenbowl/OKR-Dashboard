import { ProgressBar } from "./ProgressBar";

export function KeyResult({ kr, color, onIncrement, onDecrement }) {
  const percent = kr.target > 0 ? (kr.current / kr.target) * 100 : 0;
  const fraction =
    kr.unit === "%"
      ? `${kr.current}%`
      : `${kr.current}/${kr.target}`;

  return (
    <div className="py-3 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-3 mb-2">
        <p className="text-sm text-gray-700 leading-snug flex-1">
          {kr.description}
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onDecrement}
            disabled={kr.current <= 0}
            className="w-7 h-7 rounded-md border border-gray-300 bg-white text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            -
          </button>
          <span className="text-sm font-medium text-gray-900 min-w-[3rem] text-center tabular-nums">
            {fraction}
          </span>
          <button
            onClick={onIncrement}
            disabled={kr.current >= kr.target}
            className="w-7 h-7 rounded-md border border-gray-300 bg-white text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            +
          </button>
        </div>
      </div>
      <ProgressBar percent={percent} color={color} height="h-1.5" />
    </div>
  );
}
