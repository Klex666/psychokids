import "./style/style.sass"

import Header from './components/Header/Header'
import MainPage from "./components/pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
