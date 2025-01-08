import "./KFooter.scss";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import KButton from "../KButton/KButton";
import KTranslate from "../KTranslate/KTranslate";

import { LinkHelper } from "@/services/LinkHelper";

export default function KFooter() {
  const contacts = [
    {
      icon: <FiPhone />,
      text: "+55 22 99813-5670",
    },
    {
      icon: <MdOutlineEmail />,
      text: "marcioc424@gmail.com",
    },
  ];

  return (
    <>
      <footer className="k-footer d-padding">
        <aside className="contact">
          <h1>
            <KTranslate text="FOOTER.GET_IN_TOUCH" />
          </h1>

          <div className="actions flex items-center gap-3 mb-6">
            <KButton
              text="SHARED.CHAT_NOW"
              onClick={() => LinkHelper.open("https://wa.me/5522998135670")}
            />
            <KButton
              color="outline"
              text="SHARED.SCHEDULE_CONVERSATION"
              onClick={() =>
                LinkHelper.open("https://calendar.app.google/reReW8tTgB1RUtRp9")
              }
            />
          </div>

          {contacts.map((item) => (
            <div
              key={item.text}
              className="text-zinc-400 flex items-center gap-3 h-[40px]"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </aside>
      </footer>
    </>
  );
}
