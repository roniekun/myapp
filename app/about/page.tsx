import OpacityTransition from "../_components/transition/OpacityTransition";
import Header from "../_components/layout/Header";

export default function Page() {
  return (
    <OpacityTransition>
      <Header className="text-zinc-900 bg-white" />
      <div className="flex h-auto justify-center items-center w-full relative flex-col"></div>
    </OpacityTransition>
  );
}
