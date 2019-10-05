import utilities from '../../helpers/utilties';
import './navbar.scss';

const loadNavbar = () => {
  const domString = `
  <nav>
    <a href="#" class="brand">Hogwarts</a>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
    </ul>
  </nav>
   `;
  utilities.printToDOM('navContainer', domString);
};

export default { loadNavbar };
