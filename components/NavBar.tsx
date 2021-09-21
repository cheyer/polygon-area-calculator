interface INavBarProps {
  text: string;
}

const NavBar: React.FC<INavBarProps> = ({ text }) => {
  return (
    <header className="bg-purple-700 text-white shadow px-6 py-3 ">
      <h1 className="font-medium text-xl">{text}</h1>
    </header>
  );
};

export default NavBar;
