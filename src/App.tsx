import Card from "./components/card/Card";
import "./components/omnicoder-ui-style.scss";
import Wrapper from "./Wrapper";

const App = () => {
  return (
    <div className="w-screen h-screen max-h-screen p-4 flex flex-col gap-8 bg-green-300">
      <Wrapper title="Card (Primary)">
        <Card title="Sample Title" footer={<>Footer</>}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem illum, atque perspiciatis eius blanditiis
          reiciendis accusamus magni eligendi temporibus sapiente fugiat molestiae adipisci commodi ipsa praesentium
          quia delectus. Explicabo, architecto.
        </Card>
      </Wrapper>
    </div>
  );
};

export default App;
