import ProviderCard from "./ProviderCard";

const ServicesList = ({ providers, limit }) => {
    const safeProviders = Array.isArray(providers) ? providers : [];
    const displayItems =
        typeof limit === "number"
            ? safeProviders.slice(0, limit)
            : safeProviders;

    return (
        <div className="container-fluid px-4 py-5">
            <div className="row g-4">
                {displayItems.map((provider) => (
                    <div key={provider.id} className="col-12 col-md-6 col-lg-4">
                        <ProviderCard provider={provider} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesList;
