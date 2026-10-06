import InfoItem from "./InfoItem";

export default function DogCard({ dog, isLoading, getRandomDog }) {
  const imageUrl = dog?.image?.url;

  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-3 shadow-2xl sm:p-4">
      <div className="overflow-hidden rounded-xl bg-slate-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={dog.name || "Dog"}
            className="h-64 w-full object-cover transition duration-300 hover:scale-[1.02] sm:h-72"
          />
        ) : (
          <div className="flex h-64 items-center justify-center text-sm text-slate-500 sm:h-72">
            Image unavailable
          </div>
        )}
      </div>

      <div className="px-1 pb-1 pt-3">
        <h1 className="text-center text-2xl font-extrabold text-slate-900">
          {dog.name || "Unknown Dog"}
        </h1>

        <div className="mt-4 space-y-2">
          <InfoItem label="Breed Group" value={dog.breed_group} />
          <InfoItem label="Bred For" value={dog.bred_for} />
          <InfoItem label="Life Span" value={dog.life_span} />
          <InfoItem label="Temperament" value={dog.temperament} />
          <InfoItem label="Height" value={dog.height?.imperial ? `${dog.height.imperial} in` : null} />
          <InfoItem label="Weight" value={dog.weight?.imperial ? `${dog.weight.imperial} lb` : null} />
        </div>

        <button
          type="button"
          onClick={getRandomDog}
          disabled={isLoading}
          className="mt-4 w-full rounded-lg bg-orange-400 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "fetching..." : "Get Random Dog"}
        </button>
      </div>
    </article>
  );
}
