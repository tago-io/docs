import mermaid from "mermaid";
import { useEffect } from "react";

mermaid.initialize({
  startOnLoad: true,
});

const Mermaid = ({ chart, value }: { chart?: string; value?: string }) => {
  const code = value || chart;
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);
  return <div className="mermaid">{code}</div>;
};

export default Mermaid;
