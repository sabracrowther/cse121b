/* async getQuizData Function using fetch()*/
export const getQuizData = async () => {
    const response = await fetch(`https://opentdb.com/api.php?amount=10`);
    if(response.ok) {     
        const data = await response.json();
        return data.results;
    }
    return [];

}