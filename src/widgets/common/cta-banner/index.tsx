import { Logo } from "@/shared/icons";
import { Button } from "@/shared/ui";

export const CTABanner: React.FC = () => {
  return (
    <aside className="gradient-primary rounded-lg">
      <div className="flex flex-col gap-4 md:gap-6 p-4 md:p-6">
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
          <Button>Subscribe</Button>
        </div>
      </div>
    </aside>
  );
};
