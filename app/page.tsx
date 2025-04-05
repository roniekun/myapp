import OpacityTransition from "./_components/transition/OpacityTransition";
import LenisListener from "./_lib/listeners/LenisListener";
import ScrollGallery from "./_components/features/carousel/ScrollGallery";
export default function Home() {
  return (
    <div className="w-full">
      <OpacityTransition>
        <LenisListener>
          {/* <Container> */}
            <div className="h-[300vh]  p-4 w-full relative">
              <ScrollGallery />
            </div>
          {/* </Container> */}
        </LenisListener>
      </OpacityTransition>
    </div>
  );
}
