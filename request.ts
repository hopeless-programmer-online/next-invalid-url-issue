import * as http from 'http'

async function main() {
    const request = http.request({
        hostname : `localhost`,
        port : 3000,
        path : `*`,
    }, response => {
        console.log(response.statusCode)
    })

    request.end()
}

main()
