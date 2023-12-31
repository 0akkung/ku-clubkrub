import Link from "next/link";
import Image from "next/image";
import {Club} from "@/lib/definitions";
import React from "react";
import {Card} from "@/components/ui/card";

interface Props extends Club {}

const ClubCard: React.FC<Props> = ({
        id,
        title,
       branch,

}) => {
    return (
        <Card>
            <Link href={`/clubs/${id}`}>
                <div className="rounded-lg overflow-hidden shadow-md w-full border">
                    <div className="h-40 relative">
                        <Image
                            src="data:image/png;base64,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"
                            alt="Club Picture"
                            layout="fill"
                            objectFit="cover"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="font-bold">{ title }</h2>
                    <p className="text-gray-400 text-sm">{ branch }</p>
                </div>
            </Link>
        </Card>
    )
}

export default ClubCard;