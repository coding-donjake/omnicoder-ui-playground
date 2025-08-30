import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  cls?: string;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  config?: ButtonConfig;
}

type ButtonConfig = {
  variant?: "primary" | "icon";
  color?: "primary" | "blue" | "green" | "red" | "yellow" | "purple";
  alignContent?: "left" | "center" | "right";
  iconPosition?: "left" | "right";
  edgeIcon?: boolean;
};

const defaultButtonConfig: Partial<ButtonConfig> = {
  variant: "primary",
  color: "primary",
  edgeIcon: false,
  iconPosition: "left",
  alignContent: "left",
};

const Button: React.FC<ButtonProps> = ({
  cls = "",
  type = "button",
  icon,
  loading,
  loadingIcon,
  disabled,
  children,
  onClick,
  config,
}) => {
  const finalConfig = { ...defaultButtonConfig, ...config };

  let flexDirection = undefined;
  if (finalConfig.iconPosition == "left") flexDirection = "flex-row";
  else if (finalConfig.iconPosition == "right") flexDirection = "flex-row-reverse";

  let alignContent = undefined;
  if (finalConfig.alignContent == "left") alignContent = flexDirection == "flex-row" ? "justify-start" : "justify-end";
  else if (finalConfig.alignContent == "center") alignContent = "justify-center";
  else if (finalConfig.alignContent == "right")
    alignContent = flexDirection == "flex-row" ? "justify-end" : "justify-start";

  return (
    <button
      className={`omnicoder-ui-button omnicoder-ui-button-base omnicoder-ui-button-base-variant-${finalConfig.variant} omnicoder-ui-button-base-color-${finalConfig.color} ${alignContent} ${flexDirection} ${cls}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon ? (
        loading ? (
          loadingIcon ? (
            <div className="omnicoder-ui-button-base-icon omnicoder-ui-icon-spinner">{loadingIcon}</div>
          ) : (
            <div className="omnicoder-ui-button-base-icon omnicoder-ui-icon-spinner">
              {<FontAwesomeIcon icon={faSpinner} />}
            </div>
          )
        ) : (
          <div className="omnicoder-ui-button-base-icon">{icon}</div>
        )
      ) : null}
      <div className={`flex ${alignContent} ${flexDirection} ${finalConfig.edgeIcon ? "flex-1" : ""}`}>{children}</div>
    </button>
  );
};

export default Button;
