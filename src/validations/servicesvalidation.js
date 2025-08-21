import * as yup from "yup";
export const servicesvalidation = yup.object().shape({
  sitelink: yup
    .string()
    .url("لطفا لینک وارد کنید")
    .max(40, "حداکثر حروف 40 میباشد")
    .nullable(),
  servicename: yup
    .string()
    .required("لطفا نام خدمت را وارد کنید")
    .max(20, "حداکثر حروف 20 میباشد"),
  servicecode: yup
    .number()
    .required("لطفا کد خدمت را وارد کنید")
    .max(999999999999999, "حداکثر حروف 15 میباشد")
    .positive("لطفا عدد مثبت وارد کنید"),
  wage: yup
    .number()
    .required("لطفا کارمزد را وارد کنید")
    .max(99999999, "حداکثر 99،999،999 میباشد")
    .positive("لطفا عدد مثبت وارد کنید"),
  additional_charge: yup
    .number()
    .required("لطفا هزینه اضافی را وارد کنید")
    .max(99999999, "حداکثر 99،999،999 میباشد")
    .positive("لطفا عدد مثبت وارد کنید"),
  discription: yup.string().nullable(),
});
