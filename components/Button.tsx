interface IButtonProps {
  disabled?: boolean;
  onClick: () => void;
  text: string;
}

const Button: React.FC<IButtonProps> = ({ disabled, onClick, text }) => {
  const baseStyles =
    "rounded-md bg-purple-700 hover:bg-purple-900 text-white px-4 py-2 w-full md:w-auto";
  const styles = disabled
    ? `opacity-50 pointer-events-none ${baseStyles}`
    : baseStyles;

  return (
    <button className={styles} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
