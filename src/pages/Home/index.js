import { BackwardCounter } from "../../components/BackwardCounter";
import { ForwardCounter } from "../../components/ForwardCounter";

export function Home() {
  return (
    <>
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
}