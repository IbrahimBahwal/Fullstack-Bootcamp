import { useState }          from "react";
import backGroundPattern      from "./assets/Background Vector.svg";
import lanternRight           from "./assets/Right lanterns.png";
import lanternLeft            from "./assets/left lanterns.png";
import Header                 from "./components/Header";
import Input                  from "./components/Input";
import TaskCard               from "./components/TaskCard";
import TaskModal              from "./components/TaskModal";
import ParticleBackground     from "./components/ParticleBackground";
import type { TaskCardProps } from "./components/TaskCard";
import taskData               from "./data.json";

type Task = TaskCardProps & { id: number };
const TASKS = taskData as Task[];

function App() {
  // Track which task's modal is open (null = all closed)
  const [openTaskId, setOpenTaskId] = useState<number | null>(null);
  // Store tasks in state so we can mutate the completed field
  const [tasks, setTasks] = useState(TASKS);

  // Find the full task object for the currently open modal
  const openTask = tasks.find((t) => t.id === openTaskId) ?? null;

  // Toggle a task between completed and not-completed
  const handleToggleCompleted = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? t.completed
            ? { ...t, completed: false, completedOn: undefined }
            : { ...t, completed: true, completedOn: t.date, activeCrescents: t.totalCrescents }
          : t
      )
    );
  };

  return (
    <div
      className="min-h-screen bg-(--bg-dark) text-white relative overflow-hidden font-sans flex flex-col items-center"
      style={{ backgroundImage: `url(${backGroundPattern})`, backgroundSize: "cover" }}
    >
      {/* 1. Particle animation layer (behind everything) */}
      <ParticleBackground />

      {/* 2. Decorative lantern images */}
      <img src={lanternRight} alt="Right Lanterns" className="absolute top-0 right-0 w-32 md:w-70 opacity-80 z-2" />
      <img src={lanternLeft}  alt="Left Lanterns"  className="absolute top-0 left-0 w-32 md:w-70 opacity-80 z-2" />

      {/* 3. Gold border frame — main content area */}
      <div className="relative z-2 mx-auto w-[95vw] h-[95%] border-[3px] border-(--text-cream)
                      flex flex-col items-center gap-10 py-12 px-10 shadow-2xl my-12">
        <div className="max-w-4xl flex flex-col items-center justify-start gap-6">

          <Header />
          <Input />

          {/* 4. Task card grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onClick={() => setOpenTaskId(task.id)}
              />
            ))}
          </div>

        </div>
      </div>

      {/* 5. Modal — portalled to <body> so backdrop-blur works correctly */}
      {openTask && (
        <TaskModal
          open={openTaskId !== null}
          onClose={() => setOpenTaskId(null)}
          onToggleCompleted={() => handleToggleCompleted(openTask.id)}
          {...openTask}
        />
      )}
    </div>
  );
}

export default App;