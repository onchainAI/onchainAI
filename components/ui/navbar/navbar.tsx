import ActionsButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/menu";

const Navbar = () => {
    return (<div
        className="
        sticky
        top-0
        z-50
        bg-background/80
        backdrop-blur-md
        border-b
        border-border
        h-20
        flex
        items-center
        ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="w-40">
                <Logo />
            </div>
            <div className="flex items-center gap-4">
                <NavigationMenuBar />
                <ActionsButtons />
            </div>
        </div>
    </div>);
}

export default Navbar;