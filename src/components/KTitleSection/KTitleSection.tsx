import KTranslate from "../KTranslate/KTranslate";
import "./KTitleSection.scss";

interface Props {
  text: string;
}

export default function KTitleSection({ text }: Props) {
  return (
    <span className="title-section">
      <h1>
        <KTranslate text={text} />
      </h1>
    </span>
  );
}
