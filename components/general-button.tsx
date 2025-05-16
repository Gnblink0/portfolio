interface GeneralButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GeneralButton = ({
  children,
  className,
  onClick,
}: GeneralButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` ${className} px-3 md:px-6 py-3 text-xs md:text-sm font-bold rounded-3xl `}
    >
      {children}
    </button>
  );
};

export default GeneralButton;
