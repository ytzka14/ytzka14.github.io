import kcc2023 from "./kcc2023.pdf";
import x2023_2_transport_pre from "./2023-2-transport-pre.pdf";
import nieder_8 from "./nieder-8.pdf";
import { Link } from "react-router-dom";

function FilesApp() {
  return (
    <>
    <Link to="/">Go to home.</Link>
		<h1>FILES</h1>
    <div id="root">
			<a href={kcc2023}>kcc2023.pdf</a><br/><br/>
			<a href={x2023_2_transport_pre}>[계획서 발표자료] 서울대학교 구성원의 캠퍼스 내 지점 간 시간거리 인식.pdf</a><br/><br/>
			<a href={nieder_8}>자융세 발제_수의 흔적_수정.pdf</a><br/><br/>
		</div>
    </>
  )
}

export default FilesApp;
