import React from "react"
import WindTurbine from "./wind-turbine.jpg"
import NoCO2 from "./no-co2.jpg"
import WhiteFlag from "./white-flag.jpg"

export default class Info extends React.Component {
    render() {
        return(
            <div className="d-flex">
                <div className="bg-secondary fs-3 text-white px-3 py-2 mx-5 align-self-center">
                    WHY?
                </div>
                <div className="col-9 p-5">
                    <Text />
                </div>

            </div>
        )
    }
}

class Text extends React.Component {
    render() {
        return(
            <div className="container bg-light px-5 py-3 rounded-3">
                <div className="row">
                    <div className="col-3 text-center">
                        <img src={WindTurbine} width={100}></img>
                    </div>
                    <div className="col-9">
                        <h3>Better use of green energy</h3>
                        <p>
                            Green energies cannot be stored. The production is not adaptable to the demand. 
                            But WE are adaptable, and can consume green energy when they are produce. For 
                            most household, starting a washing maschine / plug in your electric car / heat 
                            your water / charge your phone at 15:00 instead of 18:00 is indeed possible!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 text-center"> 
                        <img src={NoCO2} width={100}></img>
                    </div>
                    <div className="col-9">
                        <h3>A decarbonized electricity</h3>
                        <p>
                            As a result, countries will have less need to activate coal-fired power plants
                            or/and other more polluting energy sources to answer the needs of the population.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3  text-center">
                        <img src={WhiteFlag} width={100}></img>
                    </div>
                    <div className="col-9">
                        <h3>Energetic independancy</h3>
                        <p>
                            The more we use from the energy produced in our country, the less we depend on
                            energy produced by others. The embargo against Russland and its precious gas 
                            showed us how important this can be.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}