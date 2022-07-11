import React from "react"

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="d-flex px-5 py-3 justify-content-between border-top border-white border-2 text-white">
                <div>
                    Copyright © 2022 GENA
                </div>
                <div>
                	<a className="text-white" href="https://github.com/AlexisGbg/green-energy-alert">
                        github.com/AlexisGbg/green-energy-alert
                    </a>
                </div>
            </footer>
        )
    }
}