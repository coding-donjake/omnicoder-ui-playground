import "./style.css";

interface CardProps {
  cls?: string;
  variant?: "primary";
  header?: CardHeader;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

type CardHeader = {
  headless?: boolean;
  title?: React.ReactNode;
  component?: React.ReactNode;
};

const defaultCardHeader: Partial<CardHeader> = {
  headless: false,
  title: null,
  component: null,
};

const Card: React.FC<CardProps> = ({ cls = "", variant = "primary", header, footer, children }) => {
  const finalheader = { ...defaultCardHeader, ...header };

  return (
    <div className={`omnicoder-ui-card omnicoder-ui-card-base omnicoder-ui-card-base-variant-${variant} ${cls}`}>
      {!finalheader.headless ? (
        finalheader.component ? (
          finalheader.component
        ) : (
          <div className={`omnicoder-ui-card-base-variant-${variant}-header`}>
            <div className={`omnicoder-ui-card-base-variant-${variant}-header-title`}>{finalheader.title}</div>
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
