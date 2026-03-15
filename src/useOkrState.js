import { useState, useEffect, useCallback } from "react";
import { defaultData } from "./data";

const STORAGE_KEY = "nathans-okr-data";

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Fall through to defaults
  }
  return structuredClone(defaultData);
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Silently fail on storage errors
  }
}

export function useOkrState() {
  const [data, setData] = useState(loadData);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const updateKeyResult = useCallback((period, objectiveId, krId, delta) => {
    setData((prev) => {
      const next = structuredClone(prev);
      const objective = next[period].objectives.find(
        (o) => o.id === objectiveId
      );
      if (!objective) return prev;
      const kr = objective.keyResults.find((k) => k.id === krId);
      if (!kr) return prev;
      const newValue = kr.current + delta;
      if (newValue < 0 || newValue > kr.target) return prev;
      kr.current = newValue;
      return next;
    });
  }, []);

  const setKeyResult = useCallback((period, objectiveId, krId, value) => {
    setData((prev) => {
      const next = structuredClone(prev);
      const objective = next[period].objectives.find(
        (o) => o.id === objectiveId
      );
      if (!objective) return prev;
      const kr = objective.keyResults.find((k) => k.id === krId);
      if (!kr) return prev;
      const clamped = Math.max(0, Math.min(kr.target, value));
      kr.current = clamped;
      return next;
    });
  }, []);

  return { data, updateKeyResult, setKeyResult };
}
