import ProviderCard from "./ProviderCard";

const ServicesList = ({ providers, limit }) => {
    const safeProviders = Array.isArray(providers) ? providers : [];
    const displayItems =
        typeof limit === "number"
            ? safeProviders.slice(0, limit)
            : safeProviders;

    return (
        <div className="experience-grid">
            {displayItems.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
            ))}
        </div>
    );
};

export default ServicesList;
