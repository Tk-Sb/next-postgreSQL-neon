import { addStudent } from "./_db/seed";

export default function Home() {
  addStudent("tk", "sb", ["A in math", "B in coding", "F in history"])
  
  return (
    <>
      <h1>Nice home page</h1>
    </>
  );
}
