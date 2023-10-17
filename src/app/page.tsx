import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-xl m-auto">
      <Header />
      <About />
      {/* <footer className="flex flex-row ml-auto pr-10">
        <a href="">Dark mode</a>
      </footer> */}
    </main>
  );
}
