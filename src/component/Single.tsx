import type { FC } from "react"
import filter from "../assets/img/Filter.svg"
import { type meme } from "../data"
import Card from "./Card"
type CardProps = {
  title: string,
  data: meme[],
}

const Single :FC<CardProps> = ({title, data}) =>{
  return (
    <div className="relative h-full px-10.5 pt-5.25 border-1 border-(--bd) overflow-y-auto">
      <div className="sticky top-0 bg-(--bg-black) z-10 w-full flex justify-between items-center mb-5">
         <h2 className="text-(--text-white) font-Heebo font-medium text-base">{ title}</h2>
      <figure>
        <img src={filter}/>
      </figure>
      </div>
      <div>
        <Card data={data}/>
      </div>
     
    </div>
  )
}

export default Single