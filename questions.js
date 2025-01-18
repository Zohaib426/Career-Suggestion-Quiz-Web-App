const questions = [
    {
        id: 1,
        text: "I enjoy solving complex problems and puzzles",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 2,
        text: "I prefer working with people rather than working alone",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },

    {
        id: 3,
        text: "I am comfortable taking risks and making important decisions",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 4,
        text: "I enjoy creating and expressing myself artistically",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 5,
        text: "I like working with machines and technical equipment",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 6,
        text: "I am good at explaining things to others",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 7,
        text: "I enjoy analyzing data and finding patterns",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 8,
        text: "I am interested in helping others solve their problems",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 9,
        text: "I prefer having a structured and organized routine",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 10,
        text: "I enjoy learning about new technologies and innovations",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 11,
        text: "I like to follow detailed instructions when completing tasks",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 12,
        text: "I enjoy working on projects that require creativity",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 13,
        text: "I am comfortable working in a fast-paced environment",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 14,
        text: "I enjoy learning new skills and knowledge",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 15,
        text: "I prefer working on tasks that have clear goals and deadlines",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 16,
        text: "I am good at managing my time and prioritizing tasks",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 17,
        text: "I enjoy working with numbers and solving mathematical problems",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 18,
        text: "I like working with my hands and building things",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 19,
        text: "I am interested in understanding how things work",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 20,
        text: "I enjoy working in a team to achieve common goals",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 21,
        text: "I prefer tasks that require logical thinking and problem-solving",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 22,
        text: "I am good at coming up with new ideas and innovations",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 23,
        text: "I like to take the lead in group projects",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 24,
        text: "I enjoy activities that involve physical effort",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 25,
        text: "I like to work with data and statistics",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 26,
        text: "I enjoy helping others improve their skills and knowledge",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 27,
        text: "I prefer a job that allows me to be outdoors",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 28,
        text: "I am comfortable speaking in front of a group of people",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 29,
        text: "I enjoy working on projects that require attention to detail",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 30,
        text: "I like to solve technical problems and troubleshoot issues",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 31,
        text: "I enjoy working in a diverse environment with people from different backgrounds",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 32,
        text: "I like to set and achieve high standards in my work",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 33,
        text: "I enjoy taking on leadership roles in projects",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 34,
        text: "I am comfortable with public speaking and presentations",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 35,
        text: "I like to stay up to date with the latest trends and developments in my field",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 36,
        text: "I enjoy working under pressure and meeting tight deadlines",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 37,
        text: "I am good at negotiating and reaching agreements with others",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 38,
        text: "I enjoy working on projects that require collaboration and teamwork",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 39,
        text: "I like to plan and organize events or activities",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 40,
        text: "I am interested in pursuing a career in management",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 41,
        text: "I enjoy working with new and innovative technologies",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 42,
        text: "I am good at multitasking and handling multiple projects at once",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 43,
        text: "I enjoy mentoring and guiding others in their careers",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 44,
        text: "I prefer to work in a structured and predictable environment",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 45,
        text: "I enjoy solving technical challenges and finding solutions to problems",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 46,
        text: "I am good at using data to make informed decisions",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 47,
        text: "I enjoy working in roles that require strong communication skills",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 48,
        text: "I am interested in roles that involve research and development",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 49,
        text: "I enjoy working in a role where I can make a positive impact on society",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    },
    {
        id: 50,
        text: "I prefer to work in an environment that encourages continuous learning",
        weights: {
            "STRONGLY_AGREE": 5,
            "AGREE": 4,
            "NEUTRAL": 3,
            "DISAGREE": 2,
            "STRONGLY_DISAGREE": 1
        }
    }
];