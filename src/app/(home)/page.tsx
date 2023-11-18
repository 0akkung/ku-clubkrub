import SearchBar from "@/components/ui/searchbar";

export default function Home() {
  return (
      <div className="w-full">
          <h1 className="mb-4 font-semibold text-2xl md:text-4xl">
            ชมรม
          </h1>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <SearchBar placeholder="ค้นหาชมรม..." />
            </div>
      </div>
  )
}
