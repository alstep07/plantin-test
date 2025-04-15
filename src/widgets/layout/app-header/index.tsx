import { AppHeaderDesktop } from "./desktop";
import { AppHeaderMobile } from "./mobile";
export const AppHeader: React.FC = () => {
  return (
    <>
      <AppHeaderDesktop />
      <AppHeaderMobile />
    </>
  );
};
