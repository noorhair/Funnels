import { FormFieldMoods } from "@appTypes/forms.types";

export type SelectProps = {
    identifier: string;
    text: string;
    selectOptions: Array<string>;
    initialErrorMessage?: string;
    initialMood?: FormFieldMoods;
    initialValue?: string;
    isRequired?: boolean,
    onChange?: ( value: string, mood: FormFieldMoods) => void;
}