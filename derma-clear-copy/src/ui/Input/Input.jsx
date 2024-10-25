import { useState, useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./Input.module.scss";

const Input = forwardRef(function InputFunction(props, ref) {
	const {
		identifier,
		topText,
		initialErrorMessage,
		type = "text",
		initialMood = "default",
		initialValue = "",
		isRequired = true,
		onChange,
		onInputChange: onInputChangeProp,
	} = props;

	const [mood, setMood] = useState(initialMood);
	const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
	const [value, setValue] = useState(initialValue);

	const clickHandler = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	useImperativeHandle(
		ref,
		() => {
			return {
				getFieldData,
				changeFieldMood,
				changeErrorMessage,
				changeValue,
			};
		},
		[value, errorMessage, mood]
	);

	useEffect(() => {
		onChange && onChange;
	}, [mood, value, errorMessage]);

	const getFieldData = () => {
		return {
			type: "input",
			value: value,
			mood: mood,
			isRequired: isRequired,
		};
	};
	const changeValue = (value) => {
		setValue(value);
	};
	const changeFieldMood = (mood) => setMood(mood);
	const changeErrorMessage = (errorMessage) => {
		setMood("error");
		setErrorMessage(errorMessage);
	};

	const inputRef = useRef(null);

	const onInputChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
		setMood(newValue ? "filled" : "default");
		setErrorMessage(newValue ? "" : errorMessage);
		onInputChangeProp && onInputChangeProp(e);
	};

	return (
		<div
			onClick={clickHandler}
			className={`${styles.inputContainer} ${value ? styles.input_with_value : ""} ${
				mood === "error" ? styles.field_with_error : ""
			}`}
		>
			<div className={styles.div_input}>
				<input
					ref={inputRef}
					className="input"
					onChange={(e) => onInputChange(e)}
					placeholder={topText}
					name={identifier}
					type={type}
					value={value}
				/>
			</div>
			{errorMessage && <label className={styles.error_text}>{errorMessage}</label>}
		</div>
	);
});

export default Input;
