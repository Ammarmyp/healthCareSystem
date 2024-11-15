import { E164Number } from "libphonenumber-js/core";
import Image from "next/image";
import { Control } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export enum FormFieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  fieldType: FormFieldTypes;
  iconSrc?: string;
  iconAlt?: string;
}

const RenderItem = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldTypes.INPUT:
      return (
        <div className="flex rounded-lg border-2 border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              alt={props.iconAlt || "icon"}
              height={24}
              width={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="border-0 bg-dark-400 text-white placeholder:text-dark-600 border-dark-500 h-11 focus-visible:ring-0  focus-visible:ring-offset-0 "
            />
          </FormControl>
        </div>
      );

    case FormFieldTypes.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            onChange={field.onChange}
            defaultCountry="ET"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            className=" mt-2 h-11 rounded-md px-3 text-sm border-2 bg-dark-400 placeholder:text-dark-600 border-dark-500 text-white"
          />
        </FormControl>
      );

    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {props.fieldType !== FormFieldTypes.CHECKBOX && label && (
            <FormLabel className="text-[14px] leading-4 font-medium text-dark-700">
              {label}
            </FormLabel>
          )}
          <RenderItem field={field} props={props} />
          <FormMessage className=" text-red-400 text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
