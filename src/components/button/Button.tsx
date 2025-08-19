import "./style.css";

interface ButtonProps {
  cls?: string;
  variant?: "primary" | "icon";
  color?: "primary" | "blue" | "green" | "red" | "yellow" | "purple";
  type?: "button" | "submit";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  cls = "",
  variant = "primary",
  color = "primary",
  type = "button",
  icon = null,
  children,
  disabled,
  onClick = () => null,
}) => {
  const classNames = [
    "omnicoder-ui-button",
    "omnicoder-ui-button-base",
    `omnicoder-ui-button-base-variant-${variant}`,
    `omnicoder-ui-button-base-color-${color} ${cls}`,
    cls,
  ];

  return (
    <button className={classNames.join(" ")} type={type} disabled={disabled} onClick={onClick}>
      <div className="omnicoder-ui-button-base-icon">{icon}</div>
      <div className="omnicoder-ui-button-base-content">{children}</div>
    </button>
  );
};

export default Button;
