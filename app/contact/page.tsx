import ContactForm from "../_components/features/form/ContactForm";
import Container from "../_components/layout/Container";
import OpacityTransition from "../_components/transition/OpacityTransition";
export default function Page() {
  return (
    <OpacityTransition>
      <div className="flex relative justify-center items-center p-4 w-full flex-col min-h-screen">
        <Container className="relative p-[5vw]">
          <ContactForm />
        </Container>
      </div>
    </OpacityTransition>
  );
}
