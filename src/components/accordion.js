import React, { useState } from 'react'

function Accordion({title, description}) {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenAccordion=() => {
        setIsOpen(isOpen => !isOpen)
    }

    return (
        <div className="accordion-section">
            <ul>
                <li className="accordion-list">
                    <h5 className={`accordion-title ${isOpen ? "open" : ""}`}
                        onClick={handleOpenAccordion}
                    >
                    {title}
                    </h5>
                    <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                    <p className="accordion-content">{description}</p>
                    </div>
                </li>
                
            </ul>
            
        </div>
    )
}

export default Accordion
