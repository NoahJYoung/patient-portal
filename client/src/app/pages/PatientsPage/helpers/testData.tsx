const getUserID = () => {
  const alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const numArray = '123456789'.split('');

  const randomSelect = (array: string[] | number[]) => {
    const randomElement = array[Math.floor(Math.random() * array.length)];

    return randomElement;
  };

  const userIDArray = Array.from(Array(7).keys()).map(() => {
    const isLetter = Math.random() < 0.5;
    const activeArray = isLetter ? alphabetArray : numArray;
    const selection = randomSelect(activeArray);

    return selection;
  });

  return userIDArray.join('');
};

const getGroup = (): string => {
  const control = Math.random() < 0.5;

  return control ? 'Control' : 'Experimental';
};

const getTest = () => {
  const completed = Math.random() < 0.5;

  return completed ? '1/1/2022' : null;
};

const getAge = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));

const createPatientObject = () => {
  const patientObject = {
    id: getUserID(),
    age: getAge(50, 90),
    group: getGroup(),
    test1: getTest(),
    test2: getTest(),
    test3: getTest(),
  };

  if (!patientObject.test1) patientObject.test2 = null;
  if (!patientObject.test2) patientObject.test3 = null;

  return patientObject;
};

export const testData = Array.from(Array(82).keys()).map(() => createPatientObject());
