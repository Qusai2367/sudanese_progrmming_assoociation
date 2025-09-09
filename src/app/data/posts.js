import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import responsive from "../assets/Responsive.jpg";
import Docker from "../assets/Docker.jpg";
export const posts = [
    {
        id: 1,
        title: "Responsivwe Design in 2024",
        content:
            "Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco.",
        PostImage: responsive,
        likes: 10,
        image: "https://via.placeholder.com/600x300",
        author: {
            name: "Alice Johnson",
            photo: profile,
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
        title: "Second Post",
        content:
            "Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco.",
        likes: 10,
        image: "https://via.placeholder.com/600x300",
        author: {
            name: "Encanto",
            photo: profile2,
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
        title: "Docker",
        content:
            "Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco. Velit in mollit laborum aliquip eiusmod minim elit est Lorem mollit ullamco.",
        likes: 20,
        PostImage: Docker,
        image: "https://via.placeholder.com/600x300",
        author: {
            name: "Ahmed Abdo",
            photo: profile,
        },
        createdAt: "2025-09-02T15:30:00Z",
        comments: [],
    },
];
