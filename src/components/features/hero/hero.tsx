import Image from "next/image";

import "./hero.css";

type THeroProps = {
  src?: string; // can be for video or image
};

export function Hero({ src }: THeroProps) {
  if (!src) return;

  return (
    <div className="hero">
      <Image className="" src={src ?? ""} alt="Hero Image" fill />
    </div>
  );
}
