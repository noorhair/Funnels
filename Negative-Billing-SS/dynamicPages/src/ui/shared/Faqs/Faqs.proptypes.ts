export type FaqsProps = {
    faqs: Array<{
        question: string;
        response: React.ReactNode | React.ReactNode[];
    }>;
    links: Array<string>;
    linksMobile?: Array<string>;
    faqsLabel: string;
    linksLabel: string;
}