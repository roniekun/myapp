import FrequentlyAskedQuestions from "./_components/features/accordion/FrequentlyAskedQuestions";
import Container from "./_components/layout/Container";
export default function Home() {
  return (
    <div className=" min-h-screen relative w-full">
      <Container classNames="flex flex-col w-full gap-4 p-4 relative justify-center items-center">
        <FrequentlyAskedQuestions />
      </Container>
    </div>
  );
}
