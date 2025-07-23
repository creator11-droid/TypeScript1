import { useState, type FC} from "react";
import { type meme } from "../data"
import Full from "./Full";



interface data_type{
  data: meme[];
}

const Card: FC<data_type> = ({ data }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  function short(x: number): string {
    const FormattedString:string = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
}).format(x);
    return `$${FormattedString}` 
  }
  return (
    <div >
      {data.map((item, index) => (
        <div  key={index}  className=" h-16.75 w-128.75  mb-2.5">
          {
            activeId === index ? (
              <div className='h-full w-full border-1 border-(--bd) rounded-xs px-2 py-1.5 sm:px-[2%] sm:py-[1.5%] flex flex-col sm:flex-row justify-between gap-2 sm:gap-0' onClick={() => setActiveId(index)}>
                      <div className="flex gap-2 sm:gap-3 md:gap-5.5 min-w-0 flex-1">
                        <figure className="relative w-12 sm:w-16 md:w-18 flex-shrink-0">
                          <img src={item.Images?.PP}></img>
                          <img src={item.Images?.R} className="absolute right-2 bottom-0 z-10"/>
                        </figure>
                        <div className="flex flex-col h-12">
                          <h3 className="text-(--text-white) font-HEEBO font-normal text-sm">{ item.Name}</h3>
                          <span className="flex gap-0.25"><p className="font-Heebo font-light text-xs text-(--text-gray)"> {item.Token}</p> <img src={ item.Images?.Copy} /></span> 
                    <span className="flex gap-0.25"> <p className="font-Heebo font-light text-xs text-(--text-green)">17H </p>
                      <img src={item.Images?.x}></img>
                      <img src={ item.Images?.group } />
                      <img src={ item.Images?.web}/>
                      <img src={ item.Images?.Telegram }/>
                       <img src={ item.Images.Link}/>
                    </span>
                        </div>
                </div>
                <div className="flex flex-col items-end ">
                  <div className="flex items-center"> 
                      <p className="text-(--text-white) font-IBM font-light text-xs"> {`${short(item.Transaction)}`} <span className="text-(--text-gray)"> TXNS</span></p>
                      <p className="text-(--text-white) font-IBM font-light text-xs"> {`${short(item.Liquidity)}`} <span className="text-(--text-gray)"> LIQ</span></p>
                          <p className="text-(--text-white) font-IBM font-light text-xs"> {`${short(item.MeritCycle)}`} <span className="text-(--text-gray)"> MC</span></p>

                       <h2 className="text-(--text-green) font-IBM font-medium text-sm ml-0.5">{item.DailyChange}%</h2>
                  </div>
                  <div className="flex font-IBM text-(--text-gray) font-normal text-xs">
                    <p>18%</p>
                    <figure className="w-2.75 h-2.5 self-center">
                       <img src={item.Images?.Sonar} />
                    </figure>
                   
                    <p className="text-(--text-white)"> {item.AmountHeld}<span className="text-(--text-gray)">/{ `${short(item.TotalAmount)}`} Holding</span> </p>
                  </div>
                </div>
              </div>
            ): (
                <div className='relative h-full w-full ' onClick={() => setActiveId(index)}>
                  <div className="w-full h-full grid place-items-center  bg-(--bd) " style={{ clipPath: "path('M 0%,0% 100%,0% L 100%,85.07% L 74.03%,85.07% L 73.01%,100% L 1.94%,100% L 0%,85.07% L 0%,0% Z')" }} >
                    <div className="w-[99.3%] h-[97%] bg-(--bg-black) px-2 py-1.5 sm:px-[2%] sm:py-[1.5%] flex justify-between" style={{ clipPath: "path('M 0%,0% 100%,0% L 100%,85.07% L 74.03%,85.07% L 73.01%,100% L 1.94%,100% L 0%,85.07% L 0%,0% Z')" }} >
                      <div className="w-42 flex gap-5.5">
                        <figure className="relative  w-18">
                          <img src={item.Images?.PP}></img>
                          <img src={item.Images?.R} className="absolute right-2 bottom-0 z-10"/>
                        </figure>
                        <div className="flex flex-col h-12">
                          <h3 className="text-(--text-white) font-HEEBO font-normal text-sm">{ item.Name}</h3>
                          <span className="flex gap-0.25"><p className="font-Heebo font-light text-xs text-(--text-gray)"> {item.Token}</p> <img src={ item.Images?.Copy} /></span> 
                          <span className="flex gap-0.25"> <p className="font-Heebo font-light text-xs text-(--text-green)">17H </p> <img src={ item.Images?.x}></img> </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <h2 className="text-(--text-green) font-IBM font-medium text-sm">{item.DailyChange}%</h2>
                        <div className="flex  items-center"> 
                          <h3 className="text-(--text-white) font-IBM font-light text-xs"> {`${short(item.Liquidity)}`} <span className="text-(--text-gray)"> LIQ</span></h3>
                          <p className="text-(--text-white) font-IBM font-light text-xs ml-0.5"> {`${short(item.MeritCycle)}`} <span className="text-(--text-gray)"> MC</span></p>
                        </div>
                     </div>

                      </div>
                    </div>
                  <div className="h-2.5 w-32.25 absolute -bottom-0.25 right-0 flex gap-1.25 border-2">
                    <Full />
                    <Full />
                    <Full/>
                    </div>
                </div>
           )
          }
         
       
          </div>
      ))}
    </div>
  )
}

export default Card