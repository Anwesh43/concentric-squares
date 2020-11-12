import logo from './logo.svg';
import './App.css';
import { useAnimatedScale, useDimension} from './hooks'
import ConcentricSquares from './ConcentricSquares'

function App() {
  const { w, h } = useDimension()
  const {scale, start} = useAnimatedScale(0.02, 20) 
  return (
    <div className="App">
      <button onClick = {start}>start</button>
      <ConcentricSquares w = {w} h = {h} scale = {scale} onClick = {start}/>
    </div>
  );
}

export default App;
