import Image from 'next/image';


const MainHero = () => {
    return (
        <section className="d-flex flex-column flex-lg-row align-items-center justify-content-between spacing">
            <div className="text-start d-flex flex-column gap-3">
                <span className="text-main fw-bold">Hello!</span>
                <h1 className="text-white fw-bold display-4 lh-tight fs-7">
                    Sudanese,
                    <br /> Programming Association
                </h1>
                <h3
                    className="fs-5 fw-normal lh-base"
                    style={{ maxWidth: "35rem", color: "#99a1af" }}
                >
                    From Sudan To The World , We Are Code Your Vison;
                </h3>

                <p>We are A team Of Sudanese developers providing digital soluation to businesses grow!</p>
                <div className="d-flex gap-3 mt-3">
                    <button className="btn bg-remain text-white fw-bold px-4 py-2 rounded-pill">
                        Portfolio
                    </button>
                    <button className="btn btn-outline-light fw-bold px-4 py-2 rounded-pill fs-normal lets">
                        Let's Build 
                    </button>
                </div>
                <div className="d-flex gap-4 mt-4">
                    <div>
                        <h3 className="text-white fw-bold">450+</h3>
                        <span className="text-gra">Client Served</span>
                    </div>
                    <div>
                        <h3 className="text-main fw-bold">10 Years</h3>
                        <span className="text-gra">Experts</span>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default MainHero
