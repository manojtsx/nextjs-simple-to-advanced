"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const {push} = useRouter();
  function handleSubmit(e:FormEvent){
    e.preventDefault();
    push(`/prediction/${inputVal}`);
  }
  return (
    <div className="flex flex-col h-screen dark:bg-black justify-center items-center gap-5">
      <div>
        <h1 className="text-3xl">Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" value={inputVal} placeholder="Type your name..." onChange={(e) => { setInputVal(e.target.value) }} className="border-2 border-blue-300 rounded-e-md outline-none h-10" />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg border-2   border-blue-500 hover:bg-white hover:text-blue-500">Predict data</button>
      </form>
    </div>
  );
}
