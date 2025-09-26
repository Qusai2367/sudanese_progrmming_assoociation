import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import avatar4 from "../assets/avatar.jpg";
import avatar5 from "../assets/profile.png";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro6.jpg";
import pro4 from "../assets/pro4.gif";
import pro5 from "../assets/pro5.jpg";
export const providers = [
    {
        id: 1,
        name: "Ahmed Hassan",
        profilePicture: avatar1,
        serviceType: "Web Development",
        category: "web",
        rating: 4.9,
        totalReviews: 127,
        bio: "Full-stack developer with 5+ years of experience in React, Node.js, and modern web technologies. Passionate about creating scalable and user-friendly applications.",
        skills: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "TypeScript",
            "Next.js",
        ],
        certifications: [
            "AWS Certified Developer",
            "Google Cloud Professional",
            "React Developer Certification",
        ],
        projectsCompleted: 45,
        hourlyRate: "$75/hour",
        location: "Khartoum, Sudan",
        joinDate: "2022",
        portfolio: "https://ahmedhassan.dev",
        feedback: [
            {
                clientName: "Sarah Mohamed",
                rating: 5,
                comment:
                    "Ahmed delivered an excellent e-commerce platform. His attention to detail and communication throughout the project was outstanding.",
                date: "2024-01-15",
            },
            {
                clientName: "Omar Khalil",
                rating: 5,
                comment:
                    "Professional, reliable, and skilled developer. The website he built exceeded our expectations.",
                date: "2023-12-20",
            },
            {
                clientName: "Fatima Ali",
                rating: 4,
                comment:
                    "Good work overall, delivered on time. Would recommend for web development projects.",
                date: "2023-11-10",
            },
        ],
        projectPhotos: [pro1, pro2, pro3, pro4],
        specificQuestions: [
            "What's your preferred frontend framework? (React, Vue, Angular)",
            "Do you need SEO optimization included?",
            "Are you planning to integrate any third-party APIs?",
            "What's your preferred hosting solution?",
            "Do you need a content management system (CMS)?",
            "What's your target launch date?",
        ],
    },
    {
        id: 2,
        name: "Mariam Ibrahim",
        profilePicture: avatar2,
        serviceType: "UI/UX Design",
        category: "design",
        rating: 3,
        totalReviews: 89,
        bio: "Creative UI/UX designer with expertise in user-centered design and modern design systems. Specializing in mobile app design and web interfaces.",
        skills: [
            "Figma",
            "Adobe XD",
            "Sketch",
            "Prototyping",
            "User Research",
            "Design Systems",
        ],
        certifications: [
            "Google UX Design Certificate",
            "Adobe Certified Expert",
            "Figma Design Specialist",
        ],
        projectsCompleted: 32,
        hourlyRate: "$60/hour",
        location: "Khartoum, Sudan",
        joinDate: "2021",
        portfolio: "https://mariamdesigns.com",
        feedback: [
            {
                clientName: "Khalid Ahmed",
                rating: 5,
                comment:
                    "Mariam's design skills are exceptional. She created a beautiful and intuitive interface for our mobile app.",
                date: "2024-02-01",
            },
            {
                clientName: "Aisha Hassan",
                rating: 5,
                comment:
                    "Very creative and professional. The designs she delivered were exactly what we envisioned.",
                date: "2023-12-15",
            },
        ],
        projectPhotos: [pro1, pro3, pro4],
        specificQuestions: [
            "What's your target user age group?",
            "Do you have any accessibility requirements?",
            "What's your preferred design tool for collaboration?",
            "Are you looking for a specific design style (minimalist, bold, etc.)?",
            "Do you need mobile app design or web interface?",
            "What's your brand color palette preference?",
        ],
    },
    {
        id: 3,
        name: "Mohammed Ali",
        profilePicture: avatar3,
        serviceType: "Mobile Development",
        category: "mobile",
        rating: 4.7,
        totalReviews: 156,
        bio: "Mobile app developer specializing in React Native and Flutter. Experienced in building cross-platform applications for iOS and Android.",
        skills: [
            "React Native",
            "Flutter",
            "Swift",
            "Kotlin",
            "Firebase",
            "Redux",
        ],
        certifications: [
            "Google Flutter Certification",
            "Meta React Native Developer",
            "Apple Developer Certification",
        ],
        projectsCompleted: 28,
        hourlyRate: "$80/hour",
        location: "Khartoum, Sudan",
        joinDate: "2020",
        portfolio: "https://mohammedmobile.dev",
        feedback: [
            {
                clientName: "Hassan Osman",
                rating: 5,
                comment:
                    "Mohammed built an amazing mobile app for our business. Highly skilled and professional.",
                date: "2024-01-20",
            },
            {
                clientName: "Nour Abdel",
                rating: 4,
                comment:
                    "Great mobile developer, delivered the app on time with good quality.",
                date: "2023-11-25",
            },
        ],
        projectPhotos: [pro2, pro3, pro4],
        specificQuestions: [
            "Do you need offline functionality?",
            "What's your target app store release date?",
            "Do you need push notification setup?",
            "Are you planning to monetize the app (ads, purchases)?",
            "Do you need both iOS and Android versions?",
            "What's your preferred technology stack (React Native, Flutter)?",
        ],
    },
    {
        id: 4,
        name: "Aisha Mohamed",
        profilePicture: avatar4,
        serviceType: "Tech Solutions",
        category: "tech",
        rating: 4.9,
        totalReviews: 73,
        bio: "Senior software engineer with expertise in enterprise solutions, API development, and system integration. Focused on delivering scalable and maintainable code.",
        skills: [
            "Python",
            "Django",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
            "AWS",
        ],
        certifications: [
            "AWS Solutions Architect",
            "Python Institute Certification",
            "Docker Certified Associate",
        ],
        projectsCompleted: 38,
        hourlyRate: "$90/hour",
        location: "Khartoum, Sudan",
        joinDate: "2019",
        portfolio: "https://aishatech.com",
        feedback: [
            {
                clientName: "Yusuf Ibrahim",
                rating: 5,
                comment:
                    "Aisha's technical expertise is outstanding. She solved complex integration challenges efficiently.",
                date: "2024-01-10",
            },
            {
                clientName: "Rania Ahmed",
                rating: 5,
                comment:
                    "Excellent problem-solving skills and very knowledgeable in backend technologies.",
                date: "2023-12-30",
            },
        ],
        projectPhotos: [pro1, pro2, pro3, pro5],
        specificQuestions: [
            "What's your current infrastructure setup?",
            "Do you need help with cloud migration?",
            "Are you experiencing any specific performance issues?",
            "What's your preferred technology stack for the solution?",
            "Do you need API development and integration?",
            "What's your scalability requirements?",
        ],
    },
    {
        id: 5,
        name: "Omar Khalil",
        profilePicture: avatar4,
        serviceType: "Web Design",
        category: "web",
        rating: 4.6,
        totalReviews: 94,
        bio: "Frontend developer and web designer with a passion for creating beautiful, responsive websites. Expert in modern CSS frameworks and JavaScript.",
        skills: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Bootstrap", "Sass"],
        certifications: [
            "Frontend Web Development Certificate",
            "Vue.js Developer Certification",
            "CSS Grid Specialist",
        ],
        projectsCompleted: 41,
        hourlyRate: "$55/hour",
        location: "Khartoum, Sudan",
        joinDate: "2021",
        portfolio: "https://omarkhalil.design",
        feedback: [
            {
                clientName: "Zainab Hassan",
                rating: 4,
                comment:
                    "Good web designer, creates clean and modern designs. Responsive and professional.",
                date: "2024-01-05",
            },
            {
                clientName: "Tariq Mohamed",
                rating: 5,
                comment:
                    "Excellent work on our company website. Very satisfied with the results.",
                date: "2023-11-20",
            },
        ],
        projectPhotos: [pro1, pro5],
        specificQuestions: [
            "Do you need responsive design for all devices?",
            "Are you looking for a complete redesign or just updates?",
            "Do you have existing brand guidelines to follow?",
            "What's your preferred color scheme and typography?",
            "Do you need e-commerce functionality?",
            "What's your target audience and business goals?",
        ],
    },
    {
        id: 6,
        name: "Fatima Abdel",
        profilePicture: avatar5,
        serviceType: "UI/UX Design",
        category: "design",
        rating: 4.8,
        totalReviews: 112,
        bio: "User experience designer with a focus on accessibility and inclusive design. Experienced in creating user-centered solutions for diverse audiences.",
        skills: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Accessibility",
            "Figma",
            "Adobe Creative Suite",
        ],
        certifications: [
            "UX Design Certificate",
            "Accessibility Specialist",
            "Adobe Creative Cloud Expert",
        ],
        projectsCompleted: 36,
        hourlyRate: "$65/hour",
        location: "Khartoum, Sudan",
        joinDate: "2020",
        portfolio: "https://fatimaux.com",
        feedback: [
            {
                clientName: "Ibrahim Hassan",
                rating: 5,
                comment:
                    "Fatima's UX research and design process is thorough and professional. Great attention to user needs.",
                date: "2024-02-05",
            },
            {
                clientName: "Layla Ahmed",
                rating: 4,
                comment:
                    "Very good designer with strong understanding of user experience principles.",
                date: "2023-12-10",
            },
        ],
        projectPhotos: [pro1, pro2, pro4],
        specificQuestions: [
            "What's your primary user interaction goal?",
            "Do you need user testing and research included?",
            "Are you targeting specific accessibility standards?",
            "What's your preferred prototyping fidelity level?",
            "Do you need wireframing and user journey mapping?",
            "What's your project timeline and budget?",
        ],
    },
];
