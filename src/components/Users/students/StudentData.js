import * as Yup from "yup";

const initData = {
  firstName: "",
  lastName: "",
  userEmail: "",
  userType: 0,
  dob: "01-Jan-2000",
  picId: 0,
  mobile: "",
  primaryAddress: {
    addressLine01: "",
    city: "",
    state: "",
    country: "",
    postCode: "",
    aaddressLine02: "",
  },
  inDate: "01-Jan-2000",
  outDate: "01-Jan-2000",
  primGuardianEmail: "",
  secnGuardianEmail: "",
};

const validationCfg = Yup.object().shape({
  firstName: Yup.string().required("Required!").min(3, "Min lenghth 3"),
  lastName: Yup.string().required("Required!").min(3, "Min lenghth 3"),
  userEmail: Yup.string().email("Email is invalid").required("Required!"),
  dob: Yup.string().required("Required!"),
  mobile: Yup.string()
    .required("Required!")
    .matches("[0-9]", "Entry not valid")
    .min(10, "Min 10")
    .max(10, "Max 10"),
  inDate: Yup.string().required("Required!"),
  outDate: Yup.string().required("Required!"),
  primGuardianEmail: Yup.string()
    .email("Email is invalid")
    .required("Required!"),
  secnGuardianEmail: Yup.string()
    .email("Email is invalid")
    .required("Required!"),
  primaryAddress: Yup.object().shape({
    city: Yup.string().required("Required!").min(3, "Min lenghth 3"),
    state: Yup.string().required("Required!").min(4, "Min lenghth 4"),
    country: Yup.string().required("Required!"),
    postCode: Yup.string().required("Required!").min(6, "Min lenghth 6"),
    addressLine01: Yup.string().required("Required!").min(15, "Min lenghth 15"),
  }),
});

export { initData, validationCfg };