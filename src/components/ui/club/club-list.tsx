import ClubCard from "@/components/ui/club/club-card";

export default async function ClubList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <p>No Club Yet</p>
            {/*{*/}
            {/*    (clubs as any).map((club: any) =>*/}
            {/*        <ClubCard key={club.id} {...club} />*/}
            {/*    )*/}
            {/*}*/}
        </div>
    )
}