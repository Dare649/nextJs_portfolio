import { stacks } from "@components/dummy"
import ProgressBar from "@components/ProgressBar"

const Technologies = () => {
  const first = stacks.slice(0, 3);
  const second = stacks.slice(3, 7);
  const third = stacks.slice(7, 10);

  return (
    <div className="lg:px-5 sm:px-2">
      <h1 className="text-red-500 text-2xl font-bold mb-10 capitalize">technologies</h1>
      <div className="flex lg:flex-row sm:flex-col items-center justify-between gap-y-5">
        <ProgressBar data={first}/>
        <ProgressBar data={second}/>
        <ProgressBar data={third}/>
      </div>
    </div>
  )
}

export default Technologies
