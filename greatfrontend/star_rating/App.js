import { useState } from "react";
import StarRating from "./StarRating";

export default function App() {
  const maxNumStars = 5;

  const [filledStars, setFilledStars] = useState(0);
  const handleStarClick = (starIndex) => {
    setFilledStars(starIndex);
  };

  return (
    <div>
      <StarRating
        maxNumStars={maxNumStars}
        filledStars={filledStars}
        handleClick={handleStarClick}
      />
    </div>
  );
}
