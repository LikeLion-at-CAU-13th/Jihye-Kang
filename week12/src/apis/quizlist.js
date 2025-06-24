import axios from 'axios';

export const baseURL = "https://week12-api-1cc7.onrender.com"

export const getQuestions = async () => {
    const response = await axios.get(`${baseURL}/api/questions`)
    return response.data;
}

export const postAnswers = async(answers) => {
    const response = await axios.post(`${baseURL}/api/answers`, answers);
    return response.data;
}

export const getResult = async (score) => {
    const response = await axios.get(`${baseURL}/api/result?score=${score}`);
    return response.data;
}
