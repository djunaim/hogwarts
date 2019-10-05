import './studentCard.scss';

const createStudentCard = (student, house) => {
  const domString = `
  <li class="student${house.name.toLowerCase()}">
    <div class="imgHolder">
      <img src=${student.picture}>
    </div> 
    <h2>${student.name}</h2>
  </li>
  `;
  return domString;
};

export default { createStudentCard };
