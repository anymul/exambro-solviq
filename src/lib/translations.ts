
export type Language = 'en' | 'hi';

export const translations = {
    en: {
        nav: {
            features: "Features",
            benefits: "For Students",
            about: "About Us",
            testimonials: "Reviews",
            faq: "FAQ",
            contact: "Contact",
            login: "Login",
            download: "Download App"
        },
        hero: {
            badge: "For Bihar Board Class 10 & 12 Students",
            title_start: "Prep",
            title_middle: "Earlier",
            title_middle_2: "Prep",
            title_end: "Better",
            description: "Practice, track progress, and conquer exams with confidence. PrepOne makes learning stress-free.",
            cta_primary: "Download App",
            cta_secondary: "Learn More",
            mock_test: "Mock Test",
            mock_title: "Science - Physics",
            mock_question: "Which of the following is the unit of electric current?",
            mock_options: {
                A: "Volt (V)",
                B: "Ampere (A)",
                C: "Ohm (Ω)",
                D: "Watt (W)"
            },
            mock_badge_title: "Accuracy",
            mock_badge_value: "94%"
        },
        features: {
            title: "Everything You Need to Excel",
            description: "PrepOne provides all the tools Bihar Board students need for effective exam preparation.",
            cards: [
                {
                    title: "Chapter-wise Practice",
                    description: "Master concepts with targeted questions from each chapter. Perfect for focused revision and concept strengthening."
                },
                {
                    title: "Full Syllabus Tests",
                    description: "Simulate real exam experience with comprehensive tests based on the latest Bihar Board patterns."
                },
                {
                    title: "Performance Insights",
                    description: "Track your progress with detailed analytics that pinpoint strengths and areas needing improvement."
                },
                {
                    title: "Latest Exam Patterns",
                    description: "Always updated with the most current Bihar Board exam patterns to ensure relevant preparation."
                },
                {
                    title: "Achievement System",
                    description: "Stay motivated with badges and rewards as you complete practice tests and improve scores."
                },
                {
                    title: "Smart Recommendations",
                    description: "Get personalized suggestions on what to study next based on your performance data."
                }
            ]
        },
        // ... I will add other sections iteratively if needed, but for now I'll include the main ones to prevent compilation errors if I use them immediately.
        benefits: {
            title: "Why Students Love PrepOne",
            description: "PrepOne transforms how Bihar Board students prepare for their exams, making the process more effective and less stressful.",
            class10: {
                title: "Class 10 Special",
                subtitle: "Science • Math • Social Studies • English • Hindi"
            },
            class12: {
                title: "Class 12 Advanced",
                subtitle: "Science • Commerce • Arts Streams"
            },
            items_1: [
                "Stress-Free Learning",
                "Data-Driven Progress",
                "Exam-Focused Content"
            ]
        },
        footer: {
            tagline: "Your Exam Companion",
            description: "Making exam preparation smarter and stress-free for Bihar Board students.",
            quick_links: "Quick Links",
            contact: "Contact",
            address: "Patna, Bihar, India",
            rights: "All rights reserved."
        }
    },
    hi: {
        nav: {
            features: "विशेषताएँ",
            benefits: "छात्रों के लिए",
            about: "हमारे बारे में",
            testimonials: "समीक्षाएं",
            faq: "सवालों के जवाब",
            contact: "संपर्क करें",
            login: "लॉग इन",
            download: "ऐप डाउनलोड करें"
        },
        hero: {
            badge: "बिहार बोर्ड कक्षा 10 और 12 के छात्रों के लिए",
            title_start: "तैयारी",
            title_middle: "जल्दी",
            title_middle_2: "तैयारी",
            title_end: "बेहतर",
            description: "अभ्यास करें, प्रगति ट्रैक करें और आत्मविश्वास के साथ परीक्षा जीतें। PrepOne सीखने को तनाव मुक्त बनाता है।",
            cta_primary: "ऐप डाउनलोड करें",
            cta_secondary: "और जानें",
            mock_test: "मॉक टेस्ट",
            mock_title: "विज्ञान - भौतिकी",
            mock_question: "विद्युत धारा का मात्रक निम्नलिखित में से कौन है?",
            mock_options: {
                A: "वोल्ट (V)",
                B: "एम्पीयर (A)",
                C: "ओम (Ω)",
                D: "वाट (W)"
            },
            mock_badge_title: "सटीकता",
            mock_badge_value: "94%"
        },
        features: {
            title: "सफलता के लिए सब कुछ",
            description: "PrepOne बिहार बोर्ड के छात्रों को प्रभावी परीक्षा तैयारी के लिए आवश्यक सभी उपकरण प्रदान करता है।",
            cards: [
                {
                    title: "अध्याय-वार अभ्यास",
                    description: "प्रत्येक अध्याय के लक्षित प्रश्नों के साथ अवधारणाओं में महारत हासिल करें। केंद्रित संशोधन के लिए बिल्कुल सही।"
                },
                {
                    title: "पूर्ण पाठ्यक्रम टेस्ट",
                    description: "नवीनतम बिहार बोर्ड पैटर्न पर आधारित व्यापक परीक्षणों के साथ वास्तविक परीक्षा अनुभव का अनुकरण करें।"
                },
                {
                    title: "प्रदर्शन अंतर्दृष्टि",
                    description: "विस्तृत विश्लेषण के साथ अपनी प्रगति को ट्रैक करें जो आपकी ताकत और सुधार के क्षेत्रों को इंगित करता है।"
                },
                {
                    title: "नवीनतम परीक्षा पैटर्न",
                    description: "प्रासंगिक तैयारी सुनिश्चित करने के लिए हमेशा नवीनतम बिहार बोर्ड परीक्षा पैटर्न के साथ अपडेट किया जाता है।"
                },
                {
                    title: "उपलब्धि प्रणाली",
                    description: "बैज और पुरस्कारों के साथ प्रेरित रहें क्योंकि आप अभ्यास परीक्षण पूरा करते हैं और स्कोर में सुधार करते हैं।"
                },
                {
                    title: "स्मार्ट सिफारिशें",
                    description: "अपने प्रदर्शन डेटा के आधार पर आगे क्या अध्ययन करना है, इस पर व्यक्तिगत सुझाव प्राप्त करें।"
                }
            ]
        },
        benefits: {
            title: "छात्र PrepOne को क्यों पसंद करते हैं",
            description: "PrepOne बिहार बोर्ड के छात्रों की परीक्षा की तैयारी के तरीके को बदल देता है, जिससे प्रक्रिया अधिक प्रभावी और कम तनावपूर्ण हो जाती है।",
            class10: {
                title: "कक्षा 10 स्पेशल",
                subtitle: "विज्ञान • गणित • सामाजिक अध्ययन • अंग्रेजी • हिंदी"
            },
            class12: {
                title: "कक्षा 12 एडवांस्ड",
                subtitle: "विज्ञान • वाणिज्य • कला संकाय"
            },
            items_1: [
                "तनाव मुक्त सीखना",
                "डेटा-संचालित प्रगति",
                "परीक्षा-केंद्रित सामग्री"
            ]
        },
        footer: {
            tagline: "आपका परीक्षा साथी",
            description: "बिहार बोर्ड के छात्रों के लिए परीक्षा की तैयारी को स्मार्ट और तनाव मुक्त बनाना।",
            quick_links: "महत्वपूर्ण लिंक",
            contact: "संपर्क",
            address: "पटना, बिहार, भारत",
            rights: "सर्वाधिकार सुरक्षित।"
        }
    }
};
