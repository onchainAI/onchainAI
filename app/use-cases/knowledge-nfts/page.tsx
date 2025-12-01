import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import { Button } from "@/components/ui/button";
import { Copyright, FileKey, Gem, Key } from "lucide-react";

const KnowledgeNFTsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Knowledge NFTs
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Tokenize intellectual property, datasets, and AI models as NFTs to enable fractional ownership, licensing, and royalty streams.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25">
                                Mint Knowledge
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
                                    <Copyright className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">IP Ownership</h3>
                                <p className="text-muted-foreground">Prove ownership of your data or model on the blockchain. Transfer or sell rights seamlessly.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Gem className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Monetization</h3>
                                <p className="text-muted-foreground">Embed royalty logic directly into the NFT. Earn every time your knowledge asset is queried or used.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Key className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Access Control</h3>
                                <p className="text-muted-foreground">Grant decryption keys only to NFT holders, ensuring that your high-value data remains private.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Case Section */}
                <section className="py-20 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <FileKey className="w-32 h-32 text-primary opacity-80" />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">For Researchers & Creators</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Publish your research papers, datasets, or fine-tuned models as Knowledge NFTs. Allow others to cite and build upon your work while ensuring you are fairly compensated for your contributions.
                                </p>
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

export default KnowledgeNFTsPage;
