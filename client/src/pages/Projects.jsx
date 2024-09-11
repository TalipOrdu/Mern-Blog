import CallToAction from "../components/CallToAction";
import {Button} from "flowbite-react";
import {HiArrowNarrowDown} from "react-icons/hi";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-5">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        On our projects page, you’ll find a diverse range of innovative and
        impactful initiatives that showcase our commitment to pushing boundaries
        in web development. Explore the portfolio to discover how we blend
        creativity with technical expertise to deliver projects that solve
        real-world challenges while offering an exceptional user experience.
      </p>
      <div className="pt-6 max-w-4xl mx-auto rounded bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <a href="/My_CV.pdf" download>
      <Button outline className="text-2xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-blue-500">
        Portfolio
      <HiArrowNarrowDown className="ml-2"></HiArrowNarrowDown>
      </Button>
      </a>

    </div>
  );
}
