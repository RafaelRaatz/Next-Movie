interface IMovies {
  name: string;
  image: string;
}

export function CardMovie({ name, image }: IMovies) {
  const image_path = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="h-64 w-40 rounded mt-1 ">
      <h3 className="absolute bg-black/50 w-40 rounded text-xs p-4">{name}</h3>
      <img src={`${image_path}${image}`} alt="image" className="rounded-md" />
    </div>
  );
}
