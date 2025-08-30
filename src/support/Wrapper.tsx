import React from "react";

interface WrapperProps {
  title?: string;
  multipleDisplay?: boolean;
  children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ title, multipleDisplay = false, children }) => {
  const displays = [
    { label: "Flex Row", classNames: "flex flex-row flex-wrap gap-2" },
    { label: "Flex Column", classNames: "flex flex-col gap-2" },
    { label: "Block", classNames: "block" },
  ];

  const renderDisplays = () =>
    displays.map((display, index) => (
      <div className="flex flex-col gap-2" key={index}>
        <div className="font-medium text-lg">{display.label}</div>
        <div className={display.classNames}>
          {display.classNames === "block"
            ? React.Children.map(children, (child, i) => (
                <div className={i > 0 ? "mt-2" : ""} key={i}>
                  {child}
                </div>
              ))
            : children}
        </div>
      </div>
    ));

  return (
    <div className="flex flex-col gap-4">
      {title && <h1 className="font-medium text-3xl">{title}</h1>}
      <div className="flex flex-row">
        <div className="omnicoder-ui-theme-light flex-1 p-4">
          {multipleDisplay ? <div className="flex flex-col gap-8">{renderDisplays()}</div> : children}
        </div>
        <div className="omnicoder-ui-theme-dark flex-1 p-4">
          {multipleDisplay ? <div className="flex flex-col gap-8">{renderDisplays()}</div> : children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
