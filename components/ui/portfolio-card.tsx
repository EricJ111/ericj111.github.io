import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  title?: string;
  description?: string;
  className?: string;
};

const PotfolioCard: React.FC<Props> = ({
  href,
  title,
  description,
  className,
}) => {
  return (
    <Card
      className={cn(
        className,
        "hover:bg-accent hover:text-accent-foreground hover:cursor-pointer"
      )}
    >
      <Link href={href || ""} target="_blank">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
            <ArrowUpRight className="ml-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
};
PotfolioCard.displayName = "PotfolioCard";

export { PotfolioCard };
