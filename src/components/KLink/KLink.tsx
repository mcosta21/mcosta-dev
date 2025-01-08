import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from "@nextui-org/link";

import KTranslate from "../KTranslate/KTranslate";

interface Props {
  link: string;
  isExternal?: boolean;
  text?: string;
}

export default function KLink({
  link,
  isExternal = true,
  text = "SHARED.FIND_OUT",
}: Props) {
  return (
    <Link
      className="flex items-center gap-2 cursor-pointer"
      href={link}
      isExternal={isExternal}
    >
      <p className="text-primary">
        <KTranslate text={text} />
      </p>
      <MdOutlineArrowForward className="text-primary mt-[1px]" />
    </Link>
  );
}
