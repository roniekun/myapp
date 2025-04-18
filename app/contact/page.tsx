import ContactForm from "../_components/features/form/ContactForm";
import Container from "../_components/layout/Container";
import OpacityTransition from "../_components/transition/OpacityTransition";
import { user } from "../_lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${user.website} - Contact`,
  description: "Generated by create next app",
};
export default function Page() {
  return (
    <OpacityTransition>
      <div className="flex relative  w-full flex-col min-h-screen">
        <Container className="relative p-[5vw]">
          <ContactForm />
        </Container>
      </div>
    </OpacityTransition>
  );
}
