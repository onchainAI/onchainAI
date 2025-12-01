import { Button } from "@/components/ui/button";
import Link from "next/link";

const FirstSection = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground pt-10">
                    web3 rails for GenAI
                </h1>
                <p className="text-xl xl:text-2xl font-light text-muted-foreground mt-6 max-w-2xl">
                    Envision Responsible AI through Blockchain
                </p>
                <div className="flex gap-4 py-10">
                    <Link href="/">
                        <Button className="text-lg xl:text-xl font-medium rounded-full py-6 px-10 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:scale-105">
                            Launching Soon
                        </Button>
                    </Link>
                </div>
                <div className="mt-10 w-full max-w-5xl">
                    <video className="rounded-3xl shadow-2xl border border-border w-full" autoPlay muted loop playsInline>
                        <source src="/videos/pexels-google-deepmind.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>);
}

export default FirstSection;