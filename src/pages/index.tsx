//import Link from "next/link";
import Navbar from "./Shared/NavBar/NavBar";
import Home from "./homePages/Home/Home";

export default function index() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <div className=" min-h-screen">
      <Navbar/>
      <Home/>
    </div>
  );
}
