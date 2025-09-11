import Image from "next/image";
const AuthorArticle = ({ source, altrenative, authorName, specialization }) => {
    return (
        <div className="d-flex align-items-center gap-2">
            <Image
                src={source}
                alt={altrenative}
                width={50}
                height={50}
                className="rounded-circle"
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
                className="mt-3 ml-4"
            >
                <h6 className="card-title text-light  fw-semibold">
                    {authorName}
                </h6>
                <p className="fs-6 fw-normal lh-base text-gra">
                    {specialization}
                </p>
            </div>
        </div>
    );
};

export default AuthorArticle;
