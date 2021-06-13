// Autor: Cristopher Daniel Chavez Alfaro

function calcularMatriz3x3 (x11,x12,x13,x21,x22,x23,x31,x32,x33) {
    let a1 = [0,0,0], a2 = [0,0,0], a3 = [0,0,0]
    let a = [a1,a2,a3]
    let respuesta = 0

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (document.getElementById(`a${i+1}${j+1}`).value) {
                a[i][j] = parseFloat(document.getElementById(`a${i+1}${j+1}`).value)
            }
        }
    }

    if(x11 != null) {
        return (x11 * ((x22 * x33) - (x23 * x32))) - (x12 * ((x21 * x33) - (x23 * x31))) + (x13 * ((x21*x32) - (x31*x22)))
    } else {
        respuesta = (a[0][0] * ((a[1][1] * a[2][2]) - (a[1][2] * a[2][1]))) - (a[0][1] * ((a[1][0] * a[2][2]) - (a[1][2] * a[2][0]))) + (a[0][2] * ((a[1][0]*a[2][1]) - (a[2][0]*a[1][1])))

        if (respuesta == 0) {
            document.getElementById('resultado3x3').innerHTML = `Determinante = ${respuesta} <br> (no existe)`
        } else {
            document.getElementById('resultado3x3').innerHTML = `Determinante = ${respuesta}`
        }
        document.getElementById('resultado3x3').classList.remove("invisible")
    }
}

function calcularMatriz4x4 () {
    let b1 = [0,0,0,0], b2 = [0,0,0,0], b3 = [0,0,0,0], b4 = [0,0,0,0]
    let b = [b1, b2, b3, b4]

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (document.getElementById(`b${i+1}${j+1}`).value) {
                b[i][j] = parseFloat(document.getElementById(`b${i+1}${j+1}`).value)
            }
        }
    }

    let respuesta =
    (b[0][0] * calcularMatriz3x3(b[1][1],b[1][2],b[1][3],b[2][1],b[2][2],b[2][3],b[3][1],b[3][2],b[3][3]))
    - (b[0][1] * calcularMatriz3x3(b[1][0],b[1][2],b[1][3],b[2][0],b[2][2],b[2][3],b[3][0],b[3][2],b[3][3]))
    + (b[0][2] * calcularMatriz3x3(b[1][0],b[1][1],b[1][3],b[2][0],b[2][1],b[2][3],b[3][0],b[3][1],b[3][3]))
    - (b[0][3] * calcularMatriz3x3(b[1][0],b[1][1],b[1][2],b[2][0],b[2][1],b[2][2],b[3][0],b[3][1],b[3][2]))

    if (respuesta == 0) {
        document.getElementById('resultado4x4').innerHTML = `Determinante = ${respuesta} <br> (no existe)`
    } else {
        document.getElementById('resultado4x4').innerHTML = `Determinante = ${respuesta}`
    }
    document.getElementById('resultado4x4').classList.remove("invisible")
}