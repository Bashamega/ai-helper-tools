import { Card } from "@/components/Card";
import React from "react";
export default function App() {
  return (
    <main>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mr-4 p-5">
        <Card link={"/writing"} title={"Writing"} desc={"Write a story, article, paragraph"} />
      </section>
    </main>
  )
}