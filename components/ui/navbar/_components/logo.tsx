import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (<div>
        <Link href={"/"}>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                onchainAI
            </span>
        </Link>
    </div>);
}

export default Logo;