import './app.css';
import { Button } from '.';

export function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me!</Button>
      <Button onClick={handleClick} disabled>
        Disabled button
      </Button>
    </div>
  );
}
