//callback function
// Uma callback function é uma função que está sendo passada para outra função como parâmetro.


function sayMyName(name) {
    console.log(name)
}

sayMyName(
    () => {
        console.log('callback')
    }
)