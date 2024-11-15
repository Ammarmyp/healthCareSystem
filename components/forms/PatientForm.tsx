"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormField, { FormFieldTypes } from "../CustomFormField";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, { message: "email please" }),
  phoneNumber: z.string().optional(),
});

const PatientForm = () => {
  // ...
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phoneNumber: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-3">
        <section className="mb-10 space-y-3">
          <h1 className="header">Hello there 👋</h1>
          <p className="text-dark-700">Get started with appointments</p>
        </section>

        <CustomFormField
          control={form.control}
          label="Full name"
          name="fullname"
          placeholder="Ammar"
          fieldType={FormFieldTypes.INPUT}
        />
        <CustomFormField
          control={form.control}
          label="Email address"
          name="email"
          placeholder="ammar@gmail.com"
          fieldType={FormFieldTypes.INPUT}
        />
        <CustomFormField
          control={form.control}
          label="Phone number"
          name="phoneNumber"
          placeholder="+2519****"
          fieldType={FormFieldTypes.PHONE_INPUT}
        />
        <Button
          type="submit"
          className="w-full h-11 bg-green-500 hover:bg-green-500/60"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default PatientForm;
