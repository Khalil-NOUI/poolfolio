import { getProfile } from "@/app/(site)/lib/sanity/sanity.query";
import type { ProfileType } from "@/app/(site)/lib/types";
import HeroSvg from "@/app/(site)/ui/HeroSvg";;
import { head  } from '@/app/(site)/ui/fonts';
import clsx from "clsx";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main 
    className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1
              className={`${head.className} font-semibold text-3xl tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full`}>
      {data.headline.split(' ').map((word, index) => (
        <span
          key={index}
          className={clsx("text-3xl font-semibold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full", {
            'text-priColor' : index >= 3 },
            {'text-txtColor' : index < 3}, )
          }
        >
          {word}{' '}
        </span>
      ))}
    </h1>
    

              <p className="text-base font-semibold text-txtColor leading-relaxed">
                {data.shortBio}
              </p>
              <div
              className="flex xl:flex-col flex-col items-start xl:justify-center justify-between gap-x-12 xl:mt-22 lg:mt-32 mt-20 mb-16">
                <h5
                className={`${head.className} text-txtColor font-semibold text-3xl tracking-tight sm:text-3xl mb-1 lg:leading-[3rem] leading-tight lg:min-w-[700px] min-w-full`}> Contact </h5>
              <ul className="flex items-center gap-x-6 my-5">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferrer noopener"
                        className="flex font-bold items-center gap-x-3 mb-5 hover:text-orange-400 duration-300"
                      >
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
              </div>
              
            </div>
          ))}
        <HeroSvg />
      </section>
      
    </main>
  );
}