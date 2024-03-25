import { stacks } from "@components/dummy"
import ProgressBar from "@components/ProgressBar"

const Technologies = () => {
  const first = stacks.slice(0, 4);
  const second = stacks.slice(4, 8);
  const third = stacks.slice(8, 12);
  const fourth = stacks.slice(12, 16);

  return (
    <div className="lg:px-5 sm:px-2">
      <h1 className="text-red-500 text-2xl font-bold mb-10 capitalize">technologies</h1>
      <div className="flex lg:flex-row sm:flex-col items-center justify-between gap-y-5">
        <ProgressBar data={first}/>
        <ProgressBar data={second}/>
        <ProgressBar data={third}/>
        <ProgressBar data={fourth}/>
      </div>
    </div>
  )
}

export default Technologies
