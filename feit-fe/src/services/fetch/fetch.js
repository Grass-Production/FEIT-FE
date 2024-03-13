async function http(path, config,) {
    const request = new Request(path, config)

    const response = await fetch(request)

    const rsp = await response.json().catch(() => ({}))
    if (!response.ok) {
        console.log('error')
    } else {
        console.log('success')
    }
    return rsp
}

export async function get(path, config) {
    const init = { method: 'get', ...config }
    return http(path, init)
}