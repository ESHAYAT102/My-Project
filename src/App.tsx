import Dock from "./components/Dock";

function getCurrentDateTime() {
  const now = new Date();
  const hours = now.getHours() % 12; // 1-12 format
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = now.toDateString();
  return { time: timeString, date: dateString };
}

function updateDateTime() {
  const { time, date } = getCurrentDateTime();
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  if (timeElement && dateElement) {
    // Check if elements exist
    timeElement.textContent = time;
    dateElement.textContent = date;
  } else {
    console.error("Time or Date elements not found!");
  }
}

updateDateTime();
setInterval(updateDateTime, 1000);

export default function App() {
  return (
    <>
      <div id="dateTime">
        <p id="time"></p>
        <p id="date"></p>
      </div>
      <Dock />
    </>
  );
}
