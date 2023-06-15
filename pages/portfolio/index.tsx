import { ReactElement, useRef, useEffect } from "react";

import { ReactComponent as ArrowDown } from 'public/arrow-down.svg';
import { ReactComponent as ArrowUp } from 'public/arrow-up.svg';


import Background from "@/components/Background";
import Panel from "@/components/Panel";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

const Portfolio: React.FC = (): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const revealStats = () => {
        setTimeout(() => {
            let qf = document.querySelector<HTMLElement>(".quick-facts");
            if (qf) {
                qf.style.display = "block";
                if (ref.current) {
                    ref.current.querySelector<HTMLElement>("#test")!.style.height = (ref.current.querySelector<HTMLElement>(".about-paragraph")!.offsetHeight + ref.current.querySelector<HTMLElement>(".quick-facts")!.offsetHeight + 50) + "px";
                }
                setTimeout(() => {
                    if (qf) qf.style.opacity = "100%";
                    events.current[0].done = true;
                }, 1250);
            }
        }, 100);

    }

    const test = useRef((n: number) => { });

    const events = useRef([
        { "panel": 1, "offset": 0, "action": revealStats, "done": false },
        { "panel": 0, "offset": 0, "action": () => test.current(0), "done": false },
        { "panel": 1, "offset": .1, "action": () => test.current(1), "done": false },
        { "panel": 3, "offset": .1, "action": () => test.current(2), "done": false },
    ]);


    const panels = useRef<NodeListOf<HTMLElement>>();


    const triggerEvents = () => {
        events.current.forEach(event => {
            if (event.done === false && window.scrollY >= (panels.current![event.panel].offsetTop + (event.offset * window.innerHeight))) {
                event.action();
            }
        })
    }



    useEffect(() => {
        window.addEventListener("scroll", triggerEvents);
        panels.current = document.querySelectorAll("*[data-panel]");
    }, []);


    const scrollToNext = (direction: number) => {
        let closest = 0;
        for (let i = 1; i < panels.current!.length; i++) {
            console.log(i, Math.abs(window.scrollY - Math.abs(panels.current![i].offsetTop)), Math.abs(window.scrollY - Math.abs(panels.current![closest].offsetTop)));
            if (Math.abs(window.scrollY - Math.abs(panels.current![i].offsetTop)) < Math.abs(window.scrollY - Math.abs(panels.current![closest].offsetTop))) {
                closest = i;
            }
        }
        if ((direction === 1 && closest !== panels.current!.length - 1) || (direction === -1 && closest !== 0)) {
            closest += direction;
        }
        window.scrollTo({ "left": window.scrollX, "top": panels.current![closest].offsetTop + (window.innerHeight * .1), "behavior": "smooth" });
    }


    return (
        <div className="portfolio">
            <div className="scroll-btns">
                <button className="scroll-btn" onClick={() => scrollToNext(-1)}>
                    {/*<ArrowUp */} {"/\\"}
                </button>
                <button className="scroll-btn" onClick={() => scrollToNext(1)}>
                    {/*<ArrowDown />*/}{"\\/"}
                </button>
            </div>

            <Background test={test} />

            <div className="potfolio-panels" ref={ref}>
                <Panel num={0} />
                <Panel num={1}>
                    <About />
                </Panel>
                <Panel num={2} />
                <Panel num={3}>
                    <Projects />
                </Panel>
                <Panel num={4} />
                <Panel num={5}>
                    <Contact />
                </Panel>
            </div>
        </div >
    );
}

export default Portfolio;