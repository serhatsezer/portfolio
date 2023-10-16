import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-xl m-auto">
      <header className="p-10">
        <nav className="flex justify-between">
          <div className="flex-col">
            <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Serhat Sezer
            </h1>
            <p className="font-normal text-2xl text-gray-500 dark:text-gray-400">
              Software Engineer / Make it happener
            </p>
          </div>
          <div>
            <ul className="xl:flex-row flex-col flex items-center justify-center gap-2">
              <li>
                <a
                  className="transition ease-out hover:text-blue-300"
                  href="https://linkedin.com/in/serhatsezer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="transition ease-out hover:text-blue-300"
                  href="https://twitter.com/serhatsezer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="transition ease-out hover:text-blue-300"
                  href="mailto:serhat.szr@gmail.com"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section className="px-10">
        <div className="flex md:flex-row gap-5 sm:flex-col">
          <div>
            <p className="text-body">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Software engineer / designer.{" "}
              </span>
              Part time musician born in Istanbul raised in Istanbul and moved
              to Helsinki in 2019. {""}
              <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                Passionate about
              </span>{" "}
              good {""}
              <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                design
              </span>{" "}
              and{" "}
              <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                well written software.
              </span>
            </p>
            <p className="text-body pt-8">
              Tech stack that I mostly use is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-red-700">
                Swift
              </span>
              ,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-300 from-blue-500">
                TypeScript
              </span>
              ,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-yellow-100">
                Javascript.
              </span>{" "}
              Apart from those I have experience working with databases such as
              PostgreSQL, MongoDB and some Cloud Natives. Such as AWS, Firebase
              and Google Cloud.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
