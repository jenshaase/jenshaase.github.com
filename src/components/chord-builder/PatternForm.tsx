import React from "react";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, Form } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  chordPattern: z.string(),
  chordBaseDur: z.coerce.number().gt(0),
  octave: z.coerce.number().min(1).max(9),
  arpEnabled: z.boolean(),
  arpPattern: z.string(),
  arpBaseDur: z.coerce.number().gt(0),
});

export type PatternFormValues = z.infer<typeof formSchema>;

export type PatternFormProps = {
  values: PatternFormValues;
  onChange: (values: PatternFormValues) => void;
};

export const PatternForm: React.FC<PatternFormProps> = ({
  values,
  onChange,
}) => {
  const form = useForm<PatternFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    values,
    defaultValues: {
      chordPattern: "c'major d'minor",
      chordBaseDur: 4,
      octave: 5,
      arpEnabled: false,
      arpBaseDur: 1,
      arpPattern: "0 1 0 2",
    },
  });

  const onFormChange = (values: PatternFormValues) => {
    onChange(values);
  };

  return (
    <Form {...form}>
      <form
        className="flex flew-row w-100 border-b"
        onChange={form.handleSubmit(onFormChange)}
      >
        <fieldset className="flex flex-row flex-1 p-4 border-r">
          <FormField
            control={form.control}
            name="chordPattern"
            render={({ field }) => (
              <FormItem className="mr-2 flex-1">
                <FormLabel>Pattern</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="chordBaseDur"
            render={({ field }) => (
              <FormItem className="mr-2">
                <FormLabel>Dur</FormLabel>
                <FormControl>
                  <Input type="number" size={4} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="octave"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Oct</FormLabel>
                <FormControl>
                  <Input type="number" size={2} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="flex flex-row p-4">
          <FormField
            control={form.control}
            name="arpEnabled"
            render={({ field }) => (
              <FormItem className="mr-2">
                <FormLabel>Enable</FormLabel>
                <FormControl>
                  <Checkbox
                    className="flex"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="arpPattern"
            render={({ field }) => (
              <FormItem className="mr-2">
                <FormLabel>Arpeggio Pattern</FormLabel>
                <FormControl>
                  <Input size={30} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="arpBaseDur"
            render={({ field }) => (
              <FormItem className="mr-2">
                <FormLabel>Dur</FormLabel>
                <FormControl>
                  <Input type="number" size={4} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </fieldset>
      </form>
    </Form>
  );

  /*const [pattern, setPattern] = useState<string>("c'major d'minor");
  const [arpPattern, setArpPattern] = useState<string>("[0 1 2]");
  const [duration, setDuration] = useState<number>(4);
  const [octave, setOctave] = useState<number>(5);
  const [bpm, setBpm] = useState<number>(120);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [noteSeq, setNoteSeq] = useState<Chord[]>([]);

  useEffect(() => {
    try {
      setNoteSeq(
        toNoteSequence(
          pminiArray(
            pattern,
            arpPattern.length > 0 ? arpPattern : undefined,
            duration
          ),
          octave
        )
      );
    } catch (error) {
      console.log("pattern invalid", error);
    }
  }, [pattern, duration, arpPattern, octave]);

  useEffect(() => {
    if (isPlaying) {
      defaultPlayer.update(bpm, noteSeq);
    }
  }, [bpm, noteSeq]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Input
            type="number"
            placeholder="bpm"
            value={bpm}
            onChange={(e) => setBpm(parseInt(e.target.value))}
          />
          <Button
            onClick={() => {
              if (isPlaying) {
                defaultPlayer.stop();
                setIsPlaying(false);
              } else {
                defaultPlayer.play(bpm, noteSeq);
                setIsPlaying(true);
              }
            }}
          >
            {isPlaying ? "Stop" : "Play"}
          </Button>
          <Input
            type="text"
            placeholder="Pattern"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          ></Input>
          <Input
            type="number"
            placeholder="Dur"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Octave"
            value={octave}
            onChange={(e) => setOctave(parseInt(e.target.value))}
          />

          <Input
            type="text"
            placeholder="Arp Pattern"
            value={arpPattern}
            onChange={(e) => setArpPattern(e.target.value)}
          ></Input>
        </nav>
      </header>
      <div>
        <PianoRoll
          timeSignature={[4, 4]}
          grid={4}
          rootNote="C"
          notes={noteSeq}
        />
      </div>
    </div>
  );*/
};
