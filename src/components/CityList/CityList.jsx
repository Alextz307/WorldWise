import styles from "./CityList.module.css";

import { useCities } from "../../contexts/CitiesContext";

import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import CityItem from "../CityItem/CityItem";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
