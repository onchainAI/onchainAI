'use client'

import React, { useState } from "react";

import {
    AlignJustify,
    BarChart,
    Building2,
    Camera,
    ChevronDown,
    Code,
    Code2Icon,
    DollarSign,
    Download,
    GraduationCap,
    Headphones,
    Home,
    Info,
    LibrarySquare,
    LifeBuoy,
    Lock,
    Newspaper,
    PaintBucket,
    Settings,
    Smile,
    Sparkles,
    UserCircle2,
    UserPlus
} from 'lucide-react'
import ContentMenu from "./content-menu";

interface MenuItem {
    title: string
    menu: string
    options: { label: string, emoji: React.ReactElement, href: string }[]
}

const items: MenuItem[] = [
    {
        title: "Products",
        menu: "products",
        options: [
            { label: 'onChain LLMs', emoji: <LibrarySquare className='text-red-500' />, href: '/products/onchain-llms' },
            { label: 'onChain VectorDB', emoji: <Download className='text-green-500' />, href: '/products/onchain-vectordb' },
            { label: 'onChain Embeddings', emoji: <Code2Icon className='text-amber-500' />, href: '/products/onchain-embeddings' },
            { label: 'onChain Datasets', emoji: <LifeBuoy className='text-blue-500' />, href: '/products/onchain-datasets' },
        ],
    },
    {
        title: "Use Cases",
        menu: "use-cases",
        options: [
            { label: 'Chatbot dApps', emoji: <UserCircle2 className='text-red-500' />, href: '/use-cases/chatbot-dapps' },
            { label: 'Semantic web3', emoji: <Info className='text-green-500' />, href: '/use-cases/semantic-web3' },
            { label: 'Oracle Agents', emoji: <Sparkles className='text-amber-500' />, href: '/use-cases/oracle-agents' },
            { label: 'Knowledge NFTs', emoji: <Newspaper className='text-blue-500' />, href: '/use-cases/knowledge-nfts' },
        ],
    },
];

export function NavigationMenuBar() {

    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setActiveMenu(menu);
    }

    const handleMouseLeave = () => {
        setActiveMenu(null);
    }

    const renderMenu = (item: MenuItem) => {
        const { title, menu, options } = item;
        return (
            <div
                className='flex items-center relative'
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}>
                <div className='flex items-center'>
                    <div className='w-24'>
                        {title}
                    </div>
                    <div>
                        <ChevronDown className='relative top-[1px] h-3 w-3' />
                    </div>
                    <div className='mt-20'>
                        {activeMenu === menu && (
                            <ContentMenu
                                options={options.map((option, index) => (
                                    {
                                        ...option,
                                        href: option.href,
                                    }
                                ))}
                            />
                        )}
                    </div>
                </div>
            </div>);
    }

    return (
        <div className='hidden text-md font-light space-x-4 w-full items-center xl:flex h-24'>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className='cursor-pointer hidden xl:block'>
                        {renderMenu(item)}
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}