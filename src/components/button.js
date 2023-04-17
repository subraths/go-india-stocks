export default function Button(props) {
  const primary =
    "text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-full active:bg-sky-500";

  const secondary = "uppercase border-2 border-slate-400 rounded px-4 py-2";
  const color = props.color
    ? `text-white ${props.color} px-4 py-2 rounded-full`
    : null;
  const varient = props.varient === "secondary" ? secondary : primary;
  return <button className={color ? color : varient}>{props.innerText}</button>;
}
