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
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="fixed left-6 top-6">
        <ModeToggleButton />
      </div>
      <Card className="sm:w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
            Hello, I am Eric
          </CardTitle>
          <CardDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="z-10 w-full max-w-6xl items-center justify-center text-sm lg:flex">
        <p className="fixed left-0 bottom-0 flex w-full justify-center border-t border-gray-300 bg-gradient-to-b from-zinc-200 pb-8 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:mt-4 lg:dark:bg-zinc-800/30">
          My Portfolio coming soon...
        </p>
      </div>
    </main>
  );
}
