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
    <div className="relative h-full px-4 sm:px-6 md:px-8 lg:px-10.5 pt-4 sm:pt-5 md:pt-5.25 border-1 border-(--bd) overflow-y-auto">
  <div className="sticky top-0 bg-(--bg-black) z-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-5 pb-2 sm:pb-0">
    <h2 className="text-(--text-white) font-Heebo font-medium text-sm sm:text-base lg:text-lg order-1 sm:order-none">
      {title}
    </h2>
    <figure className="flex-shrink-0 order-2 sm:order-none">
      <img 
        src={filter} 
        alt="Filter" 
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-auto md:h-auto"
      />
    </figure>
  </div>
  <div className="w-full">
    <Card data={data} />
  </div>
</div>
  )
}

export default Single