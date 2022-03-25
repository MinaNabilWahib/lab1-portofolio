import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faDesktop, faBrain, faCalculator } from '@fortawesome/free-solid-svg-icons'
import PrograssBar from "./ProgressBar";

class Skills extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="skills" id="skills">
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 className="pb-2 border-bottom">Skills</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <FontAwesomeIcon icon={faCheckSquare} />
                            </div>
                            <div>
                                <h2>Front End Development</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <PrograssBar w='50%' />
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <FontAwesomeIcon icon={faDesktop} />
                            </div>
                            <div>
                                <h2>Back End Development</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <PrograssBar w='60%' />
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <FontAwesomeIcon icon={faCoffee} />
                            </div>
                            <div>
                                <h2>Full Stack Development</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <PrograssBar w='70%' />
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <FontAwesomeIcon icon={faBrain} />
                            </div>
                            <div>
                                <h2>UI/UX Designing</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <PrograssBar w='80%' />
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <FontAwesomeIcon icon={faCalculator} />
                            </div>
                            <div>
                                <h2>Code Consultant</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <PrograssBar w='90%' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;