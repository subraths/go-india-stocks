export default function Card(props) {
  return (
    <div className="shadow-xl rounded-md p-6 bg-white my-8">
      {props.children}
    </div>
  );
}
