import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>Hare krishna vite app running successfully!!</div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);