import { useEffect, useState } from "react";

function useGithubInfo(username){
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((res) => setdata(res))
        .catch((error) => {
            console.log("Something went wrong ", error);
        })
    }, [username])
    console.log(data);
    return data;
}

export default useGithubInfo;