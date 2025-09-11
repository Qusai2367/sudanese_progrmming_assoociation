import Image from "next/image";
const ArticleImage = ({source,altrenative}) => {
  return (
      <div className="w-100 position-relative" style={{ height: "100vh" }}>
          <Image
              src={source}
              alt={altrenative}
              layout="fill"
              objectFit="cover"
              className="rounded-5"
          />
      </div>
  );
}

export default ArticleImage
