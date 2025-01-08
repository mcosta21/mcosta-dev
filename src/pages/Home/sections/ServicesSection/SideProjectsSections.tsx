import "./ServicesSection.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { SideProjects } from "./services";

import KTitleSection from "@/components/KTitleSection/KTitleSection";
import KLink from "@/components/KLink/KLink";

export default function SideProjectsSections() {
  const ref = useRef(null); // Referência ao elemento
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-custom d-padding" id="services-section">
      <div className="services-container">
        <div>
          <KTitleSection text="PROFILE.SIDE_PROJECTS" />
        </div>

        <aside className="side-projects">
          {SideProjects.map((item, index) => (
            <motion.div
              key={item.title}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              initial={{ opacity: 0, y: 50, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.2,
              }}
            >
              <Card className="shadow-small p-6 card-hover rounded-large">
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="text-zinc-400 text-sm">{item.description}</p>

                    <div className="flex gap-2 flex-wrap my-2">
                      {item.techs.map((x) => (
                        <Chip
                          key={item.title + x}
                          className="bg-custom shadow-sm"
                          size="sm"
                        >
                          {x}
                        </Chip>
                      ))}
                    </div>
                    <KLink isExternal link={item.link} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </aside>
      </div>
    </section>
  );
}
