import FrequentlyAskedQuestions from "./_components/features/accordion/FrequentlyAskedQuestions";
import Container from "./_components/layout/Container";
import OpacityTransition from "./_components/transition/OpacityTransition";
import Cards from "./_components/ui/Cards";
import Header from "./_components/layout/Header";
export default function Home() {
  return (
    <div className="w-full">
      <Header className="fixed md:relative bg-white text-zinc-900 backdrop-blur-xl" />
      <OpacityTransition>
        <div className="min-h-screen relative w-full ">
            <Cards />
          <Container className="flex flex-col w-full gap-4 p-4 relative justify-center items-center">
            <FrequentlyAskedQuestions />
          </Container>
        </div>
      </OpacityTransition>
    </div>
  );
}
