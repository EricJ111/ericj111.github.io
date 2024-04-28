import Image from "next/image";

import { ModeToggleButton } from "@/components/ui/mode-toggle-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 px-6 py-20 lg:p-24">
      <div className="fixed left-6 top-6">
        <ModeToggleButton />
      </div>
      <div className="flex justify-between flex-col space-y-2 md:space-y-0 md:flex-row">
        <Card className="md:w-[calc(50%-8px)]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
              Hello, I am Eric
            </CardTitle>
            <CardDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </CardDescription>
          </CardHeader>
        </Card>
        <Image
          src={`/rach.png`}
          alt="portfolio image"
          className="md:w-[calc(50%-8px)] rounded-lg"
          width={5000}
          height={5000}
        />
      </div>
      <div className="flex justify-between flex-col space-y-2 md:space-y-0 md:flex-row">
        <Card className="rounded-none border-x-0 border-b-0 border-gray-300 fixed left-0 bottom-0 w-full flex justify-center items-center bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit md:static md:w-[calc(50%-8px)] md:rounded-lg md:border md:bg-gray-200 md:dark:bg-zinc-800/30">
          <CardHeader>
            <CardTitle className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
              See Portfolio
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="md:w-[calc(50%-8px)]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
              About Me
            </CardTitle>
            <CardDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
