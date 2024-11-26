import React from "react";

const Tips = () => {
    return (
        <div className="container my-4">
            <h1 className="text-center">Disaster Preparedness Tips</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Floods</h3>
                    <p>Move to higher ground immediately. Avoid walking or driving through floodwaters.</p>
                </div>
                <div className="col-md-6">
                    <h3>Earthquakes</h3>
                    <p>Drop, cover, and hold on. Stay away from windows, and secure heavy furniture beforehand.</p>
                </div>
                <div className="col-md-6">
                    <h3>Hurricanes</h3>
                    <p>Follow evacuation orders. Stock emergency supplies and avoid coastal areas.</p>
                </div>
                <div className="col-md-6">
                    <h3>Wildfires</h3>
                    <p>Stay indoors unless told to evacuate. Have an emergency kit ready with essentials.</p>
                </div>
            </div>
        </div>
    );
};

export default Tips;
