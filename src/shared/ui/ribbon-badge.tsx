interface RibbonBadgeProps {
  label: string;
}

export const RibbonBadge: React.FC<RibbonBadgeProps> = ({ label }) => {
  return (
    <div className="relative inline-block overflow-hidden rounded-xs self-start">
      <div className="pl-5 pr-[27px] h-[36px] flex items-center justify-center">
        <svg
          className="w-full h-full absolute top-0 left-0 z-0"
          viewBox="0 0 77 36"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H73.3837C75.5547 0 77.0069 2.23455 76.1251 4.21842L70 18L76.1251 31.7816C77.0069 33.7654 75.5547 36 73.3837 36H0V0Z"
            fill="#ED685C"
          />
        </svg>
        <span className="relative z-10 text-xs font-[600] text-white">
          {label}
        </span>
      </div>
    </div>
  );
};
