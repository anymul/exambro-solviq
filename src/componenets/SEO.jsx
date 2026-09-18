// components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
    title = "SolvIQ India | Building the Intelligence Layer for Student Evaluation", 
    description = "SolvIQ builds AI-powered tools that make learning measurable, exam preparation precise, and outcomes predictable. Stop guessing. Start engineering your success.", 
    keywords = "SolvIQ, AI educational tools, student evaluation, exam preparation, learning analytics, EdTech India, CoachOne, PrepOne", 
    canonicalUrl = "https://solviq.in/", 
    ogImage = "https://solviq.in/social-banner.jpg",
    ogType = "website",
    schema = null,
    author = "SolvIQ India Pvt. Ltd.",
    robots = "index, follow"
}) {
    const siteName = "SolvIQ India";
    const schemas = Array.isArray(schema) ? schema.filter(Boolean) : (schema ? [schema] : []);

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />
            <meta name="googlebot" content={robots} />

            {/* Canonical Link */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}

            {/* Schema.org JSON-LD Structured Data */}
            {schemas.map((s, idx) => (
                <script key={`schema-${idx}`} type="application/ld+json">
                    {JSON.stringify(s)}
                </script>
            ))}
        </Helmet>
    );
}