import NavRute from "./NavRute";
import Searchbar from "../Searchbar/SearchBar";

export default function Nav() {
  return (
    <div style={{backgroundColor: "rgba(172, 155, 209, 1)"}}
    className="flex sticky top-0 z-50 h-20 flex-row items-center justify-evenly font-bold">
      <Searchbar></Searchbar>
      <NavRute></NavRute>
    </div>
  )
}