import { ReactElement } from "react";

const Info: React.FC<{title: string, description: string}> = ({ title, description }): ReactElement => {

    return (
        <div className="info">
            <h3 style={{ "fontSize": "16px", "fontWeight": "bold", "minWidth": "160px" }}>{title}</h3>
            <span style={{ "color": "#a9a9a9", "fontSize": "16px" }}>{description}</span>
        </div>
    )
}

const About: React.FC = (): ReactElement => {
    return (
        <div id="test" className="about">
            <p className="about-paragraph">I&apos;m 20 years old and from Maryland. I picked up coding during the pandemic and loved it, so I&apos;m now attending the University of Maryland for computer science. I mostly use Javascript right now, but would be open to any role and would love to expand my knowledge of other languages and techniques.</p>
            <div className="quick-facts">
                <Info title="Location" description="College Park, MD" />
                <Info title="Graduating" description="2025" />
                <Info title="Courses taken" description="Computer Systems, OOP I & II, Discrete Structures, Linear Algebra, Statistics I" />
                <Info title="Skills" description="Javsacript, HTML, CSS, React.js, C, Java" />
            </div>
        </div>
    )
}

export default About;