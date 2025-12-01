import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground">
                    &copy; 2023 onchainAI.io. All rights reserved.
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="https://linkedin.com/company/onchainai" target="_blank">
                        <div className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                            <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                    </Link>

                </div>
            </div>
        </footer>);
}

export default Footer;