"use client";
import { useFormState } from "react-dom";
import { formHandlerAction } from "../../../_actions/formHandlerAction";
import { useState } from "react";

const ContactForm = () => {
  // const [formAction] = useFormState(formHandleAction, initialState);
  const [error, setError] = useState(null);
  const commonStyle = "border-b p-2 focus:outline-none text-sm bg-transparent" ;
  const handleFormSubmit = (formData: FormData) => {
  };

  return (
    <form
      className="flex flex-col gap-1 p-4 rounded-md shadow-md sm:w-[500px] w-full"
      action={handleFormSubmit}
    >
      <input
        className={commonStyle}
        placeholder="Enter your name"
        type="name"
      />
      <input
        className={commonStyle}
        placeholder="Enter your email"
        type="email"
      />
      <textarea
        className={commonStyle}
        placeholder="type your message here..."
        rows={4}
        name="message"
        id=""
      ></textarea>
      <button
        className="rounded-md px-3 py-2 border w-fit my-3 text-xs text-zinc-700 bg-zinc-200 bg-opacity-85 hover:bg-blue-600 hover:shadow-lg hover:text-zinc-200"
        type="submit"
      >
        Send it
      </button>
    </form>
  );
};
export default ContactForm;
