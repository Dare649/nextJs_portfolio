import Image from "next/image"

const Card = ({
  src,
  alt,
  title,
  text
}) => {
  return (
    <div className="w-full border-2 border-blue-500 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-full rounded-sm ">
      <Image
        src={src}
        alt={alt}
        width="fill"
        className="img w-full h-40"
      />
      <div className="content w-full  py-10">
        <h1 className="capitalize text-3xl font-bold my-5 text-center">{title}</h1>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  )
}

export default Card
