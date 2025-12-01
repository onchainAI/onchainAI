import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import { Button } from "@/components/ui/button";
import { Bot, Lock, MessageSquare, Zap } from "lucide-react";

const ChatbotDappsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Chatbot dApps
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Build decentralized conversational AI interfaces that respect user privacy and operate without centralized gatekeepers.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25">
                                Build a Bot
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
                                    <Lock className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Private Conversations</h3>
                                <p className="text-muted-foreground">End-to-end encrypted chat history stored on decentralized storage, accessible only by the user's wallet.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Bot className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Uncensored AI</h3>
                                <p className="text-muted-foreground">Access open-source models that run on a permissionless network, ensuring no topic is off-limits.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Token Gating</h3>
                                <p className="text-muted-foreground">Monetize your specialized chatbots by requiring token holdings or streaming payments for access.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="py-20 bg-secondary/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Seamless Integration</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Embed our React components directly into your dApp to add conversational capabilities in minutes.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <MessageSquare className="w-5 h-5 text-primary" />
                                        <span>Pre-built UI components</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <MessageSquare className="w-5 h-5 text-primary" />
                                        <span>Wallet-based authentication</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <MessageSquare className="w-5 h-5 text-primary" />
                                        <span>Customizable themes</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg">
                                <pre className="text-sm font-mono overflow-x-auto">
                                    <code className="text-foreground">
                                        {`import { ChatWindow } from '@onchainai/react';

function App() {
  return (
    <ChatWindow 
      model="llama-3-70b"
      contractAddress="0x123..."
      theme="dark"
    />
  );
}`}
                                    </code>
                                </pre>
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

export default ChatbotDappsPage;
