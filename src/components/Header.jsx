import dove from '../images/dove.png';

export default function Header() {
    return (
      <header>
        <h1>Birdwatching</h1>
        <img src={dove} alt="a simple dove logo" />
      </header>
    );
  }