import { Button } from "@nextui-org/button";

import KTranslate from "../KTranslate/KTranslate";

interface Props {
  color?: "primary" | "outline";
  text: string;
  onClick: (e: any) => void;
}

export default function KButton({ text, color = "primary", onClick }: Props) {
  switch (color) {
    case "primary":
      return (
        <Button
          disableRipple
          className="rounded-full px-12 shadow-xl bg-background/50 after:absolute after:rounded-full after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 primary-gradient text-white"
          size="lg"
          onClick={onClick}
          onPress={onClick}
        >
          <KTranslate text={text} />
        </Button>
      );

    case "outline":
      return (
        <Button
          disableRipple
          className="rounded-full px-12 shadow-xl bg-white text-black border-1 border-black font-[500]"
          size="lg"
          onClick={onClick}
          onPress={onClick}
        >
          <KTranslate text={text} />
        </Button>
      );
  }

  return <div />;
}
