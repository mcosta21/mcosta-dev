import { useTranslation } from "react-i18next";

interface Props {
  text: string;
}

export default function KTranslate({ text }: Props) {
  const { t } = useTranslation();

  return <>{t(text)}</>;
}
