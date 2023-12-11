import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/app/(site)/lib/sanity/sanity.query";
import type { ProjectType } from "@/app/(site)/lib/types";
import { head } from '@/app/(site)/ui/fonts';
export default async function Project() {
  const projects: ProjectType[] = await getProjects();
    console.log("this is projects", projects)
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 
        className={`${head.className} text-3xl text-hghColor font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight`}>
          Featured projects
        </h1>
        <p className="text-base text-txtColor leading-relaxed">
          Below are some of the projects i&apos;ve been actively contrinbuting to over the recent time, feel free to check them out !
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`./projects/${project.slug}`}
            key={project._id}
            className="flex items-center gap-x-4 bg-neuColor border border-zinc-700 hover:border-secColor p-4 rounded-lg ease-in-out"
          >
            <Image
              src={project.logo}
              width={100}
              height={100}
              alt={project.name}
              className="bg-neuColor rounded-full p-2"
            />
            <div>
              <h2 className={`${head.className} font-semibold mb-1`}> {project.name} </h2>
              <div className="text-sm text-zinc-600">{project.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}