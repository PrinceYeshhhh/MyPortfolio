interface Social {
  platform: string;
  url: string;
  icon: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  github: string;
}

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
  icon: string;
}

export interface PersonalConfig {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: {
    description: string[];
    image: string;
    yearsOfExperience: number;
    education: string;
    availability: string;
    resumeUrl: string;
  };
  social: Social[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
}

export const personalConfig: PersonalConfig = {
  name: "G Yeshwanth Kumar Reddy",
  title: "Full Stack Developer & AI expert",
  email: "yeshwanthkumarr2004@gmail.com",
  phone: "+91 8074070319",
  location: "Tirupati, Andhra Pradesh, India",
  about: {
    description: [
      "Hello! I'm a passionate developer with expertise in creating modern web applications and apps. With a strong foundation in both frontend and backend technologies using AI. I bring ideas to life through clean code and thoughtful design. Also good at using AI tools and prompt engineering",
      "My journey in tech began at my school 'Indian Institute Of Technology Tirupati (IIT TP)', where I studied my Engineering in Computer Science. I've collaborated with startups and established companies alike, helping them build scalable digital products that users love."
    ],
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    yearsOfExperience: 4,
    education: "Bachelor's in Computer Science",
    availability: "Open to opportunities",
    resumeUrl: "Resume/Yeshwanth_Kumar_Reddy_Resume (1) (3) (1).docx"
  },
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/PrinceYeshhhh",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yeshwanth-kumar-a6a27334b",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter"
    }
  ],
  skills: [
    {
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 75 }
      ],
      icon: "layout"
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 65 }
      ],
      icon: "server"
    },
    {
      name: "Design",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 75 }
      ],
      icon: "pen-tool"
    },
    {
      name: "Other",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "CI/CD", level: 70 },
        { name: "ML", level: 75 },
        { name: "AI Tools", level: 85 }
        
      ],
      icon: "tool"
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      link: "https://example.com",
      github: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Task Management",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "Frontend",
      link: "https://example.com",
      github: "https://github.com/yourusername/project2"
    }
  ],
  experience: [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jan 2022 - Present",
      description: [
        "Led the development of a React-based customer portal that increased user engagement by 40%",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
        "Mentored junior developers and conducted code reviews to ensure high code quality"
      ],
      technologies: ["React", "TypeScript", "Redux", "GraphQL"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "New York, NY",
      period: "Jun 2019 - Dec 2021",
      description: [
        "Developed and maintained multiple web applications using React and Node.js",
        "Collaborated with UX designers to implement responsive designs and animations",
        "Optimized database queries that improved application performance by 35%"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    }
  ]
};