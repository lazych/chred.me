export default function Bar() {
  return (
    <div type="button" className="min-w-fit flex items-center gap-2 py-2 px-3 text-xs  focus:outline-none  rounded-full border  bg-white/5 text-textColor border-mainGray hover:bg-white/10">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>

      <div>
        open to work, reach me via{" "}
        <span className="underline">
          <a href="mailto:redouancherrat@gmail.com">email</a>
        </span>
      </div>
    </div>
  )
}
