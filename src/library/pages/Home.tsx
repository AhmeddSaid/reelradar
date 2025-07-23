import { Suspense } from "react";
import Loader from "../components/Loader";
import ClientHome from "./ClientHome";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex h-80 items-center justify-center">
          <Loader />
        </div>
      }
    >
      <ClientHome />
    </Suspense>
  );
}
