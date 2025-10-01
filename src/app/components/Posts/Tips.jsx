import { tipsArticle } from "@/app/data/tipsArticle";
import SectionDescription from "./SectionDescription";

const Tips = () => {
    return (
        <section>
            <SectionDescription title="Tips for Sudanese Programmers" />
            <div className="experience-grid">
                {tipsArticle.length === 0 ? (
                    <div
                        className="col-12 d-flex justify-content-center align-items-center"
                        style={{ minHeight: "80vh" }}
                    >
                        <h2>Blog is Empty</h2>
                    </div>
                ) : (
                    tipsArticle.map((tip) => (
                        <div className="service-card " key={tip.id}>
                            <div >
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
