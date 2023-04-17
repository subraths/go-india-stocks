import Link from "next/link";
import Button from "./button";

export default function Navbar() {
  return (
    <nav className="px-6 py-4 flex">
      <div className="flex mr-auto">
        <img className="w-18" src="./images/logewithname.png" />
        <input
          type="text"
          className="bg-slate-300 mx-12 rounded-md w-[60rem] shadow-inner py-2 px-4"
        />
      </div>
      <div className="flex align-baseline space-x-4">
        <Link href="#" className="capitalize my-auto">
          contact us
        </Link>
        <Button innerText="sign up" varient="secondary" />
        <Button innerText="sign in" varient="secondary" />
      </div>
    </nav>
  );
}
