// import contactFormSchema from "../_types/types";

// export async function formHandlerAction(formData: FormData): Promise<any> {
//   const unvalidatedData = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     message: formData.get("message"),
//   };

//   const data = contactFormSchema.safeParse(unvalidatedData);
//   if (!data.success) {
//     const errors = data.error;
//     return errors as any;
//   } else {
//     return { successMsg: "Success" };
//   }
// }
