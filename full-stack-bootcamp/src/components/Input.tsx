import { useState } from "react";
import StarIcon from "../assets/Star Icon.png";
import AddIcon from "../assets/Edit Icon.png";

// TODO (Step 4): Build the Input component
// It needs:
//   1. A full-width rounded input field with a placeholder
//   2. A StarIcon button positioned inside the input on the right
//   3. An AddIcon button sitting outside the input to the right
//
// TODO (Step 9): Add useState for the value + a handleSubmit function

const Input = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-4xl">

        {/* TODO: <input> with placeholder, className for styling */}

        {/* TODO: StarIcon button — absolute right-4, top-1/2 -translate-y-1/2 */}

      </div>

      {/* TODO: AddIcon submit button */}

    </div>
  );
};

export default Input;

