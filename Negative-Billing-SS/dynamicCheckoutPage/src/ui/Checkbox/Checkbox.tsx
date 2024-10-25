import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./Checkbox.styles.module.scss";
import { CheckboxProps } from "./Checkbox.proptypes";
import { FormFieldData, FormFieldRef } from "@appTypes/forms.types";

const Checkbox = forwardRef<FormFieldRef, CheckboxProps>(function InputFunction(props, ref) {
	const { text, initialState = false, isRequired = false, onChange } = props;

	const [state, setState] = useState(initialState);

	useImperativeHandle(
		ref,
		() => {
			return {
				getFieldData: getFieldData,
				changeFieldMood: changeFieldMood,
				changeErrorMessage: changeErrorMessage,
				changeValue,
			};
		},
		[state]
	);

	useEffect(() => {
		onChange && onChange(state);
	}, [state]);

	const changeValue = (value: string) => {
		console.log(value);
	};

	const changeFieldMood = () => {};
	const changeErrorMessage = () => {};
	const getFieldData = (): FormFieldData => {
		return {
			type: "checkbox",
			value: state,
			isRequired: isRequired,
		};
	};

	const handleChangeCheckBox = () => {
		if (isRequired) {
			alert("This field is required.");
			return;
		}
		setState(!state);
	};
	return (
		<div className={styles.container}>
			<input
				type="checkbox"
				checked={state}
				onChange={handleChangeCheckBox}
			/>
			<span>{text}</span>
		</div>
	);
});

export default Checkbox;
