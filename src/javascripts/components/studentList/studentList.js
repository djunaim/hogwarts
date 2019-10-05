import utilties from '../../helpers/utilties';
import studentData from '../../helpers/data/studentData';
import studentCard from '../studentCard/studentCard';
import './studentList.scss';

const createStudentList = () => {
  const students = studentData.getStudents();
  let domString = '<ul class="studentList">';
  for (let i = 0; i < students.length; i += 1) {
    domString += studentCard.createStudentCard(students[i]);
  }
  domString += '</ul>';
  utilties.printToDOM('studentContainer', domString);
};

export default { createStudentList };
