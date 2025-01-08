import Lottie from "lottie-react";

import mainAnimation from "./animations/main.json";
import loadingAnimation from "./animations/loading.json";
import mobileConstructionAnimation from "./animations/mobile-construction.json";

interface Props {
  animation: "mobile-construction" | "main" | "loading";
  size?: number;
}

const KLottieAnimation = ({ size = 100, animation }: Props) => {
  const animations: Record<string, object> = {
    main: mainAnimation,
    loading: loadingAnimation,
    "mobile-construction": mobileConstructionAnimation,
  };

  const selectedAnimation = animations[animation];

  return <Lottie animationData={selectedAnimation} loop={true} size={size} />;
};

export default KLottieAnimation;
