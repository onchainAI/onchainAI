import Image from "next/image";
import Link from "next/link";

const BottomSection = () => {
    return (
        <div className="py-20 border-t border-border">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col space-y-6">
                    <h3 className="font-semibold text-lg text-foreground">Products</h3>
                    <div className="flex flex-col space-y-3 text-muted-foreground">
                        <Link href="/products/onchain-llms" className="hover:text-primary transition-colors">onChain LLMs</Link>
                        <Link href="/products/onchain-vectordb" className="hover:text-primary transition-colors">onChain VectorDB</Link>
                        <Link href="/products/onchain-embeddings" className="hover:text-primary transition-colors">onChain Embeddings</Link>
                        <Link href="/products/onchain-datasets" className="hover:text-primary transition-colors">onChain Datasets</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <h3 className="font-semibold text-lg text-foreground">Use Cases</h3>
                    <div className="flex flex-col space-y-3 text-muted-foreground">
                        <Link href="/use-cases/chatbot-dapps" className="hover:text-primary transition-colors">Chatbot dApps</Link>
                        <Link href="/use-cases/semantic-web3" className="hover:text-primary transition-colors">Semantic web3</Link>
                        <Link href="/use-cases/oracle-agents" className="hover:text-primary transition-colors">Oracle Agents</Link>
                        <Link href="/use-cases/knowledge-nfts" className="hover:text-primary transition-colors">Knowledge NFTs</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <Link href={"/"}>
                        <Image
                            src="/process.svg"
                            alt="AI"
                            width={600}
                            height={200}
                            className="w-64 opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default BottomSection;