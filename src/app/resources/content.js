import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Adarsh",
  lastName: "Satpute",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // IANA time zone for India
  languages: ["English", "Hindi"], // Modify if needed
};


const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adarshask7",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adarsh-satpute/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/adarshask7",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adarshask07@gmail.com",
  },
];


const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer and Web Developer</>,
  subline: (
    <>
      I'm Adarsh, a software engineer at <InlineCode>Accenture</InlineCode>, where I build scalable
      <br /> web applications. After hours, I work on my own projects, exploring new technologies.
    </>
  ),
};


const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Pune-based software engineer with a passion for building scalable web
        applications and exploring emerging technologies. My expertise spans full-stack
        development, system design, and cloud computing.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Accenture",
        timeframe: "2023 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and optimized web applications for enterprise clients, improving system
            efficiency by 25%.
          </>,
          <>
            Contributed to cloud-based solutions, enhancing scalability and reducing costs by 15%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Project at Accenture",
            width: 16,
            height: 9,
          },
        ],
      },
    
    ],
  },
   studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Pune University",
        description: <>Graduated with a BE in Information Technology, securing 8.86 CGPA.</>,
      },
      {
        name: "Gopal Krishna Gokhale College Kolhapur",
        description: <>Completed HSC (12th) with 78.77%.</>,
      },
      {
        name: "SAPEMS Kolhapur",
        description: <>Completed SSC (10th) with 83%.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: <>Building next-gen web applications with Next.js, MongoDB, and TypeScript.</>,
        images: [
        
        ],
      },
      {
        title: "MERN Stack",
        description: <>Developing full-stack applications with MongoDB, Express, React, and Node.js.</>,
        images: [],
      },
      {
        title: "Cloud Platforms",
        description: <>Working with GCP for scalable web solutions.</>,
        images: [],
      },
    ],
  },
};


const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
