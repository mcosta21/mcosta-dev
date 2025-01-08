import "./ServicesSection.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { MdArrowOutward } from "react-icons/md";
import { Chip } from "@nextui-org/chip";

import { Projects } from "./services";

import KTitleSection from "@/components/KTitleSection/KTitleSection";

export default function ServicesSection() {
  const ref = useRef(null); // Referência ao elemento
  const isInView = useInView(ref, { once: true });

  function handleShowMore(link: string) {
    window.open(link, "_blank");
  }

  return (
    <section ref={ref} className="d-padding" id="services-section">
      <div className="services-container">
        <div>
          <KTitleSection text="PROFILE.HIGH_VALUE_PROJECTS" />
        </div>

        <aside className="projects">
          {Projects.map((item, index) => (
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
              <div className="flex flex-col gap-4">
                <Card className="h-[370px] shadow-small p-2 card-hover rounded-large">
                  <img
                    alt={item.title}
                    className="absolute left-0 top-0 h-full w-full object-cover"
                    src={item.image}
                  />

                  {item.link && (
                    <CardFooter className="absolute bottom-0 right-0 w-50 rounded-tl-xl rounded-bl-none bg-custom">
                      <Button
                        isIconOnly
                        className="rounded-xl bg-primary text-white"
                        startContent={<MdArrowOutward size={20} />}
                        variant="solid"
                        onClick={() => handleShowMore(item.link)}
                        onPress={() => handleShowMore(item.link)}
                      />
                    </CardFooter>
                  )}
                </Card>

                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                  <div className="flex gap-2 flex-wrap mt-2">
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
                </div>
              </div>
            </motion.div>
          ))}
        </aside>
      </div>
    </section>
  );
}
