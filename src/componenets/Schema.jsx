// components/Schema.jsx

/**
 * Reusable JSON-LD schema helper components for Schema.org compliance.
 */

export const SOLVIQ_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://solviq.in/#organization",
  "name": "SolvIQ India",
  "legalName": "SolvIQ India Pvt. Ltd.",
  "url": "https://solviq.in",
  "logo": {
    "@type": "ImageObject",
    "url": "https://solviq.in/social-banner.jpg",
    "width": "1200",
    "height": "630"
  },
  "image": "https://solviq.in/social-banner.jpg",
  "description": "SolvIQ builds AI-powered tools that make learning measurable, exam preparation precise, and outcomes predictable for CBSE, Bihar Board students and coaching institutes.",
  "founder": {
    "@type": "Person",
    "name": "Anmol Kumar",
    "jobTitle": "Founder & CEO",
    "alumniOf": "IIT Gandhinagar",
    "sameAs": "https://www.linkedin.com/in/anmolkumariitgn/"
  },
  "foundingLocation": {
    "@type": "Place",
    "name": "IIT Gandhinagar, Gujarat, India"
  },
  "sameAs": [
    "https://www.linkedin.com/in/anmolkumariitgn/",
    "https://play.google.com/store/apps/details?id=com.solviq.prepone"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://solviq.in/about"
  }
};

export const SOLVIQ_WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://solviq.in/#website",
  "url": "https://solviq.in/",
  "name": "SolvIQ India",
  "description": "Building the Intelligence Layer for Student Evaluation and Institute Management",
  "publisher": {
    "@id": "https://solviq.in/#organization"
  }
};

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://solviq.in${item.url}`
    }))
  };
}

export function buildFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q || faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a || faq.answer
      }
    }))
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName = "PrepOne Academic Team",
  category
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": title,
    "description": description,
    "image": imageUrl ? [imageUrl] : ["https://solviq.in/social-banner.jpg"],
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": SOLVIQ_ORGANIZATION_SCHEMA,
    "articleSection": category
  };
}

export function buildPrepOneAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PrepOne",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Android, Web",
    "url": "https://solviq.in/prepone",
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.solviq.prepone",
    "image": "https://solviq.in/social-banner.jpg",
    "description": "PrepOne is an AI-powered board exam strategist app for CBSE and Bihar Board Class 10 & 12 students. Features Abhyas+ adaptive practice, 60-second AutoScore AI handwritten answer grading, and Spaced Repetition flashcards.",
    "author": SOLVIQ_ORGANIZATION_SCHEMA,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Starter",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Free download with chapter PYQs, basic mock tests, and daily Abhyas+ targets."
      },
      {
        "@type": "Offer",
        "name": "PrepOne Plus / Premium (CBSE & BSEB)",
        "price": "499",
        "priceCurrency": "INR",
        "description": "Unlimited AutoScore AI subjective answer grading, full mock test series, and personalized diagnostic scorecards."
      }
    ]
  };
}

export function buildCoachOneSaasSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CoachOne",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web (SaaS)",
    "url": "https://solviq.in/coachone",
    "image": "https://solviq.in/social-banner.jpg",
    "description": "CoachOne is an all-in-one software platform for coaching institutes in India. Integrates student management, AI handwritten copy checking with authentic step-marking, 50k+ question test maker, student mistake diagnostics, and automated WhatsApp parent reports.",
    "author": SOLVIQ_ORGANIZATION_SCHEMA,
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "999",
        "priceCurrency": "INR",
        "billingDuration": "P1M",
        "description": "For up to 75 students, 5 batches, 2 teachers/admins, unlimited MCQ tests & DPPs, ₹1.50/page AI handwritten evaluation."
      },
      {
        "@type": "Offer",
        "name": "Growth Plan",
        "price": "1999",
        "priceCurrency": "INR",
        "billingDuration": "P1M",
        "description": "For up to 200 students, 15 batches, 5 teachers/admins, WhatsApp parent reports, chapter analytics, AI test generation, ₹1.50/page AI evaluation."
      },
      {
        "@type": "Offer",
        "name": "Scale Plan",
        "price": "4499",
        "priceCurrency": "INR",
        "billingDuration": "P1M",
        "description": "For up to 500 students, unlimited batches, 15 teachers/admins, custom branding, multiple branches, advanced analytics, ₹1.50/page AI evaluation."
      },
      {
        "@type": "Offer",
        "name": "Enterprise Plan",
        "price": "Custom",
        "priceCurrency": "INR",
        "billingDuration": "P1M",
        "description": "For 500+ students, unlimited batches, custom admins, full API access, dedicated onboarding & support."
      }
    ]
  };
}
