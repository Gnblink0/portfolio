import { IconCloud } from "@/components/ui/icon-cloud";

import { techStacks } from "@/data";

export function IconCloudComponent() {
  const images = techStacks.map(
    (techStack) => `https://cdn.simpleicons.org/${techStack.slug}/white`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
