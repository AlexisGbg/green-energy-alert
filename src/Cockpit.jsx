import React from "react";

export default class Cockpit extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <div className="d-fex text-center m-5">
                        <div className="bg-secondary text-white p-3 fs-3 mb-2">
                            BEST MOMENT TO CONSUME ELECTRICITY:
                        </div>
                        <div className="bg-white text-secondary px-5 py-3">
                            <div className="d-flex align-center">
                                <div className="align-self-center ps-3 pe-5">
                                    CLOCK
                                </div>
                                <div className="align-self-center text-start lh-sm">
                                    <span className="fs-3">IN 3 HOURS!</span> <br/>
                                    or tomorrow around 12:30
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2" />
            </div>
        )
    }
}
