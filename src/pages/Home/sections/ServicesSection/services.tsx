import KTranslate from "@/components/KTranslate/KTranslate";
import gootripImage from "@/assets/gootrip-card.jpeg";
import brothersImage from "@/assets/brothers-card.jpeg";
import ezyImage from "@/assets/ezyapp-card.jpeg";

export interface ProjectItem {
  title: string;
  description: string;
}

export const Projects = [
  {
    title: "Gootrip",
    description: <KTranslate text="PROFILE.GOOTRIP_DESCRIPTION" />,
    link: "https://www.gootrip.app/",
    image: gootripImage,
    techs: [
      "C#/.NET",
      "ReactJS",
      "TypeScript",
      "React Native",
      "Azure Services",
      "PostgreSQL",
      "NextUI",
    ],
  },
  {
    title: "EzyApp",
    description: <KTranslate text="PROFILE.EZYAPP_DESCRIPTION" />,
    link: "https://ezyapp.com.br/",
    image: ezyImage,
    techs: [
      "C#/.NET",
      "Angular 2+",
      "Azure Services",
      "PostgreSQL",
      "Angular Material",
      "TypeScript",
    ],
  },
  {
    title: "Brother's Invest",
    description: <KTranslate text="PROFILE.BROTHERS_INVEST_DESCRIPTION" />,
    image: brothersImage,
    techs: [
      "Java",
      "ReactJS",
      "TypeScript",
      "Azure Services",
      "PostgreSQL",
      "ChakraUI",
    ],
  },
];

export const SideProjects = [
  {
    title: "Letz Learn",
    description: <KTranslate text="PROFILE.LETZ_LEARN_DESCRIPTION" />,
    link: "https://learn-cert-web-lac.vercel.app/",
    image: gootripImage,
    techs: [
      "C#/.NET",
      "React",
      "Azure Services",
      "PostgreSQL",
      "MaterialUI",
      "TypeScript",
    ],
  },
  {
    title: "Netflix Clone",
    description: <KTranslate text="PROFILE.NETFLIX_CLONE_DESCRIPTION" />,
    link: "https://mcosta21.github.io/netflix-clone-reactjs/",
    image: gootripImage,
    techs: ["React", "JavaScript"],
  },
  {
    title: "HBO Max Clone",
    description: <KTranslate text="PROFILE.HBO_MAX_CLONE_DESCRIPTION" />,
    link: "https://github.com/mcosta21/hbo-max-react-native-clone",
    image: gootripImage,
    techs: ["React Native", "Expo"],
  },
  {
    title: "Multiple Authentication React",
    description: (
      <KTranslate text="PROFILE.MULTIPLE_AUTHENTICATION_DESCRIPTION" />
    ),
    link: "https://github.com/mcosta21/multiple-authentication-react",
    image: gootripImage,
    techs: ["React", "TypeScript"],
  },
  {
    title: "Fire Alarm",
    description: <KTranslate text="PROFILE.FIRE_ALARM_DESCRIPTION" />,
    link: "https://github.com/mcosta21/fire-alarm",
    image: gootripImage,
    techs: [
      "Java",
      "Java Server Faces",
      "Arduino",
      "PrimeFaces",
      "Tomcat",
      "JSerialComm",
    ],
  },
  {
    title: "ModeSS",
    description: <KTranslate text="PROFILE.MODESS_DESCRIPTION" />,
    link: "https://github.com/mcosta21/ModeSS",
    image: gootripImage,
    techs: ["Electron", "JavaScript", "Bootstrap v4.5", "ChartJS"],
  },
  {
    title: "Starctron",
    description: <KTranslate text="PROFILE.STARCTRON_DESCRIPTION" />,
    link: "https://github.com/mcosta21/starctron",
    image: gootripImage,
    techs: ["Electron", "React", "JavaScript", "StyledComponents"],
  },
  {
    title: "Órama mobile app",
    description: <KTranslate text="PROFILE.ORAMA_DESCRIPTION" />,
    link: "https://github.com/mcosta21/megahack-orama-mobile",
    image: gootripImage,
    techs: ["NodeJS", "React Native", "JavaScript"],
  },
  {
    title: "Excel Reader",
    description: <KTranslate text="PROFILE.EXCEL_DESCRIPTION" />,
    link: "https://github.com/mcosta21/excel-reader-java",
    image: gootripImage,
    techs: ["Java"],
  },
];
