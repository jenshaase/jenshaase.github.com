import React, { useCallback, useEffect, useState } from "react";
import { PatternForm, PatternFormValues } from "./PatternForm";
import { pminiArray } from "@/lib/pmini";
import { Chord, PianoRoll } from "../pianoroll/PianoRoll";
import { Button } from "../ui/button";
import {
  ChevronsUpDown,
  Copy,
  EllipsisVertical,
  Trash2,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { toNoteSequence } from "./helpers";
import { Toggle } from "../ui/toggle";
import { Select } from "../ui/select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AllInstruments, Instrument } from "@/lib/instruments";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export type PatternState = {
  muted: boolean;
  instrument: string;
  chord: {
    pattern: string;
    baseDur: number;
    octave: number;
  };
  arp: {
    enabled: boolean;
    pattern: string;
    baseDur: number;
  };
};

export type PatternProps = {
  state: PatternState;
  onChange: (state: PatternState) => void;
  onDelete: () => void;
  onDuplicate: (state: PatternState) => void;
};

export const Pattern: React.FC<PatternProps> = ({
  state,
  onChange,
  onDelete,
  onDuplicate,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [noteSeq, setNoteSeq] = useState<Chord[]>([]);

  const formValues: PatternFormValues = {
    chordPattern: state.chord.pattern,
    chordBaseDur: state.chord.baseDur,
    octave: state.chord.octave,
    arpEnabled: state.arp.enabled,
    arpPattern: state.arp.pattern,
    arpBaseDur: state.arp.baseDur,
  };

  const onFormChange = useCallback(
    (value: PatternFormValues) => {
      onChange({
        ...state,
        chord: {
          pattern: value.chordPattern,
          baseDur: value.chordBaseDur,
          octave: value.octave,
        },
        arp: {
          enabled: value.arpEnabled,
          pattern: value.arpPattern,
          baseDur: value.arpBaseDur,
        },
      });
    },
    [onChange]
  );

  useEffect(() => {
    try {
      setNoteSeq(
        toNoteSequence(
          pminiArray(
            state.chord.pattern,
            state.arp.enabled && state.arp.pattern.length > 0
              ? state.arp.pattern
              : undefined,
            { dur: state.chord.baseDur },
            { dur: state.arp.baseDur }
          ),
          state.chord.octave
        )
      );
    } catch (error) {
      console.log("pattern invalid", error);
    }
  }, [state]);

  const groupedInstruments = AllInstruments.reduce((obj, instrument) => {
    if (!obj[instrument.group]) {
      obj[instrument.group] = [] as Instrument<any>[];
    }

    obj[instrument.group].push(instrument);

    return obj;
  }, {} as Record<string, Instrument<any>[]>);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center bg-accent p-2">
        <div className="flex-1 flex items-center">
          <CollapsibleTrigger asChild>
            <Button variant="default" size="icon" className="p-0 mr-2">
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <Select
            value={state.instrument}
            onValueChange={(instrument) => onChange({ ...state, instrument })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Instrument" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(groupedInstruments).map(
                ([group, instruments]) => {
                  return (
                    <SelectGroup key={group}>
                      <SelectLabel>{group}</SelectLabel>
                      {instruments.map((i) => {
                        return (
                          <SelectItem key={i.id} value={i.id}>
                            {i.name}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  );
                }
              )}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <Toggle
            variant={"outline"}
            pressed={state.muted}
            onPressedChange={(muted: boolean) => {
              onChange({ ...state, muted });
            }}
          >
            {state.muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Toggle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"secondary"} size={"icon"}>
                <EllipsisVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem onClick={() => onDuplicate(state)}>
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onDelete}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <CollapsibleContent>
        <div className="p-4 pt-0">
          <PatternForm values={formValues} onChange={onFormChange} />

          <div className="overflow-scroll">
            <PianoRoll
              timeSignature={[4, 4]}
              grid={4}
              rootNote="C"
              notes={noteSeq}
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
