export default function getTimeStamp(duration) {
  let timestamp = "";
  while (duration > 0) {
    const remainder = duration % 60;
    duration = Math.floor(duration / 60);
    timestamp = ("0" + remainder).slice(-2) + ":" + timestamp;
  }
  const start = timestamp[0] === "0" ? 1 : 0;
  return timestamp.slice(start, -1);
}
