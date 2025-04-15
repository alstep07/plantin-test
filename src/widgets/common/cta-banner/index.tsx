import Image from "next/image";
import { Logo } from "@/shared/icons";
import { Button } from "@/shared/ui";

export const CTABanner: React.FC = () => {
  return (
    <aside className="relative gradient-primary rounded-lg flex">
      <div className="md:max-w-[70%] flex flex-col gap-4 md:gap-6 p-4 md:p-6">
        <Logo />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-[800] md:font-[600] text-primary-400">
            Get unlimited access to exclusive articles
          </h3>
          <p className="text-md md:text-lg">
            Get rid of limits and read everything you wish
          </p>
        </div>
        <div className="md:self-start flex flex-col gap-4 md:gap-6">
          <Button>Try For Free</Button>
        </div>
      </div>
      <div className="hidden md:block absolute -right-[15px] -top-[9px] w-[336px] max-w-[35%] aspect-[1.29]">
        <Image
          src="/common/cta_image.png"
          alt="CTA Banner"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 will-change-transform"
          quality={75}
        />
      </div>
    </aside>
  );
};
