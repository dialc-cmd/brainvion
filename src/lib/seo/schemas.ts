type SchemaContext = 'https://schema.org';

export const generateOrganizationSchema = () => {
    return {
        '@context': 'https://schema.org' as SchemaContext,
        '@type': 'Organization',
        name: 'BrainVION',
        url: 'https://brainvion.com',
        logo: 'https://brainvion.com/logo.png', // Update with actual logo URL
        description: 'A student tech community connecting learners, developers, and future innovators.',
        sameAs: [
            'https://github.com/dialc-cmd/brainvion',
            // Add social links here
        ],
    };
};

export const generateWebSiteSchema = () => {
    return {
        '@context': 'https://schema.org' as SchemaContext,
        '@type': 'WebSite',
        name: 'BrainVION Global Network',
        url: 'https://brainvion.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://brainvion.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    };
};

export const generateArticleSchema = (
    title: string,
    description: string,
    url: string,
    datePublished: string,
    authorName: string = 'BrainVION Team'
) => {
    return {
        '@context': 'https://schema.org' as SchemaContext,
        '@type': 'Article',
        headline: title,
        description: description,
        url: url,
        datePublished: datePublished,
        author: {
            '@type': 'Organization',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: 'BrainVION',
            logo: {
                '@type': 'ImageObject',
                url: 'https://brainvion.com/logo.png',
            },
        },
    };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
    return {
        '@context': 'https://schema.org' as SchemaContext,
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
};
