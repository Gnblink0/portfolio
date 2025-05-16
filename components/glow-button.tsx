import GeneralButton from "./general-button";
interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlowButton = ({ children, className, onClick }: GlowButtonProps) => {
  return (
    <GeneralButton
      onClick={onClick}
      className={` bg-white text-black transition-all
        shadow-[0_0_20px_rgba(255,255,255,0.3)]
        hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
        cursor-pointer ${className} `}
    >
      {children}
    </GeneralButton>
  );
};

export default GlowButton;