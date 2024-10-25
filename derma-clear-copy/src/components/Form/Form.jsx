import { forwardRef, useImperativeHandle, useEffect, useState, createRef } from "react";
import styles from "./Form.module.scss";
import { ERRORS_STRING } from "@logic/consts";
import Input from "@ui/Input/Input.jsx";
import Select from "@ui/Select/Select.jsx";
import { OrderButton } from "@ui/OrderButton/OrderButton.jsx";
import paymentMethodsImg from "@images/payment_methods.webp";
import { useRef } from "react";
import { USA_STATES } from "@logic/consts";
import { getCheckoutClientFormValues } from "./FormUtils.js";
import { useNavigate } from "react-router-dom";

const Form = forwardRef(function Form(props) {
	const { containerClassName, isMobileSection } = props;
	const [refsArray, setRefsArray] = useState(undefined);
	const customerFormRef = useRef(null);
	const navigate = useNavigate();

	const clickHandler = async () => {
		const checkoutFormData = await getCheckoutClientFormValues(customerFormRef);
		if (checkoutFormData) {
			navigate("/love-serum/checkout");
		}
	};

	const handlePhoneNumberChange = (event) => {
		if (event) {
			const valor = event.target.value;
			// if (!valor) {
			// 	customerFormRef.current?.setFieldValue("phone", "");
			// 	return;
			// }
			let soloNumeros = valor.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 10) {
				soloNumeros = soloNumeros.slice(0, 10);
			}

			let numeroFormateado = soloNumeros;
			if (numeroFormateado.length > 6) {
				numeroFormateado = `(${numeroFormateado.slice(0, 3)}) ${numeroFormateado.slice(
					3,
					6
				)}-${numeroFormateado.slice(6, 10)}`;
			} else if (numeroFormateado.length > 3) {
				numeroFormateado = `(${numeroFormateado.slice(0, 3)}) ${numeroFormateado.slice(3)}`;
			} else {
				numeroFormateado = `(${numeroFormateado}`;
			}

			customerFormRef.current?.setFieldValue("phone", numeroFormateado);
		}
	};

	const formConfig = [
		{ type: "input", identifier: "firstName", topText: "First name" },
		{ type: "input", identifier: "lastName", topText: "Last name" },
		{ type: "input", identifier: "street", topText: "Street" },
		{ type: "input", identifier: "apartment", topText: "Apartment (optional)", isRequired: false },
		{ type: "input", identifier: "city", topText: "City" },
		{ type: "select", identifier: "state", topText: "Select State", selectOptions: USA_STATES },
		{ type: "input", identifier: "zipCode", topText: "Zip/Postal Code" },
		{ type: "input", identifier: "email", topText: "Email" },
		{
			type: "input",
			identifier: "phone",
			topText: "Phone...",
			onInputChange: handlePhoneNumberChange,
		},
	];

	useEffect(() => {
		const auxRefsArray = {};
		formConfig.map((item) => {
			auxRefsArray[item.identifier] = createRef();
		});
		setRefsArray(auxRefsArray);
	}, []);

	useImperativeHandle(
		customerFormRef,
		() => {
			return {
				getFormData,
				validateFields,
				makeFieldAsError,
				setFieldValue,
			};
		},
		[refsArray]
	);

	const setFieldValue = (fieldName, value) => {
		if (refsArray) {
			const currentRef = refsArray[fieldName].current;
			currentRef?.changeValue(value);
		}
	};

	const makeFieldAsError = (fieldName, errorMessage) => {
		if (refsArray) {
			const currentRef = refsArray[fieldName].current;
			currentRef?.changeFieldMood("error");
			currentRef?.changeErrorMessage(errorMessage);
		}
	};

	const getFormData = () => {
		if (!refsArray) return undefined;
		const auxFormData = {};
		Object.keys(refsArray).map((key) => {
			auxFormData[key] = refsArray[key].current?.getFieldData();
		});
		return auxFormData;
	};

	const validateFields = () => {
		const formData = getFormData();
		let isValid = true;

		if (formData) {
			Object.keys(formData).map((key) => {
				const currentField = formData[key];
				if (refsArray && refsArray[key].current) {
					const currentRef = refsArray[key].current;

					currentRef?.changeErrorMessage("");
					currentRef?.changeFieldMood("default");

					if (currentField?.isRequired) {
						if (!currentField?.value) {
							currentRef?.changeErrorMessage(ERRORS_STRING.voidField);
							isValid = false;
						} else {
							let regex = /.*/;
							switch (key) {
								case "email":
									regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
									isValid = regex.test(currentField.value);
									!isValid && currentRef?.changeErrorMessage(ERRORS_STRING.invalidMail);
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
		<div className={`${containerClassName} ${styles.formContainer} ${isMobileSection ? styles.mobileSection : ""}`}>
			<div className={styles.header}>
				<p>Tell Us Where To Ship Your</p>
				<p>
					<b>Free Bottle Today!</b>
				</p>
			</div>
			<form
				action=""
				className={styles.form}
			>
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
										onInputChange={item.onInputChange}
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
										selectPlaceHolder="Select State"
										isRequired={item.isRequired}
										onChange={item.onChange}
									/>
								);
							}
						})}
					</>
				)}
			</form>

			<OrderButton
				outerStyles={styles.outerSubmitBtn}
				clickHandler={clickHandler}
				subtext="Get Your Free Bottle Faster!"
			>
				Rush My Order!
			</OrderButton>

			<div className={styles.footer}>
				<img
					src={paymentMethodsImg}
					loading="lazy"
					alt="payment methods visa, mastercard, american express, discover"
				/>
			</div>
		</div>
	);
});

export default Form;
