export default function PokemonType() {
  return (
    <div className="flex flex-col justify-center px-50 py-10 border-2 border-green-500 border-dotted">
      <div>
        <h3 className="text-2xl text-center  font-bold text-black/100">Type</h3>
      </div>
      <div className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-white font-semibold">
        <p className="text-center">Dynamic</p>
      </div>
      <div className="flex flex-row justify-center space-x-4">
        <p>Weight: DYNAMIC</p>
        <p>Height: DYNAMIC</p>
      </div>
    </div>
  );
}
