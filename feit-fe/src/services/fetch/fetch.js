import { useNavigate } from "react-router-dom"

async function http(path, config,) {
    const request = new Request(path, config)

    const response = await fetch(request)

    const rsp = await response.json().catch(() => ({}))
    if (!response.ok) {
        console.log('error', rsp.message)
        // if (response.status === 401) {
        //     navigate('/signIn');
        // }
    } else {
        console.log('success', rsp.message)
    }
    return rsp
}

export async function get(path, config) {
    const init = { method: 'get', ...config }
    return http(path, init)
}

export async function post(path, body, config) {
    const init = { method: "post", body: JSON.stringify(body), ...config }
    return await http(path, init)
}
export async function patch(path, body, config) {
    const init = { method: "patch", body: JSON.stringify(body), ...config }
    return await http(path, init)
}
export async function put(path, body, config) {
    const init = { method: "put", body: JSON.stringify(body), ...config }
    return await http(path, init)
}
export async function del(path, config) {
    const init = { method: "delete", ...config }
    return await http(path, init)
}