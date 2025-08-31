import "../omnicoder-ui-style.css";
import "./style.css";

interface ScreenProps {
  cls?: string;
  theme?: "light" | "dark";
  children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ cls = "", theme = "light", children }) => {
  return (
    <div className={`omnicoder-ui-screen omnicoder-ui-screen-base omnicoder-ui-theme-${theme} ${cls}`}>
      <div className="omnicoder-ui-screen-base-content">
        <div className="omnicoder-ui-screen-base-content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Screen;
