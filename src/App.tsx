import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import "./components/omnicoder-ui-style.css";
import Wrapper from "./support/Wrapper";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="w-screen h-screen max-h-screen p-4 flex flex-col gap-8 overflow-y-auto bg-green-300">
      <Wrapper title="Card (Primary)">
        <Card title="Sample Title" footer={<>Footer</>}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem illum, atque perspiciatis eius blanditiis
          reiciendis accusamus magni eligendi temporibus sapiente fugiat molestiae adipisci commodi ipsa praesentium
          quia delectus. Explicabo, architecto.
        </Card>
      </Wrapper>
      <Wrapper title="Button" multipleDisplay>
        <Button color="primary" icon={<FontAwesomeIcon icon={faIcons} />}>
          Click Me!
        </Button>
        <Button color="blue" icon={<FontAwesomeIcon icon={faIcons} />}>
          Click Me!
        </Button>
        <Button color="green" icon={<FontAwesomeIcon icon={faIcons} />}>
          Click Me!
        </Button>
        <Button color="red" icon={<FontAwesomeIcon icon={faIcons} />}>
          Click Me!
        </Button>
        <Button color="yellow" icon={<FontAwesomeIcon icon={faIcons} />}>
          Click Me!
        </Button>
        <Button color="purple" icon={<FontAwesomeIcon icon={faIcons} />}>
          Click Me!
        </Button>
      </Wrapper>
    </div>
  );
};

export default App;
