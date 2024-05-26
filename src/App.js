import styled from "styled-components";
import Router from "./Router";
import { White } from "./styles/color";
import Header from "./components/common/Header";

function App() {
  return (
    <AppContainer>
      <Header />
      <Router />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 376px;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  background-color: ${White};
`;

export default App;
