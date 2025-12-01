import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SecondSection = () => {
    return (
        <div className="py-20 lg:py-32">
            <div className="w-full bg-secondary/30 rounded-3xl lg:rounded-[3rem] overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="lg:w-1/2 p-8 lg:p-12">
                        <Image src='/world.svg' alt="image" width={1920} height={1080} className="object-cover rounded-2xl w-full shadow-lg" />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 lg:pl-0">
                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">onchainAI</h2>
                            <p className="text-lg lg:text-2xl text-muted-foreground">
                                Streamline AI with blockchain primitives
                            </p>
                            <div className="space-y-6 pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <Check className="text-xl text-primary" />
                                    </div>
                                    <span className="text-lg text-foreground/80">Cryptographically store & retrieve vector embeddings on blockchain, ensuring data integrity for AI</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <Check className="text-xl text-primary" />
                                    </div>
                                    <span className="text-lg text-foreground/80">Curate, explore & own data as dynamic NFTs on blockchain, enabling data composability for AI</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <Check className="text-xl text-primary" />
                                    </div>
                                    <span className="text-lg text-foreground/80">Validate model data & response feedback through web3 signatures, empowering Gig economy for AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;