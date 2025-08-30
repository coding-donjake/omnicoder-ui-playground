import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import "./components/omnicoder-ui-style.css";
import Wrapper from "./support/Wrapper";
import { faCircleNotch, faIcons } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/input/Input";

const App = () => {
  return (
    <div className="w-screen h-screen max-h-screen p-4 flex flex-col gap-10 overflow-y-auto bg-green-300">
      <Wrapper title="Card (Primary)">
        <Card header={{ title: "Sample Title" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem illum, atque perspiciatis eius blanditiis
          reiciendis accusamus magni eligendi temporibus sapiente fugiat molestiae adipisci commodi ipsa praesentium
          quia delectus. Explicabo, architecto.
        </Card>
      </Wrapper>
      <Wrapper title="Button" multipleDisplay>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} loading config={{ color: "primary" }}>
          Loading
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          loading
          loadingIcon={<FontAwesomeIcon icon={faCircleNotch} />}
          config={{ color: "primary" }}
        >
          Loading with different icon
        </Button>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} config={{ color: "primary", alignContent: "left" }}>
          Left alignment
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", edgeIcon: true, alignContent: "left" }}
        >
          Left alignment (edge icon)
        </Button>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} config={{ color: "primary", alignContent: "center" }}>
          Middle alignment
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", edgeIcon: true, alignContent: "center" }}
        >
          Middle alignment (edge icon)
        </Button>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} config={{ color: "primary", alignContent: "right" }}>
          Right alignment
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", edgeIcon: true, alignContent: "right" }}
        >
          Right alignment (edge icon)
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", iconPosition: "right", alignContent: "left" }}
        >
          Left alignment (reverse)
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", edgeIcon: true, iconPosition: "right", alignContent: "left" }}
        >
          Left alignment (edge icon reverse)
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", iconPosition: "right", alignContent: "center" }}
        >
          Middle alignment (reverse)
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", edgeIcon: true, iconPosition: "right", alignContent: "center" }}
        >
          Middle alignment (edge icon reverse)
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", iconPosition: "right", alignContent: "right" }}
        >
          Right alignment (reverse)
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faIcons} />}
          config={{ color: "primary", edgeIcon: true, iconPosition: "right", alignContent: "right" }}
        >
          Right alignment (edge icon reverse)
        </Button>
        <Button cls="w-full" loading config={{ color: "primary" }}>
          cls = w-full
        </Button>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} config={{ color: "blue" }}>
          Click Me!
        </Button>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} config={{ color: "green" }}>
          Click Me!
        </Button>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} config={{ color: "red" }}>
          Click Me!
        </Button>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} config={{ color: "yellow" }}>
          Click Me!
        </Button>
        <Button icon={<FontAwesomeIcon icon={faIcons} />} config={{ color: "purple" }}>
          Click Me!
        </Button>
      </Wrapper>
      <Wrapper title="Input" multipleDisplay>
        <Input type="date" id="date" label="Date" />
        <Input type="datetime-local" id="datetime-local" label="Datetime Local" />
        <Input type="email" id="email" label="Email" placeholder="Enter email" />
        <Input type="month" id="month" label="Month" />
        <Input type="number" id="number" label="Number" placeholder="Enter number" />
        <Input type="password" id="password" label="Password" placeholder="Enter password" />
        <Input type="text" id="text" label="text" placeholder="Enter text" />
        <Input type="time" id="time" label="Time" />
        <Input type="week" id="week" label="Week" />
      </Wrapper>
    </div>
  );
};

export default App;
