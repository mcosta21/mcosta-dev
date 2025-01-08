import "./MainSection.scss";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@nextui-org/button";

import KTranslate from "@/components/KTranslate/KTranslate";
import KLink from "@/components/KLink/KLink";

export default function MainSection() {
  const links = [
    {
      icon: <FaLinkedin size={20} />,
      link: "https://www.linkedin.com/in/mcosta21/",
    },
    {
      icon: <FaGithub size={20} />,
      link: "https://github.com/mcosta21",
    },
    {
      icon: <FaInstagram size={20} />,
      link: "https://www.instagram.com/marcio_costa7",
    },
  ];

  function handleOpen(link: string) {
    window.open(link, "_blank");
  }

  return (
    <section className="bg-custom d-padding" id="main-section">
      <div className="caller">
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: "-300%" }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
        >
          <img
            alt="Marcio Costa"
            className="w-[200px] rounded-full border-8 dark:border-[#1f1f22] border-[#ffffff] shadow-lg mb-4"
            src="https://avatars.githubusercontent.com/u/30120305?s=400&u=f80e059ce7cc5ecf9d655f5f761385d3e6aac95b&v=4"
          />
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          initial={{ x: "-300%" }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
        >
          <p>
            <KTranslate text="PROFILE.HI" />
            <strong>Marcio Costa</strong>
          </p>
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          className="flex items-center justify-center gap-3"
          initial={{ x: "-300%" }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
        >
          {links.map((link) => (
            <Button
              key={link.link}
              isIconOnly
              className="rounded-full text-default-500"
              startContent={link.icon}
              variant="flat"
              onClick={() => handleOpen(link.link)}
              onPress={() => handleOpen(link.link)}
            />
          ))}
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          className="flex flex-col gap-4"
          initial={{ x: "-300%" }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
        >
          <p className="text-zinc-400 mt-4">
            <KTranslate text="PROFILE.ABOUT_ME_1" />
          </p>
          <p className="text-zinc-400">
            <KTranslate text="PROFILE.ABOUT_ME_2" />
          </p>
          <p className="text-zinc-400">
            <KTranslate text="PROFILE.ABOUT_ME_3" />
          </p>

          <KLink
            isExternal
            link="https://docs.google.com/document/d/1Z-g8VH6oqi_9dfbCielp3m7Pk4OoSL3h3klAAGTYql0/edit?usp=sharing"
            text="SHARED.READ_MORE"
          />
        </motion.div>
      </div>
    </section>
  );
}
