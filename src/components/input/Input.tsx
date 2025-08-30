import "./style.css";

interface InputProps {
  cls?: string;
  variant?: "primary";
  type?: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "text" | "time" | "week";
  id: string;
  label?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  value?: number | string | readonly string[];
  icon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  required?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  cls,
  variant,
  id,
  type = "text",
  label,
  placeholder,
  min,
  max,
  value,
  icon,
  loadingIcon,
  required,
  readOnly,
  loading,
  disabled,
  onChange,
}) => {
  return (
    <div className={`omnicoder-ui-input omnicoder-ui-input-base omnicoder-ui-input-base-variant-${variant} ${cls}`}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
