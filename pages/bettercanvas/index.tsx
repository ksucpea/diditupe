import { ReactElement } from "react";

const BCHome: React.FC = (): ReactElement => {

    return (
        <div style={{ "minHeight": "100vh", "width": "100vw", "background": "#161616", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
            <div >
                <h1 className="bettercanvas" style={{ "fontSize": "72px", "display": "inline-block", "textAlign": "center" }}>Better Canvas</h1>
                <p className="bettercanvas-links">Available on <a href="https://chrome.google.com/webstore/detail/better-canvas/cndibmoanboadcifjkjbdpjgfedanolh">Chrome</a> and <a href="https://addons.mozilla.org/en-US/firefox/addon/better-canvas/">Firefox</a></p>
            </div>
        </div>
    )
}

export default BCHome;