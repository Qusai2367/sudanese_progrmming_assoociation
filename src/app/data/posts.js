import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import responsive from "../assets/unnamed3.png";
import responsive2 from "../assets/unnamed2.png";
import Docker from "../assets/unnamed.png";
export const posts = [
    {
        id: 1,
        title: "Building Scalable Web Apps in Sudan",
        content:
            "A guide to building robust and scalable web applications tailored for the Sudanese market.",
        PostImage: responsive,
        likes: 10,
        author: {
            name: "Alice Johnson",
            photo: profile,
            specialization: "Software Engineer",
        },
        createdAt: "2025-09-01T10:00:00Z",
        comments: [
            {
                id: 1,
                text: "This is the first comment.",
                likes: 2,
                author: "User A",
                replies: [
                    {
                        id: 1,
                        text: "This is a reply to the first comment.",
                        likes: 0,
                        author: "User B",
                        replies: [],
                    },
                ],
            },
            {
                id: 2,
                text: "This is the second comment.",
                likes: 5,
                author: "User C",
                replies: [],
            },
        ],
    },

    {
        id: 2,
        title: "The Future of Mobile Development in Sudan",
        content:
            "Exploring the trends and opportunities in mobile app development within Sudan.",
        likes: 10,
        PostImage: responsive2,
        author: {
            name: "Encanto",
            photo: profile2,
            specialization: "Mobile Developer",
        },
        createdAt: "2025-09-01T10:00:00Z",
        comments: [
            {
                id: 1,
                text: "This is the first comment.",
                likes: 2,
                author: "User A",
                replies: [
                    {
                        id: 1,
                        text: "This is a reply to the first comment.",
                        likes: 0,
                        author: "User B",
                        replies: [],
                    },
                ],
            },
            {
                id: 2,
                text: "This is the second comment.",
                likes: 5,
                author: "User C",
                replies: [],
            },
        ],
    },

    {
        id: 3,
        title: "Open Source Contributions from Sudanese Developers",
        content:
            "Showcasing the contributions of Sudanese developers to the global open-source community.",
        likes: 20,
        PostImage: Docker,
        author: {
            name: "Ahmed Abdo",
            photo: profile,
            specialization: "Open Source Contributor",
        },
        createdAt: "2025-09-02T15:30:00Z",
        comments: [],
    },
];
