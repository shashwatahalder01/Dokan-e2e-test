



let abs = 'http://localhost:8889/wp-admin/users.php'

// console.log(a.split('/'))
// tokens = a.split('/').slice(1),
// result = tokens.join('/');
// console.log(result)
// console.log(abs.match(/^https?:\/\/[^#?\/]+/)[0]);


// console.log(new URL(abs).origin)

 function getBaseUrl(url) {
    // let url =  page.url()
    return url.match(/^https?:\/\/[^#?\/]+/)[0]
    // return new URL(abs).origin
}

console.log(getBaseUrl(abs))