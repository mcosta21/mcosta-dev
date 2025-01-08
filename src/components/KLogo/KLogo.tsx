import { useThemeContext } from "@/hooks/use-theme";

export default function KLogo() {
  const { logo } = useThemeContext();

  return (
    <div>
      <img alt="Luup Software" src={logo} width={140} />
    </div>
  );
}
