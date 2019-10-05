import './studentCard.scss';

const createStudentCard = (student) => {
  const domString = `
  <li class="studentCard>
    <div class="imgHolder">
      <img src=${student.picture}>
      <h2>${student.name}</h2>
    </div>
  </li>
  `;
  return domString;
};

export default { createStudentCard };
