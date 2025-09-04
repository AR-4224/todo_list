import Logo from "./logo";

function Header(){
    return(
    <div className="!fixed top-2 left-[250px] flex items-center sm:relative sm:justify-start max-w-md:relative max-w-md:w-full">
        <Logo fillColor="var(--color-Groove)" />
        <h1 className="flex items-center justify-start gap-[12px]  text-Groove text-5xl font-bold">
            TODO List
        </h1>
    </div> 
    );
}
export default Header;