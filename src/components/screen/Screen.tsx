import "./style.scss";

interface ScreenProps {
  cls?: string;
  theme?: "light" | "dark";
  children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ cls = "", theme = "light", children }) => {
  return (
    <div className={`omnicoder-ui-screen omnicoder-ui-theme-${theme} ${cls}`}>
      <div className="omnicoder-ui-screen-content">
        <div className="omnicoder-ui-screen-content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Screen;
