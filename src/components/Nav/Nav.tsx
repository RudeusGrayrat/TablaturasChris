import NavRute from "./NavRute";
import Sign from "./sign";
import Searchbar from "../Searchbar/SearchBar";

export default function Nav() {
  return (
    <div className="flex bg-indigo-400 sticky top-0 z-50 h-20 flex-row items-center justify-evenly font-bold">
      <Searchbar></Searchbar>
      <NavRute></NavRute>
      <Sign></Sign>
    </div>
  )
}