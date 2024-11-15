"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { PatientFormSchema } from "@/lib/validation";
import CustomFormField, { FormFieldTypes } from "../CustomFormField";

const PatientForm = () => {
  // ...
  // 1. Define your form.
  const form = useForm<z.infer<typeof PatientFormSchema>>({
    resolver: zodResolver(PatientFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phoneNumber: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof PatientFormSchema>) {
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
