import Logo from "./logo";

function Header() {
  return (
    <header
      className="fixed w-full flex items-center
        sm:justify-start sm:top-3 sm:left-7 sm:w-auto"
    >
      <Logo fillColor="var(--color-Groove)" />
      <h1 className="flex items-center justify-start gap-[12px]  text-Groove text-5xl font-bold">
        TODO List
      </h1>
    </header>
  );
}
export default Header;
