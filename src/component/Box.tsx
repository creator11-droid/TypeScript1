import Single from "./Single"
import { data } from "../data"
const Box = () => {
  return (
    <div className="h-183  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-7.75 border-1 border-(--bd) overflow-hidden">
      <Single title="Recent" data={data} />
      <Single title="Migrating" data={data} />
       <Single title="Completed" data={data}/>
    </div>
  )
}

export default Box