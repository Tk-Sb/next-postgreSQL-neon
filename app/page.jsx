import getDomain from "./lib/domain";
import getData  from "./lib/db";
export default function Home() {
  console.log("Domain is:", getDomain())
  console.log(getData())
  return (
    <>
    
    </>
  );
}
