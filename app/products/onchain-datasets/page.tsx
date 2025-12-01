import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import { Button } from "@/components/ui/button";
import { Coins, FileText, Globe, ShieldCheck } from "lucide-react";

const OnChainDatasetsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                            onChain Datasets
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Curate, share, and monetize datasets as dynamic NFTs, fostering a collaborative and transparent data economy for AI.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25">
                                Explore Marketplace
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Marketplace Features */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                                <Globe className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Global Access</h3>
                                <p className="text-muted-foreground mb-6">
                                    Datasets are stored on decentralized networks (IPFS/Filecoin) ensuring permanent, censorship-resistant access for researchers worldwide.
                                </p>
                            </div>
                            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                                <Coins className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Monetization</h3>
                                <p className="text-muted-foreground mb-6">
                                    Data owners earn royalties every time their dataset is used for model training or inference, enforced by smart contracts.
                                </p>
                            </div>
                            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                                <ShieldCheck className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Provenance</h3>
                                <p className="text-muted-foreground mb-6">
                                    Every data point is cryptographically signed, creating an immutable audit trail of origin and modifications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curation Section */}
                <section className="py-20 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Community Curation</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Upload", desc: "Contributors upload raw data", icon: <FileText className="w-6 h-6" /> },
                                { title: "Verify", desc: "Validators check data quality", icon: <ShieldCheck className="w-6 h-6" /> },
                                { title: "Vote", desc: "DAO votes on inclusion", icon: <Coins className="w-6 h-6" /> },
                                { title: "Reward", desc: "Contributors get paid", icon: <Globe className="w-6 h-6" /> }
                            ].map((step, i) => (
                                <div key={i} className="relative p-6 bg-background rounded-2xl border border-border">
                                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                                    {i < 3 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                            <div className="w-6 h-0.5 bg-border"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <BottomSection />
            <Footer />
        </div>
    );
}

export default OnChainDatasetsPage;
