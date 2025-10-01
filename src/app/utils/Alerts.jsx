import React from "react";

export const SuccessAlerts = ({ success }) => {
    return (
        <div class="alert alert-success" role="alert">
            {success}
        </div>
    );
};

export const infoAlerts = ({info}) => {
    return (
        <div class="alert alert-info" role="alert">
            {info}
        </div>
    );
};

export const DangerAlerts = ({danger}) => {
    return (
        <div class="alert alert-danger" role="alert">
            {danger}
        </div>
    );
};
