import env from '../environment/env'
const apiurl = env.test

//--------------------------Rest functions----------------

/**
 * Fetch registered users on the platform
 * @returns resonse with the list of users
 */
const users = async ()=>{
    return await fetching(apiurl+'users/', 'GET' );
}

/**
 * Fetch a unique user by its Id
 * @param {*} id 
 * @returns 
 */
const getUser = async (id)=>{
    return await fetching(apiurl+'users/'+id, 'GET' );
}


//----------------------Fetch function--------------------------
/**
 * Reusable function to fetch data from the backend
 * @param {*} url 
 * @param {*} method 
 * @returns 
 */
const fetching = async (url, method) =>{
    try {
        const res = await fetch(url,{
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            }            
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export default{
    users, getUser
}