import * as yup from "yup";
export const quickvalidation = yup.object().shape({
  accessid: yup.string().required("نام خدمت را انتخاب کنید"),
  quickaccessname: yup
    .string()
    .required("نام دسترسی سریع وارد کنید")
    .max(15, "حد اکثر حروف 15 میباشد"),
});
