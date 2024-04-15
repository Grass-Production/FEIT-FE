import { post } from "./fetch"

export const Login = async (newData) => {
    const res = await post(
        "http://localhost:8080/api/login/role",
        newData,
        {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        },

    )
    return res
}

