import Crescent from "../assets/Crescent.svg";
import Lantern from "../assets/Lantern.png";

// TODO (Step 5): Build the TaskCard component

// Step 5A — Define the shape of a task's props:
export type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  activeCrescents?: number;   // how many crescents to show as active (0–5)
  variant?: "small" | "wide";
  completed?: boolean;
  completedOn?: string;       // e.g. "Mar 12th 2026"
  summary?: string[];
  volunteersNeeded?: number;
  onClick?: () => void;       // called when the card is clicked
};

// Step 5B — Build the card UI:
const TaskCard = ({
  title,
  description,
  date,
  activeCrescents = 0,
  variant = "small",
  completed = false,
  completedOn,
  onClick,
}: TaskCardProps) => {

  // TODO: Build the card UI
  // Suggested structure:
  //   <div onClick={onClick}> outer card container with border + rounded-2xl
  //     Top row: left Lantern image | centered title | right Lantern image
  //     Description paragraph
  //     Row of 5 crescent images — use "crescent-active" / "crescent-inactive" className
  //     Footer: show date normally, or a "Completed" banner if completed === true
  //   </div>

  return (
    <div onClick={onClick}>
      {/* TODO: Add your card UI here */}
    </div>
  );
};

export default TaskCard;
