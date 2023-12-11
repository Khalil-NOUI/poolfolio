import Image from "next/image";
import { getProfile } from "@/app/(site)/lib/sanity/sanity.query";
import type { ProfileType } from "@/app/(site)/lib/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import { head } from '@/app/(site)/ui/fonts';
export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 
                className ={`${head.className} lg:text-5xl text-4xl lg:leading-tight text-txtColor basis-1/2 font-bold mb-8`}>
                  Who Am I ?
                </h1>

                <div className="flex flex-col gap-y-3 text-txtColor leading-relaxed">
                  <PortableText value={data.fullBio} />
                </div>
              </div>

              <div className="flex text-txtColor flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-full mb-4 object-cover max-h-96 min-h-96 bg-top bg-neuColor"
                    src={data.profileImage.image}
                    width={300}
                    height={300}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className=" hover:text-hghColor text-txtColor rounded-md px-2 py-1 flex items-center justify-center gap-x-2  bg-neuColor duration-200 text-center cursor-pointer font-medium"
                  >
                    <BiFile className="text-lg" /> Resumé
                  </a>
                </div>

                <ul>
                  <li>
                    <a
                      href={`mailto:${data.email}`}
                      className=" hover:text-hghColor rounded-md px-2 py-1 flex items-center justify-center gap-x-2 bg-neuColor duration-200 text-center cursor-pointer font-medium"
                    >
                      <BiEnvelope className="text-lg" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-txtColor text-4xl mb-4">Expertise</h2>
              <p className="text-txtColor max-w-lg">
                Here are Some of my Skills.
              </p>

              <ul className="flex text-txtColor flex-wrap items-center gap-3 mt-8">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="bg-neuColor border border-txtColor hover:border-hghColor hover:text-hghColor rounded-md px-2 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
    </main>
  );
}