import React, { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import { FormProps, FormFieldsRefsArray } from "./Form.proptypes";
import styles from "./Form.styles.module.scss"

import { FormFieldRef, FormRef, FormData } from "@ui/types/forms.types";
import { ERRORS_STRING } from "@logic/consts";
import Input from "@ui/Input/Input";
import Select from "@ui/Select/Select";
import Checkbox from "@ui/Checkbox/Checkbox";

const Form = forwardRef<FormRef, FormProps>(function QuotingTableBodyFunction(props, ref) {

    const { formConfig, containerClassName } = props;
    
    const [refsArray, setRefsArray] = useState<FormFieldsRefsArray | undefined>(undefined);

    useEffect(() => {
        const auxRefsArray = {} as FormFieldsRefsArray;
        formConfig.map((item) => {
            auxRefsArray[item.identifier] = React.createRef<FormFieldRef>();
        });
        setRefsArray(auxRefsArray);
    }, []);

    useImperativeHandle(ref, () => {
        return {
            getFormData,
            validateFields,
            makeFieldAsError,
            setFieldValue
        };
    }, [refsArray]);


    const setFieldValue = ( fieldName: string, value: string ) => { 
        if(refsArray) {
            const currentRef = refsArray[fieldName].current;
            currentRef?.changeValue(value);
        }
    }

    //to mark a field with error 
    const makeFieldAsError = (fieldName: string, errorMessage: string ) => { 
        if(refsArray) {
            const currentRef = refsArray[fieldName].current;
            currentRef?.changeFieldMood("error");
            currentRef?.changeErrorMessage(errorMessage);
        }
    }

    //to get form data
    const getFormData = () : FormData | undefined => {
        if (!refsArray) return undefined;
        const auxFormData = {} as FormData;
        Object.keys(refsArray).map(key => {
            auxFormData[key] = refsArray[key].current?.getFieldData();
        }); 
        return auxFormData;
    };


    //to validate form
    const validateFields = () : boolean => {
        const formData = getFormData();
        let isValidField = true;

        if (formData) {
            Object.keys(formData).map(key => {
                const currentField = formData[key];
                if (currentField?.type !== "checkbox" && refsArray && refsArray[key].current) {
                    const currentRef = refsArray[key].current;
                    let isValid;
                    
                    currentRef?.changeErrorMessage("");
                    currentRef?.changeFieldMood("default");

                    if (currentField?.isRequired) {
                        if (!currentField?.value) {
                            currentRef?.changeErrorMessage(ERRORS_STRING.voidField);
                            isValidField = false;
                        } else {
                            let regex = /.*/;
                            switch(key) {
                                case "email":
                                    regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
                                    isValid = regex.test(currentField.value);
                                    if (!isValid) {
                                        currentRef?.changeErrorMessage(ERRORS_STRING.invalidMail);
                                        isValidField = false;
                                    }
                                break;
                                case "phone":
                                    let phone = currentField.value.replace(/\D/g, '');
                                    isValid = phone.length === 10;

                                    if (!isValid) {
                                        currentRef?.changeErrorMessage("Phone length must be 10 digits");
                                        isValidField = false;
                                    }
                                break;
                            }
                        }
                    }
                }
            }); 
        } else {
            isValidField = false;
        }

        return isValidField;
       
    };


    return (
        <form className={containerClassName || styles.form_container}>
            {refsArray && 
                <>
                    {formConfig.map((item, index) => {
                        if (item.type === "input") {  
                            return (
                                <Input 
                                    key={index}
                                    ref={refsArray[item.identifier]}
                                    identifier={item.identifier}
                                    topText={item.topText}
                                    type={item.inputType}
                                    initialErrorMessage={item.initialErrorMessage}
                                    initialMood={item.initialMood}
                                    initialValue={item.initialValue}
                                    isRequired={item.isRequired}
                                    onChange={item.onChange}
                                    onInputChange={item.onInputChange}
                                />
                            )
                        } else if (item.type === "select") {
                            return (
                                <Select 
                                    key={index}
                                    ref={refsArray[item.identifier]}
                                    identifier={item.identifier}
                                    text={item.text}
                                    selectOptions={item.selectOptions}
                                    initialErrorMessage={item.initialErrorMessage}
                                    initialMood={item.initialMood}
                                    initialValue={item.initialValue}
                                    isRequired={item.isRequired}
                                    onChange={item.onChange}
                                />
                            )
                        } else if (item.type === "checkbox") {
                            return (
                                <Checkbox 
                                    key={index}
                                    ref={refsArray[item.identifier]}
                                    text={item.text}
                                    isRequired={item.isRequired}
                                    initialState={item.initialValue}
                                    onChange={item.onChange}
                                />
                            )
                        }
                    })}
                </>
            }
        </form>
    )
});

export default Form;