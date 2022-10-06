import { useState } from "react";

export const useConfetti = (): [boolean, Function] => {
  const [confetti, setConfetti] = useState(false);

  const renderConfetti = async () => {
    setConfetti(true);
    await new Promise(r => setTimeout(r, 8000));
    setConfetti(false);
  }

  return [confetti, renderConfetti];
};
