import "./style.css";

interface CardProps {
  cls?: string;
  variant?: "primary";
  header: CardHeader;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

type CardHeader = {
  headless?: boolean;
  title?: React.ReactNode;
  component?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ cls = "", variant = "primary", header, footer, children }) => {
  const classNames = ["omnicoder-ui-card", "omnicoder-ui-card-base", `omnicoder-ui-card-base-variant-${variant}`, cls];

  return (
    <div className={classNames.join(" ")}>
      {!header.headless ? (
        header.component ? (
          header.component
        ) : (
          <div className={`omnicoder-ui-card-base-variant-${variant}-header`}>
            <div className={`omnicoder-ui-card-base-variant-${variant}-header-title`}>{header.title}</div>
          </div>
        )
      ) : (
        <div></div>
      )}
      <div className={`omnicoder-ui-card-base-variant-${variant}-content`}>{children}</div>
      {footer ? footer : <div></div>}
    </div>
  );
};

export default Card;
