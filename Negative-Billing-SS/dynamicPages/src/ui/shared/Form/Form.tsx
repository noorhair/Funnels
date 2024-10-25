import React, { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import { FormProps, FormFieldsRefsArray } from "./Form.proptypes";
import styles from "./Form.styles.module.scss";

import { FormFieldRef, FormRef, FormData } from "@appTypes/forms.types";
import { Input, Select, Checkbox } from "@sharedUI";
import { ERRORS_STRING } from "@logic/consts";

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

	useImperativeHandle(
		ref,
		() => {
			return {
				getFormData: getFormData,
				validateFields: validateFields,
				makeFieldAsError: makeFieldAsError,
			};
		},
		[refsArray]
	);

	//to mark a field with error
	const makeFieldAsError = (fieldName: string, errorMessage: string) => {
		if (refsArray) {
			const currentRef = refsArray[fieldName].current;
			currentRef?.changeFieldMood("error");
			currentRef?.changeErrorMessage(errorMessage);
		}
	};

	//to get form data
	const getFormData = (): FormData | undefined => {
		if (!refsArray) return undefined;
		const auxFormData = {} as FormData;
		Object.keys(refsArray).map((key) => {
			auxFormData[key] = refsArray[key].current?.getFieldData();
		});
		return auxFormData;
	};

	//to validate form
	const validateFields = (): boolean => {
		const formData = getFormData();
		let isValid = true;

		if (formData) {
			Object.keys(formData).map((key) => {
				const currentField = formData[key];
				if (currentField?.type !== "checkbox" && refsArray && refsArray[key].current) {
					const currentRef = refsArray[key].current;

					//validar por campos vacíos
					if (currentField?.isRequired) {
						if (!currentField?.value) {
							currentRef?.changeErrorMessage(ERRORS_STRING.voidField);
							isValid = isValid && false;
						} else {
							//validar por keys especiales
							let regex = /.*/;
							switch (key) {
								case "email":
									regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
									isValid = isValid && regex.test(currentField.value);
									!isValid && currentRef?.changeErrorMessage(ERRORS_STRING.invalidMail);
									break;
								case "cardNumber":
									isValid = isValid && currentField.value.length === 16;
									!(currentField.value.length === 16) &&
										currentRef?.changeErrorMessage("Card length must be 16 digits");
									break;
								case "cardSecurityCode":
									isValid = isValid && currentField.value.length === 3;
									!(currentField.value.length === 3) &&
										currentRef?.changeErrorMessage("Card security code length must be 3 digits");
									break;
								case "zipCode":
									isValid = isValid && currentField.value.length === 5;
									!(currentField.value.length === 5) &&
										currentRef?.changeErrorMessage("Zip code length must be 5 digits");
									break;
								case "cardExpiration":
									regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
									isValid = isValid && regex.test(currentField.value.trim());
									!isValid && currentRef?.changeErrorMessage("Incorrect format, use [MM / YY].");
									break;
								default:
									break;
							}
						}
					}
				}
			});
		} else {
			isValid = false;
		}

		return isValid;
	};

	return (
		<form className={containerClassName || styles.form_container}>
			{refsArray && (
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
								/>
							);
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
							);
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
							);
						}
					})}
				</>
			)}
		</form>
	);
});

export default Form;
