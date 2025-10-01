import Image from "next/image";
const AuthorArticle = ({ source, altrenative, authorName, specialization }) => {
    return (
        <div className="d-flex align-items-center gap-2 my-3">
            <Image
                src={source}
                alt={altrenative}
                width={40}
                height={40}
                className="rounded-circle"
            />
            <div className="service-info">
                <h3 className="service-name">{authorName}</h3>
                <p className="service-type"> {specialization}</p>
            </div>
        </div>
    );
};

export default AuthorArticle;
