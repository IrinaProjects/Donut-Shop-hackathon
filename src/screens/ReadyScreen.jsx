import donutsData from "../data/donutsData";
import { Donut, Button } from "../components";

const ReadyScreen = ({ selectedDonut }) => (
  <div className="ready-screen container">
    <Donut
      donutImage={donutsData[selectedDonut].url}
      classes="preparation-screen__donut"
    />
    <p className="ready-screen__text">
      You can now come <br /> and pick up <br /> your amazing Donut!
    </p>
    <Button text="Done" targetUrl="/" />
  </div>
);
export default ReadyScreen;
