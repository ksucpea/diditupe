import { Props } from "next/script";

const Panel: React.FC<{ num: number, children?: React.ReactNode }> = ({ num, children }) => {
    return (
        <div className={"portfolio-panel" + (num % 2 === 0 ? " empty" : "")} data-panel={num} >
            {children}
        </div>
    )
}

export default Panel;