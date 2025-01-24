// "use client";
// import cookie from "cookie";
// import { setGlobalTheme } from "@/store/slices/ThemeSlice";

// import { useAppDispatch } from "@/store/hooks/hooks";
// import { useEffect } from "react";

// export async function getServerSideProps(context) {
//   const cookies = cookie.parse(context.req.headers.cookie || "");
//   const theme = cookies.theme ? cookies.theme : null;

//   return {
//     props: {
//       initialReduxState: {
//         theme,
//       },
//     },
//   };
// }
// import RecentWorks from "@/components/showcase/RecentWorks";
// import EndNote from "@/components/showcase/EndNote";

import ContactForm from "@/components/features/form/ContactForm";

export default function Home() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (initialReduxState) {
  //     dispatch(setGlobalTheme(initialReduxState.theme));
  //   }
  // }, [dispatch, initialReduxState]);

  return (
    <div className=" min-h-screen relative w-full">
      <div className="flex flex-col w-full gap-4 p-4  relative justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}
