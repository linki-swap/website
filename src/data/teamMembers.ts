import { bright, gino, kene, amos, richard } from "../assets/team";

interface TeamItems {
  name: string;
  role: string;
  image: string;
  about: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}

export const TeamItems: TeamItems[] = [
  {
    name: "Gino Osahon",
    role: "CTO and Software Engineer",
    image: gino,
    about:
      "Gino Osahon is a seasoned Software Engineer and Blockchain Developer with 8+ years' experience. He excels in championing Developer and Startup programs, fostering community engagement, and using tech to tackle real-world challenges.",
    linkedin: "https://www.linkedin.com/in/osahon-gino-ediagbonya/",
    instagram: "https://www.instagram.com/ginoosahon/",
    twitter: "https://twitter.com/gino_osahon",
  },
  {
    name: "Kene Onyemaeme",
    role: "Chief Executive Officer",
    image: kene,
    about:
      "Kene Onyemaeme is a tech entrepreneur and seasoned business developer, brings 7+ years of experience. His expertise in strategic planning, operational excellence, and effective leadership drives growth and profitability.",
    linkedin: "https://www.linkedin.com/in/keneonyemaeme/",
    instagram: "#",
    twitter: "https://twitter.com/kene_onyemaeme",
  },
  {
    name: "Amos Ezeme",
    role: "Head of Engineering",
    image: amos,
    about:
      "Amos is a proactive problem-solver, excelling in cross-domain expertise and team performance. With a track record of shaping technical roadmaps for startups, Amos adds substantial value independently.",
    linkedin: "https://www.linkedin.com/in/amos-ezeme-9b8286a6/",
    instagram: "#",
    twitter: "#",
  },
  {
    name: "Richard Tamunotonye",
    role: "Product Design Lead",
    image: richard,
    about:
      "Richard Tamunotonye is a passionate Product designer with over 5 years of experience. He has worked across various sectors, delivering user-centric designs that drive results. His continuous learning and recent success with Digital Product School reflect his commitment to innovation.",
    linkedin: "https://www.linkedin.com/in/richardtamunotonye/",
    instagram: "https://www.instagram.com/ismeerich/",
    twitter: "https://twitter.com/IsmeeRich",
  },
  {
    name: "Bright Lazarus",
    role: "Frontend Developer(Intern)",
    image: bright,
    about:
      "Bright Lazarus is a passionate Frontend Developer with over 2 years of experience. He has worked and callaborated with companies across various sectors, successfully built user-friendly web products that effectively meet the unique needs of companies and their target markets.",
    linkedin: "https://www.linkedin.com/in/brightlazarus/",
    instagram: "https://www.instagram.com/bigbright111/",
    twitter: "https://www.twitter.com/BrightLazarus8",
  },
];
