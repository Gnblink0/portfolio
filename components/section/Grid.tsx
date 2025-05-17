import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  InputIcon,
  KeyboardIcon,
} from "@radix-ui/react-icons";
import { IconCloudComponent } from "../IconCloud";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-span-2",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    Icon: KeyboardIcon,
    name: "Tech Enthusiast",
  description: "I love to learn new things.",
    href: "#tech-stack",
    cta: "My Tech Stack",
    background: (
      <div className="absolute -right-5 -top-20 opacity-60">
        <IconCloudComponent />
      </div>
    ),
    className: "md:col-span-1 md:row-span-2",
  },
  {
    Icon: CalendarIcon,
    className: "md:col-span-1",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-span-2 md:row-span-1",
  },
];

export function Grid() {
  return (
    <div className="m-4 md:my-24">
      <BentoGrid className="relative">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
