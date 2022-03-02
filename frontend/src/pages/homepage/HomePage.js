import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Header } from "../../layouts";

function HomePage() {
  const [currentValues, setCurrentValues] = useState({
    latestRoomHumidity: "",
    latestRoomTemperature: "",
    highestFieldTemperature: "",
    averageRoomTemperature: "",
    energyConsumption: "",
  });

  const [companyData, setCompanyData] = useState({
    companyName: "",
    coldRoom: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:9191/data/one`).then((res) => {
      setCurrentValues({
        latestRoomHumidity: res.data.latestRoomHumidity,
        latestRoomTemperature: res.data.latestRoomTemperature,
        highestFieldTemperature: res.data.highestFieldTemperature,
        averageRoomTemperature: res.data.averageRoomTemperature,
        energyConsumption: res.data.energyConsumption,
      });
      setCompanyData({ ...companyData, ...res.data });
    });
  }, []);

  const records = Object.entries(currentValues).map((items, idx) => {
    console.log(items);
    return (
      <div key={idx} className="md:basis-1/2 lg:basis-1/3 w-full mt-7 mb-7">
        <Card measurementName={items[0]} measurementValue={items[1]} />
      </div>
    );
  });

  return (
    <>
      <Header company={companyData} />
      <div className="p-10 flex flex-row flex-wrap">{records}</div>
    </>
  );
}

export default HomePage;
