import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Min Hyeong Kim</h1>
      <span>testing.</span><br/>
      <Link to={"/gacha"}>gacha</Link><br/>
      <Link to={"/blog"}>blog</Link><br/>
      <Link to={"/files"}>files</Link><br/>
      <Link to={"/karaoke"}>karaoke</Link><br/>
    </>
  )
};

export default Home;