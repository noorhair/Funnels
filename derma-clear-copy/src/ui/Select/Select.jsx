import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./Select.module.scss";

const Select = forwardRef(function SelectFunction(props, ref) {
	const {
		identifier,
		text,
		selectOptions,
		selectPlaceHolder,
		initialErrorMessage,
		initialMood = "default",
		initialValue = "",
		isRequired = true,
		onChange,
	} = props;

	const [mood, setMood] = useState(initialMood);
	const [errorMessage, setErrorMessage] = useState(initialErrorMessage);
	const [value, setValue] = useState(initialValue);

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
		onChange && onChange(value, mood);
	}, [mood, errorMessage, value]);

	const changeValue = (value) => {};

	const getFieldData = () => {
		return {
			type: "select",
			value: value,
			mood: mood,
			isRequired: isRequired,
		};
	};

	const changeFieldMood = (mood) => setMood(mood);
	const changeErrorMessage = (errorMessage) => {
		setMood("error");
		setErrorMessage(errorMessage);
	};

	const onSelectChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
		setMood(newValue ? "filled" : "default");
		setErrorMessage(newValue ? "" : errorMessage);
	};

	return (
		<div className={`${styles.select_container} ${mood === "error" ? styles.field_with_error : " "}`}>
			<label className={styles.top_text}>{text}</label>
			<div className={styles.div_select}>
				<select
					className="select"
					defaultValue={initialValue}
					name={identifier}
					onChange={onSelectChange}
				>
					<option
						value=""
						disabled
					>
						{selectPlaceHolder}
					</option>
					{selectOptions.map((item, index) => {
						return (
							<option
								key={index}
								value={item}
							>
								{item}
							</option>
						);
					})}
				</select>
				<svg
					fill="#000000"
					height="800px"
					width="800px"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 330 330"
				>
					<path
						id="XMLID_225_"
						d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
					/>
				</svg>
			</div>
			{errorMessage && <label className={styles.error_text}>{errorMessage}</label>}
		</div>
	);
});

export default Select;
