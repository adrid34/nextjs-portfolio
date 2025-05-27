import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@adrid34",
    icon: Icons.gitHub,
    link: "https://github.com/adrid34",
  },
  {
    name: "LinkedIn",
    username: "Adrian Madrid",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/adrian-madrid-a7b66b2a2/"
  },
  {
    name: "Twitter",
    username: "@A_Madrid920304",
    icon: Icons.twitter,
    link: "https://x.com/A_Madrid920304",
  },
  {
    name: "Gmail",
    username: "Adrian Madrid",
    icon: Icons.gmail,
    link: "adrianmadrid5245@gmail.com",
  },
];
