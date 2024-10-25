

//FORM /////////////////
export type FormRef = {
    getFormData: () => FormData | undefined;
    validateFields: () => boolean;
    makeFieldAsError: (fieldName: string, errorMessage: string ) => void;
    setFieldValue: (fieldName: string, value: string ) => void;
}
export type FormData = { [ key: string ] : FormFieldData | undefined };

//FORM FIELDS /////////////////
export type FormFieldMoods = "error" | "default" | "filled";
export type FormFieldData = (CheckboxData | InputSelectData) & { isRequired: boolean };
export type InputSelectData = {
    type: "input" | "select";
    value: string | undefined;
    mood: FormFieldMoods;
}
export type CheckboxData = {
    type:  "checkbox";
    value: boolean;
}
export type FormFieldRef = {
    getFieldData: () => FormFieldData;
    changeFieldMood: ( mood: FormFieldMoods ) => void;
    changeErrorMessage: ( errorMessage: string ) => void;
    changeValue: (value: string) => void;
};