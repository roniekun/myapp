import OpacityTransition from "./_components/transition/OpacityTransition";
import LenisListener from "./_lib/listeners/LenisListener";
import Container from "./_components/layout/Container";

export default function Home() {
  return (
    <div className="w-full">
      <OpacityTransition>
        <LenisListener>
          <Container>
            <div className="h-[300vh]  p-4 w-full relative">
              {/* <h1 className="md:text-4xl text-2xl font-black text-center">Bringing innovative ideas to life</h1> */}
            </div>
          </Container>
        </LenisListener>
      </OpacityTransition>
    </div>
  );
}
