import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Globe, Search, Share2 } from "lucide-react";

const SemanticWeb3Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Semantic web3
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Upgrade your dApps from simple keyword matching to deep semantic understanding using on-chain vector embeddings.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25">
                                Explore Graph
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Search className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
                                <p className="text-muted-foreground">Enable users to search NFT marketplaces and DAOs using natural language queries instead of exact token IDs.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <BrainCircuit className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Contextual Data</h3>
                                <p className="text-muted-foreground">Link disparate on-chain data points through semantic relationships, creating a knowledge graph of the blockchain.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Share2 className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Interoperability</h3>
                                <p className="text-muted-foreground">Standardized semantic layers allow dApps to understand and utilize data from other protocols automatically.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visualization Section */}
                <section className="py-20 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Globe className="w-24 h-24 text-primary mx-auto mb-8 opacity-50" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">The Semantic Layer</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We are building the semantic layer for the decentralized web, where data is not just stored, but understood.
                        </p>
                    </div>
                </section>
            </main>
            <BottomSection />
            <Footer />
        </div>
    );
}

export default SemanticWeb3Page;
