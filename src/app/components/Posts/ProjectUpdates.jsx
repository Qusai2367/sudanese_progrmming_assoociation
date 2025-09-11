import { projectUpdate } from "@/app/data/projectUpdate";
import Image from "next/image";

const ProjectUpdates = () => {
    return (
        <section>
            <div className=" p-4">
                {projectUpdate.length === 0 ? (
                    <div
                        className="col-12 d-flex justify-content-center align-items-center"
                        style={{ minHeight: "80vh" }}
                    >
                        <h2>Blog is Empty</h2>
                    </div>
                ) : (
                    projectUpdate.map((project) => (
                        <div
                            className="card  p-3 mb-4 border-0 bg-gray-800 rounded-4 shadow-sm overflow-hidden text-light"
                            key={project.id}
                        >
                            <div className="d-flex flex-column flex-md-row align-items-center gap-4">

                                <div className="flex-1 w-100 order-0 order-md-1 mb-3 mb-md-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid w-100 rounded-3"
                                        style={{
                                            height: "200px",
                                            // width: "50%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                          
                                <div className="flex-1 d-flex flex-column justify-content-center text-center text-md-start order-1 order-md-0">
                                    <h5 className="fw-bold">{project.title}</h5>
                                    <p className="text-secondary small mb-3">
                                        {project.description}
                                    </p>
                                    <button
                                        className="btn btn-light rounded-pill fw-semibold p-2 mx-auto mx-md-0"
                                        style={{
                                            width: "120px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default ProjectUpdates;
