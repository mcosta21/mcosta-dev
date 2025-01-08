import "./SuccessCasesSection.scss";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

import { SuccessCases } from "./cases";

import KTitleSection from "@/components/KTitleSection/KTitleSection";
import KTranslate from "@/components/KTranslate/KTranslate";

export default function SuccessCasesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(true);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 8000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <section id="success-cases-section">
      <div className="caller d-padding">
        <KTitleSection text="SUCCESS_CASES.TITLE" />

        <div ref={sliderRef} className="keen-slider w-full">
          {SuccessCases.map((item) => (
            <div key={item.name} className="keen-slider__slide w-full">
              <div className="content">
                <aside className="call-image">
                  <img
                    alt="EzyApp System"
                    className="success-case-image"
                    src={item.image}
                  />
                </aside>

                <aside className="call-text">
                  <h1>{item.name}</h1>
                  <p className="text-zinc-400 pb-6">
                    <KTranslate text={item.description} />
                  </p>
                </aside>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <div className="dots flex items-center justify-center">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  className={
                    "dot" +
                    (currentSlide === idx ? " bg-primary" : " bg-default-200")
                  }
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
