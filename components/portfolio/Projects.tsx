import { MutableRefObject, ReactElement, useRef } from "react";
import Image from 'next/image';

const Project: React.FC<{ title: string, description: string, tags: Array<string>, img: string, href: string, descriptionLong: string }> = ({ title, description, tags = [], img = "", href = "", descriptionLong }): ReactElement => {

    const mouseEnter = (): void => {
        document.querySelector("#hovertext")!.textContent = descriptionLong;
    }

    const mouseLeave = (): void => {
        document.querySelector("#hovertext")!.textContent = "";
    }

    return (
        <a className="portfolio-project" href={href} onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave }>
            <div className="project-img-container">
                <Image src={img} className="project-img" height={80} width={80} alt={title} />
            </div>
            <div className="project-info">
                <h4 className="project-title">{title}</h4>
                <p className="project-description">{description}</p>
                {/*
          <div style={{ "display": "flex", "gap": "8px", "marginTop": "8px" }}>
            {tags.map(tag => {
              return <Tag name={tag} />
            })}
          </div>
          */}
            </div>
        </a>
    )
}

const ProjectHoverText: React.FC = (): ReactElement => {

    return (
        <div className="hovertext-container">
            <p id="hovertext"></p>
        </div>
    )
}

const Projects: React.FC = (): ReactElement => {

    const descriptionsLong = [
        "Modifies the Canvas website by accessing the Canvas API to add features such as an assignments list, GPA calculator, to-do list, and dark mode for students",
        "Serves as the client’s photography portfolio to allow easier access for customers to view past photography work",
        "Collects nutritional data for food being served at UMD dining halls to give users the ability to record, track, and visualize their calorie intake and weight progress",
        "Gets stock data from the Yahoo Finance API to display real time stock information on an LED matrix display",
        "Collects listings from Facebook Marketplace queries to provide advanced filtering, price data analysis, and enhanced information about marketplace listings",
        "Nonograms are logic puzzles with the aim being to fill in squares to make a picture, usually creating pixel art. Created for CSC1351 final project",
        "My website",
    ]

    const descriptions = [
        "Browser extension",
        "Portfolio website",
        "Browser extension",
        "LED matrix stock ticker",
        "Browser extension",
        "Logic puzzle game",
        "You're on it right now!",
    ]

    return (
        <div className="projects">
            <ProjectHoverText />
            <Project tags={["Javascript", "Extension", "50,000+ users"]} title="Better Canvas" descriptionLong={descriptionsLong[0]} description={descriptions[0]} href={"https://chrome.google.com/webstore/detail/better-canvas/cndibmoanboadcifjkjbdpjgfedanolh"} img={"/portfolio/bc.png"} />
            <Project tags={["Javascript", "React.js"]} title="howieflicks.com" descriptionLong={descriptionsLong[1]} description={descriptions[1]} href={"https://howieflicks.com"} img={"/portfolio/hf.png"} />
            <Project tags={["C++", "Arduino"]} title="Stock Ticker" descriptionLong={descriptionsLong[3]} description={descriptions[3]} href={"https://github.com/ksucpea/ticker"} img={"/portfolio/ticker.png"} />
            <Project tags={["Javascript", "Extension"]} title="Marketplace Helper" descriptionLong={descriptionsLong[4]} description={descriptions[4]} href={"https://github.com/ksucpea/marketplacehelper"} img={"/portfolio/mh.png"} />
            <Project tags={["Java"]} title="Nonogram Game" descriptionLong={descriptionsLong[5]} description={descriptions[5]} href={"https://github.com/ksucpea/nonogram"} img={"/portfolio/nonogram.png"} />
            <Project tags={["Javascript", "Extension"]} title="UMD Calorie Tracker" descriptionLong={descriptionsLong[2]} description={descriptions[2]} href={"https://github.com/ksucpea/umdcalorie"} img={"/portfolio/umdct.png"} />
            <Project tags={["Javascript", "React.js"]} title="janyeport.com" descriptionLong={descriptionsLong[1]} description={descriptions[1]} href={"https://janyeport.com"} img={"/portfolio/jp.png"} />
            <Project tags={["Javascript", "React.js"]} title="diditupe.dev" descriptionLong={descriptionsLong[6]} description={descriptions[6]} href={"https://diditupe.dev"} img={"/portfolio/diditupe.png"} />
        </div>
    )
}

export default Projects;