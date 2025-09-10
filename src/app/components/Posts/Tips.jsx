import { tipsArticle } from "@/app/data/tipsArticle";
import SectionDescription from "./SectionDescription";

const Tips = () => {
    return (
        <section>
            <SectionDescription title="Tips for Sudanese Programmers" />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
                {tipsArticle.length === 0 ? (
                    <div
                        className="col-12 d-flex justify-content-center align-items-center"
                        style={{ minHeight: "80vh" }}
                    >
                        <h2>Blog is Empty</h2>
                    </div>
                ) : (
                    tipsArticle.map((tip) => (
                        <div className="col" key={tip.id}>
                            <div className="card h-100 border-0 bg-gray-800  rounded-4 p-4 overflow-hidden shadow-sm transition-transform duration-300 text-light hover:shadow-lg hover:-translate-y-1">
                                <div className="d-flex flex-column">
                                    <div
                                        className="d-flex justify-content-center align-items-center rounded-circle bg-red  text-white"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                        }}
                                    >
                                        {tip.logo}
                                    </div>
                                    <h5 className="mt-3 fw-bold">
                                        {tip.title}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Tips;
