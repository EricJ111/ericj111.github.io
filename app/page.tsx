import Image from "next/image";

import { prefix } from "@/lib/utils";
import { ModeToggleButton } from "@/components/ui/mode-toggle-button";
import { PotfolioCard } from "@/components/ui/portfolio-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 px-6 py-20 md:px-48">
      <div className="fixed left-6 top-6 md:left-12 md:top-12">
        <ModeToggleButton />
      </div>
      <div className="flex justify-between flex-col md:fixed md:left-0 md:w-1/2 md:pl-48 md:pr-20">
        <div className="space-y-4">
          <div className="text-3xl font-bold leading-none tracking-tight">
            Hello, I am Eric
          </div>
          <p className="text-sm text-muted-foreground">
            Software developer based in Vancouver
          </p>
          <div className="flex justify-center">
            <Image
              src={`${prefix()}/rach.png`}
              alt="portfolio image"
              className="w-2/3 rounded-lg"
              width={5000}
              height={5000}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[1500px] items-end">
        <div className="md:w-1/2 flex flex-col space-y-4">
          <div className="w-full text-3xl font-bold leading-none tracking-tight">
            Portfolio
          </div>
          <PotfolioCard
            title="Project 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum."
          />
          <PotfolioCard
            href="https://ericj111.github.io/"
            title="ericj111.github.io"
            description="A Portfolio website built with NextJS, React, and shadcn"
          />
        </div>
      </div>
    </main>
  );
}
