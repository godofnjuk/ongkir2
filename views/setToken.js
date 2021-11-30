export default (token) => {
    console.log("::: setToken :::");
    localStorage.setItem("cognitoToken", token);
};