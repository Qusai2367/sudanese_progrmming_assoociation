import { teams } from "@/app/data/team";
import Image from "next/image";

export default function Team() {
    return (
        <>
            <div className="section-header">
                <h2>Meet Our Team</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m4 p-4 text-center justify-content-center">
                {teams.map((team) => (
                    <div key={team.id} className="col ">
                        <Image
                            src={team.photo}
                            alt="Association logo"
                            className="img-fluid rounded-circle bg-gray-400"
                            // width={70}
                            // height={70}
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                        <h4 className="mt-3 text-gray-700">{team.name}</h4>
                        <p>{team.positon}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
