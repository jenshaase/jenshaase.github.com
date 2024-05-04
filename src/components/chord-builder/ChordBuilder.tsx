import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { pminiArray } from "@/lib/pmini";
import { Input } from "../ui/input";
import { PlayerData, defaultPlayer } from "./Player";
import { Pattern, PatternState } from "./Pattern";
import { Piano, Play, Plus, Square } from "lucide-react";
import usePersistantState, { toNoteSequence } from "./helpers";

export type ChordBuilderProps = {};

const defaultPatternState = {
  muted: false,
  instrument: "sin",
  chord: {
    pattern: "c'major d'minor",
    baseDur: 4,
    octave: 5,
  },
  arp: {
    enabled: false,
    pattern: "0 1 0 2",
    baseDur: 1,
  },
};

export const ChordBuilder: React.FC<ChordBuilderProps> = () => {
  useEffect(() => {
    document.title = "Patty - The pattern builder";
  }, []);

  const [patterns, setPatterns] = usePersistantState<PatternState[]>(
    "patterns",
    [
      {
        ...defaultPatternState,
      },
    ]
  );
  const [bpm, setBpm] = useState<number>(120);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playerData, setPlayerData] = useState<PlayerData>({
    bpm,
    sequences: [],
  });

  useEffect(() => {
    try {
      const sequences = patterns.map((state) => {
        // TODO: Handle errors
        return {
          muted: state.muted,
          instrument: state.instrument,
          chords: toNoteSequence(
            pminiArray(
              state.chord.pattern,
              state.arp.enabled && state.arp.pattern.length > 0
                ? state.arp.pattern
                : undefined,
              { dur: state.chord.baseDur },
              { dur: state.arp.baseDur }
            ),
            state.chord.octave
          ),
        };
      });

      setPlayerData({
        bpm,
        sequences,
      });
    } catch (error) {
      console.log("pattern invalid", error);
    }
  }, [patterns, bpm]);

  useEffect(() => {
    if (isPlaying) {
      defaultPlayer.update(playerData);
    }
  }, [playerData]);

  const onAddPattern = () => {
    setPatterns([...patterns, { ...defaultPatternState }]);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background p-2">
        <div className="flex flew-col">
          <Piano className="mr-2"></Piano>
          <strong>Patty</strong>
        </div>
        <nav className="flex flex-row items-center">
          <Button
            className="mr-4"
            onClick={() => {
              if (isPlaying) {
                defaultPlayer.stop();
                setIsPlaying(false);
              } else {
                defaultPlayer.play(playerData);
                setIsPlaying(true);
              }
            }}
          >
            {isPlaying ? (
              <>
                <Square className="mr-2 h-4 w-4" />
                Stop
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Play
              </>
            )}
          </Button>
          <Input
            className="mr-2"
            type="number"
            placeholder="bpm"
            value={bpm}
            size={4}
            onChange={(e) => setBpm(parseInt(e.target.value))}
          />
          bpm
        </nav>
        <div></div>
      </header>
      <div>
        {patterns.map((p, i) => (
          <Pattern
            key={i}
            state={p}
            onChange={(state) =>
              setPatterns(patterns.map((p, j) => (i == j ? state : p)))
            }
            onDelete={() => setPatterns(patterns.filter((_, j) => i !== j))}
            onDuplicate={(p) =>
              setPatterns([...patterns.slice(0, i), p, ...patterns.slice(i)])
            }
          />
        ))}
        <div className="flex border-t p-2 justify-center">
          <Button onClick={onAddPattern}>
            <Plus className="h-4 w-4" />
            Add Pattern
          </Button>
        </div>
      </div>
    </div>
  );
};
