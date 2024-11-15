import { SiPolestar } from "react-icons/si";

export function Footer() {
  return (
    <div className="mt-52 h-44 bg-gray-800">
      <div className="m-0 m-auto max-w-6xl">
        <h1 className="pt-10 pb-4 flex justify-center text-white text-3xl gap-1">
          <span className="flex items-center gap-1 text-3xl font-bold">
            Ztaar <SiPolestar />{" "}
          </span>
        </h1>
        <div className="flex justify-center text-white gap-4 text-sm">
          <span>terms and privacy</span>
          <span>Send us feedback</span>
          <span>help</span>
          <p>1996-2023, movies.com,inc. or its affiliaties</p>
        </div>
      </div>
    </div>
  );
}
