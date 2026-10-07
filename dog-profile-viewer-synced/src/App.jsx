import { useState, useEffect } from "react";
import axios from "axios";
import DogCard from "./components/DogCard";

const DOG_URL = "https://api.freeapi.app/api/v1/public/dogs/dog/random";

const preloadImage = (url) =>
  new Promise((resolve) => {
    if (!url) return resolve();
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = resolve;
  });

export default function App() {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDogDetails = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await axios.get(DOG_URL);
      const body = response.data;

      if (!body.success || !body.data) {
        throw new Error(body.message || "Dog data was not returned by the API.");
      }

      await preloadImage(body.data.image?.url);
      setDog(body.data);
    } catch (err) {
      console.error(err);
      setError("Unable to load a dog right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogDetails();
  }, []);

  const getRandomDog = () => {
    fetchDogDetails();
  };

  return (
  <main className="flex min-h-screen items-center justify-center bg-[#6676e0] p-4 sm:p-6">
    {/* First load only: spinner */}
    {isLoading && !dog && (
      <section className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-500" />
        <p className="mt-4 font-semibold text-slate-700">Loading dog...</p>
      </section>
    )}

    {/* Error: unchanged, except it also needs to wait for loading to finish */}
    {!isLoading && error && (
      <section className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        <h1 className="text-xl font-extrabold text-slate-900">Something went wrong</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">{error}</p>
        <button
          type="button"
          onClick={fetchDogDetails}
          className="mt-5 rounded-lg bg-orange-400 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200"
        >
          Try Again
        </button>
      </section>
    )}

    {/* Card stays on screen while a new dog loads */}
    {dog && !error && (
      <DogCard dog={dog} isLoading={isLoading} getRandomDog={getRandomDog} />
    )}
  </main>
);

}