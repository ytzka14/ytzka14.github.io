import { useState } from "react";
import { GeoObject } from "./MapQuizTypes";
import MapDisplay from "./MapDisplay";
import "./MapQuiz.css";

export const WriteAllYouCan = ({objects} : {objects: GeoObject[]}) => {
  const [ written, setWritten ] = useState<GeoObject[]>([]);
  const [ toWrite, setToWrite ] = useState<GeoObject[]>(objects);
  const [ inputValue, setInputValue ] = useState<string>("");
  const [ errorMessage, setErrorMessage ] = useState<string>("");

  const handleClick = () => {
    const foundInToWrite = toWrite.filter((obj) => obj.name === inputValue);
    const foundInWritten = written.filter((obj) => obj.name === inputValue);
    if(foundInToWrite.length !== 0){
      setToWrite(toWrite.filter((obj) => obj.name !== inputValue));
      setWritten([...written, ...foundInToWrite]);
      setInputValue("");
    } else if(foundInWritten.length !== 0){
      setErrorMessage("Already written!");
    } else{
      setErrorMessage("Does not exist!");
    }
  }

  return (
    <>
      <MapDisplay filled={written} empty={toWrite} />
      <span className="error-message">{errorMessage}</span>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onClick={handleClick}
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            handleClick();
          }
        }}
      />
    </>
  )
}