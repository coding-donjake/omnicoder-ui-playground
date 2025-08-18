import "./style.scss";

interface CardProps {
  cls?: string;
  variant?: "primary";
  headless?: boolean;
  title?: React.ReactNode;
  footless?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  cls = "",
  variant = "primary",
  headless = false,
  title,
  footless = false,
  footer,
  children,
}) => {
  const classNames = ["omnicoder-ui-card", "omnicoder-ui-card-base", `omnicoder-ui-card-base-variant-${variant}`, cls];

  return (
    <div className={classNames.join(" ")}>
      <div className={`omnicoder-ui-card-base-variant-${variant}-header`}>
        {!headless ? <div className={`omnicoder-ui-card-base-variant-${variant}-header-title`}>{title}</div> : null}
      </div>
      <div className={`omnicoder-ui-card-base-variant-${variant}-content`}>{children}</div>
      {!footless ? <div className={`omnicoder-ui-card-base-variant-${variant}-footer`}>{footer}</div> : null}
    </div>
  );
};

export default Card;
