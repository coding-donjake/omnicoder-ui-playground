import Card from "./components/card/Card";

interface WrapperProps {
  title?: string;
  children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium text-3xl">{title}</h1>
      <div className="flex flex-row">
        <div className="omnicoder-ui-theme-light flex-1 p-4">{children}</div>
        <div className="omnicoder-ui-theme-dark flex-1 p-4">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
