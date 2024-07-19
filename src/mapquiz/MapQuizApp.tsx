import './MapQuiz.css';
// import { useState } from "react";
import { Link } from 'react-router-dom';
import { GeoObject} from "./MapQuizTypes";
import { WriteAllYouCan } from "./Quizzes";
// import DropDown from "../utils/dropdown";

import japan_prefectures_data from "./data/japan_prefectures.json";

function MapQuizApp() {
  const japanPrefectures: GeoObject[] = (japan_prefectures_data as GeoJSON.FeatureCollection).features.map((feature: GeoJSON.Feature) => {
    return {
      name: feature.properties?.nam || "",
      shape: feature,
    }
  });

  return (
    <>
      <div className="MapQuizApp">
        <Link to="/">Go to home.</Link>
        <h1>Map Quizzes</h1>
        <WriteAllYouCan objects={japanPrefectures} />
      </div>
    </>
  )
}

export default MapQuizApp;
