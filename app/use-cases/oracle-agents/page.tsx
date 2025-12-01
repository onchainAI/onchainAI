import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import { Button } from "@/components/ui/button";
import { Activity, Bot, Eye, ShieldCheck } from "lucide-react";

const OracleAgentsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Oracle Agents
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Autonomous AI agents that bridge the gap between real-world data and smart contracts with cryptographic verification.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25">
                                Deploy Agent
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
                                    <Activity className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Automated Actions</h3>
                                <p className="text-muted-foreground">Agents monitor off-chain events (news, prices, weather) and trigger on-chain transactions based on predefined logic.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Eye className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Real-world Data</h3>
                                <p className="text-muted-foreground">Fetch and verify data from any API or web source, making it available to your smart contracts securely.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Trustless Execution</h3>
                                <p className="text-muted-foreground">Agent logic is verifiable on-chain, ensuring that they behave exactly as programmed without human intervention.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Example Section */}
                <section className="py-20 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center">
                            <Bot className="w-16 h-16 text-primary mb-6" />
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Example: Prediction Market Agent</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl text-center">
                                An Oracle Agent monitors sports results from multiple trusted APIs. When a game ends, it automatically resolves the corresponding prediction market on-chain, distributing payouts to winners instantly.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <BottomSection />
            <Footer />
        </div>
    );
}

export default OracleAgentsPage;
