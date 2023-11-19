import {fetchClub} from "@/lib/data";
import ClubCard from "@/components/ui/club/club-card";

export default async function ClubList() {
    const clubs = await fetchClub();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {
                (clubs as any).map((club: any) =>
                    <ClubCard key={club.id} {...club} />
                )
            }
        </div>
    )
}