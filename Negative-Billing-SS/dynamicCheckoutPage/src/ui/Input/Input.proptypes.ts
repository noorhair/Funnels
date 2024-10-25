import { FormFieldMoods } from "@appTypes/forms.types";

export type InputProps = {
    identifier: string;
    topText: string;
    type?: string;
    initialErrorMessage?: string;
    initialMood?: FormFieldMoods;
    initialValue?: string;
    isRequired?: boolean,
    onChange?: ( value: string, mood: FormFieldMoods) => void;
    onInputChange?: ( event?: React.ChangeEvent<HTMLInputElement> ) => void;
}
