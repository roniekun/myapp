import ContactForm from "../_components/features/form/ContactForm";
import Container from "../_components/layout/Container";
export default function Page() {
  return (
    <div className="flex justify-center items-center p-4 w-full flex-col min-h-screen">
      <Container classNames="p-[5vw]">
        <ContactForm />
      </Container>
    </div>
  );
}
