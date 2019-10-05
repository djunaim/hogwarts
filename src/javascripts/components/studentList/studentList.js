import utilties from '../../helpers/utilties';
import studentData from '../../helpers/data/studentData';
import studentCard from '../studentCard/studentCard';
import houseData from '../../helpers/data/houseData';
import './studentList.scss';

const createStudentList = () => {
  const students = studentData.getStudents();
  const house = houseData.getHouses();
  let domString = '<ul class="studentList">';
  for (let i = 0; i < students.length; i += 1) {
    for (let j = 0; j < house.length; j += 1) {
      if (students[i].houseId === house[j].id) {
        domString += studentCard.createStudentCard(students[i], house[j]);
      }
    }
  }
  domString += '</ul>';
  utilties.printToDOM('studentContainer', domString);
};

export default { createStudentList };
