"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormValues = {
  fai_goals: number | string;
  fai_shots?: number | string;
  fai_yellow?: number | string;
  fai_red?: number | string;
  ray_goals: number | string;
  ray_shots?: number | string;
  ray_yellow?: number | string;
  ray_red?: number | string;
};

const NewGame = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      fai_goals: 0,
      ray_goals: 0,
    },
  });

  const onSubmit = (values: FormValues) => {
    // convert numeric-like fields to numbers
    const normalize = (v?: number | string) =>
      v === undefined || v === "" ? undefined : Number(v);
    const payload = {
      player1: {
        goals: normalize(values.fai_goals),
        shots: normalize(values.fai_shots),
        yellow: normalize(values.fai_yellow),
        red: normalize(values.fai_red),
      },
      player2: {
        goals: normalize(values.ray_goals),
        shots: normalize(values.ray_shots),
        yellow: normalize(values.ray_yellow),
        red: normalize(values.ray_red),
      },
    };
    console.log("New game:", payload);
    // TODO: submit payload to API / state
  };

  return (
    <div>
      <h1 className="text-4xl mb-6">New Game</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl mb-4">Faisal</h2>

            <FormField
              control={form.control}
              name="fai_goals"
              rules={{ required: "Goals are required" }}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Goals (required)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fai_shots"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Shots on target (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fai_yellow"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Yellow cards (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fai_red"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Red cards (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl mb-4">Rayed</h2>

            <FormField
              control={form.control}
              name="ray_goals"
              rules={{ required: "Goals are required" }}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Goals (required)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ray_shots"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Shots on target (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ray_yellow"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Yellow cards (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ray_red"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Red cards (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-full flex justify-end">
            <Button type="submit">Save Game</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewGame;
