import { FormFieldRef, FormFieldMoods } from "@appTypes/forms.types";

export type FormProps = {
    formConfig: FormConfig;
    containerClassName?: string
}

export type FormFieldsRefsArray = { [ key: string ] : React.RefObject<FormFieldRef> };

type FormConfig = Array<ElementFormType>;

type ElementFormType = (InputConfig | SelectConfig | CheckboxConfig) & isRequired; 

type isRequired = { isRequired?: boolean };

type FormFieldConfig = {
    identifier: string;
    initialErrorMessage?: string;
    initialMood?: FormFieldMoods;
    initialValue?: string;
    onChange?: ( value: string, mood: FormFieldMoods ) => void;
}

type InputConfig = FormFieldConfig & {
    type: "input" | "email" | "number";
    topText: string;
    inputType?: string;
    onInputChange?: ( event?: React.ChangeEvent<HTMLInputElement> ) => void;
};

type SelectConfig = FormFieldConfig & {
    type: "select";
    text: string;
    selectOptions: Array<string>;
};

type CheckboxConfig = {
    type: "checkbox";
    identifier: string;
    text: string;
    initialValue?: boolean;
    onChange?: ( value: boolean ) => void;
}

export const formErrors = {
    buttonRequired: "Form not created, a button is required.",
    buttonNameRequired: "Form not created, buttons requires name attribute.",
}

export const formWarnings = {
    buttonWithoutEvent: "Form warning: A button was created without event.",
}