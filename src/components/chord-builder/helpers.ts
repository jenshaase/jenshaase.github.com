import { MiniValue } from "@/lib/pmini";
import { Chord } from "../pianoroll/PianoRoll";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const toNoteSequence = (
  miniValues: MiniValue[],
  baseOctave: number = 5
): Chord[] => {
  let begin = 0;
  return miniValues.map((value) => {
    const note = {
      midiNoteNumber: value.notes.map((note) => note + 12 * baseOctave),
      time: begin,
      duration: value.dur,
      velocity: value.velocity,
      legato: value.legato,
    };

    begin += value.dur;

    return note;
  });
};

export default function usePersistantState<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const location = useLocation();
  const navigate = useNavigate();
  const search = new URLSearchParams(location.search);
  const existingValue = search.get(key);

  const [state, setInternalState] = useState<T>(
    existingValue ? (JSON.parse(atob(existingValue)) as T) : initialValue
  );

  useEffect(() => {
    /*const value = localStorage.getItem(key);

    if (!value) return;

    setInternalState(JSON.parse(value));*/

    if (existingValue && JSON.parse(atob(existingValue)) !== state) {
      setInternalState(JSON.parse(atob(existingValue)) as T);
    }
  }, [existingValue]);

  const setState = (value: T) => {
    const search = new URLSearchParams(location.search);
    search.set(key, btoa(JSON.stringify(value)));
    navigate(
      { hash: location.hash, search: search.toString() },
      { replace: true, state: location.state }
    );
    //localStorage.setItem(key, JSON.stringify(value));
    setInternalState(value);
  };

  return [state, setState];
}
