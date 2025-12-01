import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import { Button } from "@/components/ui/button";
import { Database, Lock, Network, Search } from "lucide-react";

const OnChainVectorDBPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                            onChain VectorDB
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            A high-performance vector database built on-chain for secure and immutable storage of high-dimensional vector embeddings.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25">
                                Deploy Database
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-6 rounded-2xl bg-card border border-border">
                                <Database className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-lg font-bold mb-2">Immutable Storage</h3>
                                <p className="text-sm text-muted-foreground">Vectors are stored on decentralized storage networks (IPFS/Arweave) with on-chain references.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border">
                                <Search className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-lg font-bold mb-2">Similarity Search</h3>
                                <p className="text-sm text-muted-foreground">Perform cosine similarity and euclidean distance searches directly via smart contracts.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border">
                                <Lock className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-lg font-bold mb-2">Access Control</h3>
                                <p className="text-sm text-muted-foreground">Token-gated access to vector collections using standard ERC-20 or ERC-721 tokens.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border">
                                <Network className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-lg font-bold mb-2">Interoperable</h3>
                                <p className="text-sm text-muted-foreground">Compatible with all major EVM chains and Layer 2 scaling solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Specs */}
                <section className="py-20 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:flex lg:items-center lg:gap-16">
                            <div className="lg:w-1/2 mb-10 lg:mb-0">
                                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Performance & Scale</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Our vector database is optimized for the unique constraints of blockchain environments, utilizing off-chain indexing with on-chain verification to achieve high throughput and low latency.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span>Sub-second query latency for cached indexes</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span>Support for billion-scale vector datasets</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span>Automatic sharding across decentralized nodes</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
                                    <h3 className="text-xl font-bold mb-6 border-b border-border pb-4">Benchmark Results</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between mb-2 text-sm font-medium">
                                                <span>Query Speed (1M vectors)</span>
                                                <span>12ms</span>
                                            </div>
                                            <div className="w-full bg-secondary rounded-full h-2">
                                                <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2 text-sm font-medium">
                                                <span>Indexing Rate</span>
                                                <span>50k/sec</span>
                                            </div>
                                            <div className="w-full bg-secondary rounded-full h-2">
                                                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2 text-sm font-medium">
                                                <span>Recall @ 10</span>
                                                <span>0.99</span>
                                            </div>
                                            <div className="w-full bg-secondary rounded-full h-2">
                                                <div className="bg-primary h-2 rounded-full" style={{ width: '99%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default OnChainVectorDBPage;
