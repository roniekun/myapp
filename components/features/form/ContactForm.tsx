const ContactForm = () => {
  async function submitForm() {
    "use server";
    console.log("message");
  }
  const commonStyle = "border-b p-2 focus:outline-none text-sm";

  return (
    <form
      className="flex flex-col gap-1 p-4 rounded-md shadow-md sm:w-[500px] w-full"
      action={submitForm}
    >
      <input className={commonStyle} placeholder="Enter your name" type="name" />
      <input className={commonStyle} placeholder="Enter your email" type="email" />
      <textarea
        className={commonStyle}
        placeholder="type your message here..."
        rows={4}
        name="message"
        id=""
      ></textarea>
      <button className="rounded-md px-3 py-2 border w-fit my-3 text-xs" type="submit">Send it</button>
    </form>
  );
};
export default ContactForm;
