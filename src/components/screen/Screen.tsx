import "../omnicoder-ui-style.css";
import "./style.css";

interface ScreenProps {
  cls?: string;
  theme?: "light" | "dark";
  children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ cls = "", theme = "light", children }) => {
  return (
    <div className={`omnicoder-ui-screen omnicoder-ui-screen-base omnicoder-ui-theme-${theme} ${cls}`}>{children}</div>
  );
};

export default Screen;
