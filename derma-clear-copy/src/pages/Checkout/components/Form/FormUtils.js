import { ERRORS_STRING, USA_STATES_CODES } from "@logic/consts";
import { evaluateFetchPost } from "@logic/utils";
import { validateAddressService } from "@logic/services";

export const getCheckoutClientFormValues = async (customerFormRef) => {
    let isValid = true;

    if (!(customerFormRef?.current?.validateFields())) isValid = false;

    if (isValid) {
        const customerFormData = customerFormRef.current?.getFormData();

        if (customerFormData) {
            const firstName = String(customerFormData['firstName']?.value);
            const lastName = String(customerFormData['lastName']?.value);
            const email = String(customerFormData['email']?.value);
            const deliveryAddress = String(customerFormData['street']?.value);
            const deliveryAddress2 = String(customerFormData['apartment']?.value);
            const phone = String(customerFormData['phone']?.value).replace(/\D/g, '');
            const city = String(customerFormData['city']?.value);
            const zipCode = String(customerFormData['zipCode']?.value);
            const state = USA_STATES_CODES.find(state => state.name === String(customerFormData['state']?.value))?.code;
            const country = "US";

            const validateAddressData = await evaluateFetchPost(validateAddressService, {
                street: deliveryAddress,
                city: city,
                state: state,
                zipcode: zipCode,
            });

            if (!validateAddressData) {
                customerFormRef.current?.makeFieldAsError("street", ERRORS_STRING.addressInvalid);
                customerFormRef.current?.makeFieldAsError("city", ERRORS_STRING.addressInvalid)
                customerFormRef.current?.makeFieldAsError("zipCode", ERRORS_STRING.addressInvalid)

                return;
            }

            return {
                firstName,
                lastName,
                email,
                phone,
                deliveryAddress,
                deliveryAddress2,
                city,
                state,
                zipCode,
                country,
            };
        }
    } else {
        return;
    }
};
