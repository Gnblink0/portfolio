import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description?: string;
  href?: string;
  cta?: string;
  contentTop?: boolean;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 auto-rows-[18rem] md:auto-rows-[15rem] md:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  contentTop,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      `group relative col-span-3 flex flex-col overflow-hidden
      rounded-xl`,
      contentTop ? "justify-start" : "justify-between",
      // dark styles
      `transform-gpu bg-card border border-border-light`,
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div
      className={cn(
        "pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300",
        contentTop
          ? "order-first group-hover:translate-y-0"
          : "group-hover:-translate-y-10",
      )}
    >
      {Icon && (
        <Icon
          className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300
            ease-in-out group-hover:scale-75"
        />
      )}
      {/* only show the name and button if the first letter of the name is uppercase */}
      {name[0] === name[0].toUpperCase() && (
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
      )}
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    {name !== "Lover of Many Things" && name !== "contact" && (
      <div
        className={cn(
          `pointer-events-none absolute flex w-full transform-gpu
          flex-row items-center p-4 opacity-0 transition-all duration-300
          group-hover:opacity-100`,
          contentTop
            ? "top-0 -translate-y-10 group-hover:translate-y-0"
            : "bottom-0 translate-y-10 group-hover:translate-y-0",
        )}
      >
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    )}
    <div
      className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300
      group-hover:bg-neutral-800/10"
    />
  </div>
);

export { BentoCard, BentoGrid };
