import { MutableRefObject, ReactElement, RefObject, useEffect, useState } from "react";

const BgPanel: React.FC<{text: string, active: boolean, bgnum: number}> = ({ text, active, bgnum }): ReactElement => {

    const bg = [
        "radial-gradient(at 51% 47%, rgb(255 0 255) 0px, transparent 50%), radial-gradient(at 41% 27%, rgb(230, 236, 39) 0px, transparent 50%), radial-gradient(at 9% 66%, rgb(68, 175, 228) 0px, transparent 50%), radial-gradient(at 78% 51%, rgb(58, 203, 188) 0px, transparent 50%), radial-gradient(at 1% 11%, rgb(222, 23, 218) 0px, transparent 50%), rgb(201, 49, 196)",
        "radial-gradient(at 63% 73%, rgb(255, 0, 255) 0px, transparent 50%), radial-gradient(at 90% 20%, rgb(230, 236, 39) 0px, transparent 50%), radial-gradient(at 24% 89%, rgb(68, 175, 228) 0px, transparent 50%), radial-gradient(at 25% 76%, rgb(58, 203, 188) 0px, transparent 50%), radial-gradient(at 12% 53%, rgb(222, 23, 218) 0px, transparent 50%), rgb(201, 49, 196)",
        "radial-gradient(at 14% 44%, rgb(255, 0, 255) 0px, transparent 50%), radial-gradient(at 33% 14%, rgb(230, 236, 39) 0px, transparent 50%), radial-gradient(at 67% 54%, rgb(68, 175, 228) 0px, transparent 50%), radial-gradient(at 86% 95%, rgb(58, 203, 188) 0px, transparent 50%), radial-gradient(at 53% 29%, rgb(222, 23, 218) 0px, transparent 50%), rgb(201, 49, 196)",
    ];

    return (
        <div className="bgpanel" style={{ "display": active ? "flex" : "none", "background": bg[bgnum] }}>
            <h1 className="bgpanel-text">{text}</h1>
        </div>
    )
}

const Background: React.FC<{test: MutableRefObject<any>}> = ({ test }) => {

    const [active, setActive] = useState(0);

    /*
    const randomize = () => {
        const c = ["rgb(255, 0, 255)", "rgb(230, 236, 39)", "rgb(68, 175, 228)", "rgb(58, 203, 188)", "rgb(222, 23, 218)"];
        let str = "";
        c.forEach(x => {
            str += " radial-gradient(at " + (Math.round(Math.random() * 100) + "% " + (Math.round(Math.random() * 100)) + "%, " + x + " 0px, transparent 50%), ");
        });
        str += "rgb(201, 49, 196)";
        return str;
    }
    */

    useEffect(() => {
        test.current = setActive;
    }, []);

    return (
        <div id="background">
            <BgPanel active={active === 0} text="Hey there, I'm George" bgnum={0} />
            <BgPanel active={active === 1} text="Here are some projects I've worked on" bgnum={1} />
            <BgPanel active={active === 2} text="Here's how you can contact me" bgnum={2} />
        </div>
    )
}

export default Background;