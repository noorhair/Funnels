import { useState, useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import { InputProps } from "./Input.proptypes";
import styles from "./Input.styles.module.scss";
import { FormFieldMoods, FormFieldData, FormFieldRef } from "@ui/types/forms.types";

const Input = forwardRef<FormFieldRef, InputProps>(function InputFunction(props, ref) {

    const { 
        identifier, 
        topText, 
        initialErrorMessage, 
        type="text", 
        initialMood = "default",
        initialValue = "",
        isRequired = true,
        onChange,
        onInputChange: onInputChangeProp
    } = props;

    const [mood, setMood] = useState(initialMood);
    const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
    const [value, setValue] = useState(initialValue);

    useImperativeHandle(ref, () => {
        return { 
            getFieldData,
            changeFieldMood,
            changeErrorMessage,
            changeValue,
        };
    }, [value, errorMessage, mood]);

    useEffect(() => {onChange && onChange}, [mood, value, errorMessage])

    const getFieldData = () : FormFieldData => {
        return {
            type: "input",
            value: value,
            mood: mood,
            isRequired: isRequired,
        }
    }
    const changeValue = (value: string) => {
        setValue(value);
    };
    const changeFieldMood = (mood: FormFieldMoods) => setMood(mood);
    const changeErrorMessage = (errorMessage: string) => {
        setMood("error");
        setErrorMessage(errorMessage);
    };

    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        setMood(newValue ? "filled" : "default");
        setErrorMessage(newValue ? "" : errorMessage);
        onInputChangeProp && onInputChangeProp(e) ;
    }

    return (
        <div 
            onClick={() => {
                if (inputRef.current){
                    inputRef.current.focus()
                }
            }}
            className={`${styles.input_container} ${value ? styles.input_with_value: ""} ${mood === "error" ? styles.field_with_error : ""}`}
        >
            <label className={styles.top_text}>{topText}</label>
            <div className={styles.div_input}>
                <input 
                    ref={inputRef}
                    className="input" 
                    onChange={onInputChange} 
                    placeholder={topText} 
                    name={identifier}
                    type={type}
                    value={value}
                />
            </div>
            {errorMessage && <label className={styles.error_text}>{errorMessage}</label>}
        </div>
    )
})

export default Input;