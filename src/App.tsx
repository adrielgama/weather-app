import SocialMedia from "./components/SocialMedia";
import Header from "./components/Header";
import WeatherSection from "./components/Weather";

import * as S from "./styles";
import "./reset.css";

function App() {
  return (
    <S.Container>
      <S.Title>
        <Header />
      </S.Title>
      <S.Body>
        <WeatherSection />
      </S.Body>
      <S.Footer>
        <SocialMedia />
        <p>
          Design inspiration from{" "}
          <a
            href="https://dribbble.com/shots/16952894-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chike Valentine
          </a>
        </p>
      </S.Footer>
    </S.Container>
  );
}

export default App;
