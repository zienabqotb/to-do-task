import AddButton from "../Components/AddButton";
import DeleteIcon from "../Components/DeleteIcon";
import EditIcon from "../Components/EditIcon";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      name: "eat",
    },
    {
      name: "play",
    },
    {
      name: "study",
    },
  ]);
  return (
    <div className="flex flex-col items-center justify-content" >
      <h1 className="text-3xl text-rose-800 font-bold hover:text-rose-500  items-center">Welcome Zienab</h1>
      <form className="h-full flex md-gap-5 gap-1 items-center  mt-10">
        <input type="text" placeholder="What needs to be done?" className="border grow border-rose-800 rounded-md py-2 px-4 md:w-110 w-50 outline-none focus:border-rose-600 " />
        <AddButton>Add</AddButton>
      </form>
      <div className="  flex w-full flex-col gap-5 mt-10 ">
        {todos.map((todo) => (
          <div key={todo.name} className=" border-2 border-rose-800 rounded-2xl px-5 py-1 capitalize  flex gap-4 justify-between items-center"> 
            <h2 className="text-rose-800 text-xl font-semibold hover:underline cursor-pointer"> {todo.name} </h2>
            <div className="flex gap-4 items-center">
              <EditIcon/>
              <DeleteIcon/> 
            </div>
          </div>
        ))}
      </div>
        
    </div>
  )
}
