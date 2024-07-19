import { useState } from "react";
import { GeoObject } from "./MapQuizTypes";
import MapDisplay from "./MapDisplay";
import "./MapQuiz.css";

const stringComp = (acc: string[], s2: string) => {
  return (acc.filter((as) => (s2.replace(/\s/g, "").toLowerCase().startsWith(as.replace(/\s/g, "").toLowerCase()))).length !== 0)
}

export const WriteAllYouCan = ({objects} : {objects: GeoObject[]}) => {
  const [ written, setWritten ] = useState<GeoObject[]>([]);
  const [ toWrite, setToWrite ] = useState<GeoObject[]>(objects);
  const [ inputValue, setInputValue ] = useState<string>("");
  const [ errorMessage, setErrorMessage ] = useState<string>("");

  const handleClick = () => {
    const foundInToWrite = toWrite.filter((obj) => stringComp(obj.accept, inputValue));
    const foundInWritten = written.filter((obj) => stringComp(obj.accept, inputValue));
    if(foundInToWrite.length !== 0){
      setToWrite(toWrite.filter((obj) => obj.name !== inputValue));
      setWritten([...written, ...foundInToWrite]);
      setInputValue("");
      setErrorMessage("");
    } else if(foundInWritten.length !== 0){
      setErrorMessage("Already written!");
      setInputValue("");
    } else{
      setErrorMessage("Does not exist!");
      setInputValue("");
    }
  }

  return (
    <>
      <MapDisplay filled={written} empty={toWrite} />
      <span className="error-message">{errorMessage}</span>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            handleClick();
          }
        }}
      />
    </>
  )
}