import Link from "next/link";

const ContactButton = () => {
  return (
    <Link
      className="hidden lg:flex relative top-0 right-0  p-4 py-2 w-fit  rounded-md text-zinc-800 font-medium border-2 border-zinc-800"
      href="/contact"
    >
     Contact
    </Link>
  );
};
export default ContactButton;
