"use client";
import { ReactElement, useEffect, useState } from "react";

const PageController: React.FC<{ fadeTime: number }> = ({ fadeTime }): ReactElement => {
  const location = "clock";
  const [path, setPath] = useState(location);

  useEffect(() => {
    const page = document.getElementById("page") || document.documentElement;
    page.style.opacity = "0";

    window.onpopstate = () => {
      page.style.opacity = "0";
    }

    setTimeout(() => {
      setPath(location);
      setTimeout(() => {
        page.style.opacity = "1";
      }, 200);
    }, fadeTime)

  }, [location]);

  const display = () => {
    /*
    console.log(active);
    switch (active) {
      case ("/portfolio"):
        return <Home />
      case ("/bettercanvas/goodbye"):
        return <Bettercanvas />
      case ("/bettercanvas"):
        return <BC />
      default:
        return <Hub />
    }*/
    return "FUCKER!"
  }

  return (
    <div>
      {display()}
    </div>
  );
}

export default PageController;