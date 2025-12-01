import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Check, Layers, Zap } from "lucide-react";

const OnChainEmbeddingsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                            onChain Embeddings
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Generate and store vector embeddings directly on the blockchain, enabling seamless integration with smart contracts and dApps.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25">
                                Get API Key
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Models Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Supported Models</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Choose from state-of-the-art embedding models</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { name: "OpenAI text-embedding-3", dim: 1536, desc: "High performance general purpose embeddings" },
                                { name: "Cohere Embed v3", dim: 1024, desc: "Optimized for retrieval and reranking tasks" },
                                { name: "HuggingFace TEI", dim: 768, desc: "Open source models running on decentralized nodes" }
                            ].map((model, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group">
                                    <div className="flex justify-between items-start mb-4">
                                        <Layers className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <span className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">{model.dim} dim</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                                    <p className="text-muted-foreground mb-6">{model.desc}</p>
                                    <div className="flex items-center text-primary font-medium cursor-pointer">
                                        View Specs <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full" />
                                <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                                            <Box className="w-6 h-6 text-primary" />
                                            <div className="font-mono text-sm">Input: "Blockchain AI"</div>
                                        </div>
                                        <div className="flex justify-center">
                                            <Zap className="w-6 h-6 text-muted-foreground animate-pulse" />
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                                            <Layers className="w-6 h-6 text-green-500" />
                                            <div className="font-mono text-sm break-all text-xs text-muted-foreground">
                                                [0.023, -0.154, 0.882, ...]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Seamless Generation</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our decentralized oracle network handles the computation heavy-lifting. You simply send text to our smart contract, and receive the vector embedding in a callback.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Batch Processing</h4>
                                            <p className="text-muted-foreground text-sm">Generate embeddings for thousands of documents in a single transaction.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Cross-Chain Availability</h4>
                                            <p className="text-muted-foreground text-sm">Access embeddings on Ethereum, Polygon, Arbitrum, and Optimism.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BottomSection />
            <Footer />
        </div>
    );
}

export default OnChainEmbeddingsPage;
