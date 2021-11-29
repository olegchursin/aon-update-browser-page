const Navbar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <nav>
      <h3>{title}</h3>
    </nav>
  );
};

export default Navbar;
