import { ReactElement } from "react";

const BCGoodbye: React.FC = (): ReactElement => {
    return (
        <div style={{ "minHeight": "100vh", "background": "#161616", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
            <div>
                <div className="bc-container">
                    <h1 style={{ "fontSize": "34px", "fontWeight": "bold" }}>Hi there! It seems like you&apos;re uninstalling <span className="bettercanvas">Better Canvas.</span></h1>
                </div>
                <div className="bc-container">
                    <div style={{ "gap": "30px", "alignItems": "center", "color": "#b5b5b5" }}>
                        <p>If you had any problems or have an idea, please let me know. My email is <span style={{ "fontWeight": "bold" }}>ksucpea@gmail.com</span> - any feedback is appreciated!</p>
                        <p style={{ "marginTop": "10px", "fontSize": "12px" }}>Or if you&apos;re graduating and no longer need this extension, congrats! :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BCGoodbye;