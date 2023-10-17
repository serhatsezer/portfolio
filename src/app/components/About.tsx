import React from "react";

function About() {
  return (
    <section className="px-10 min-h-screen">
      <div className="flex md:flex-row gap-5 sm:flex-col">
        <div>
          <p className="text-body">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Software engineer / designer.{" "}
            </span>
            Part time musician born in Istanbul raised in Istanbul and moved to
            Helsinki in 2019. Passionate about good design and well written
            software.
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-yellow-600">
              Javascript.
            </span>{" "}
            Apart from those I have experience working with databases such as
            PostgreSQL, MongoDB and some Cloud Natives. Such as AWS, Firebase
            and Google Cloud.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
