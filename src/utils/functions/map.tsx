import {Select, SelectParamaters } from "../../components/inputFields/input";
import { OptionContent } from "../../components/inputFields/input";
import { Radio } from "../../components/inputFields/input";
import { SingleRadio } from "../../components/inputFields/input";
import Input from "../../components/inputFields/form";

export interface Item{
    id: string;
    fieldType: string;
    inputType?: "email" | "tel" | "text";
    value?: string;
    label: string;
    flag?: string;
    alt?: string;
    options?: OptionContent[];
    placeholder?: string;
   onChange?: () => void;
  width?: string;
  Radio?: SingleRadio[];
  status?: string;
  text1?: string;
}

export interface InputContents {
    content: Item[];
}

export function MapInputs({ content }: InputContents) {
  return (
    content.map((item) => {
      if (item.fieldType === "input") {
        return (
          <Input
            id={item.id}
            label={item.label}
            placeholder={item.placeholder}
            type={item.inputType}
            key={item.id}
            width={item.width}
            src={item.flag}
          />
        );
      } else if(item.fieldType === "select"){
        return (
          <Select
            id={item.id}
            label={item.label}
            options={item.options}
            key={item.id}
            width={item.width}
          />
        );
      } else if (item.fieldType === "radio") {
        return (
          <Radio
            RadioOptions={item.Radio}
            Label={item.label}
          />
         )
      }
    })
  );
}
