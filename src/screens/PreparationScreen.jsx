import donutsData from "../data/donutsData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Donut } from "../components";

const TIMEOUT_DURATION = 5000;

const PreparationScreen = ({ selectedDonut }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/ready");
    }, TIMEOUT_DURATION);
  }, [navigate]);

  return (
    <div className="preparation-screen container">
      <Donut
        donutImage={donutsData[selectedDonut].url}
        classes="preparation-screen__donut donut-rotate"
      />
      <p>Preparing...</p>
    </div>
  );
};

export default PreparationScreen;
