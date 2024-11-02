
function mostrarSeccion(seccionId) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
}

function calcularRadio() {
    const A = parseFloat(document.getElementById('masaAtomica').value);
    if (isNaN(A) || A <= 0) {
        document.getElementById('radio-result').textContent = "Por favor, ingrese un número másico válido.";
        return;
    }
    const r0 = 1.3;
    const R = r0 * Math.pow(A, 1 / 3);
    document.getElementById('radio-result').textContent = `El radio del núcleo es aproximadamente: ${R.toFixed(4)} x 10^-15 metros.`;
}

function calcularEnergiaEnlace() {
    const Z = parseFloat(document.getElementById('protones').value);
    const N = parseFloat(document.getElementById('neutrones').value);
    const ma = parseFloat(document.getElementById('masaNucleo').value);
    if (isNaN(Z) || isNaN(N) || isNaN(ma) || Z <= 0 || N <= 0 || ma <= 0) {
        document.getElementById('energia-enlace-result').textContent = "Por favor, ingrese números válidos.";
        return;
    }
    const mH = 1.007825;
    const mN = 1.008665;
    const UMAeV = 931.48;
    const Be = (Z * mH + N * mN - ma);
    const BeV = Be * UMAeV;
    document.getElementById('energia-enlace-result').textContent = `La energía de enlace es: ${Be.toFixed(6)} UMA (${BeV.toFixed(3)} MeV).`;
}

function calcularEnergiaLiberada() {
    const mBala = parseFloat(document.getElementById('masaBala').value);
    const mBlanco = parseFloat(document.getElementById('masaBlanco').value);
    const mProd = parseFloat(document.getElementById('masaProducto').value);
    const mNC = parseFloat(document.getElementById('masaNucleoFinal').value);
    if (isNaN(mBala) || isNaN(mBlanco) || isNaN(mProd) || isNaN(mNC) || mBala <= 0 || mBlanco <= 0 || mProd <= 0 || mNC <= 0) {
        document.getElementById('energia-liberada-result').textContent = "Por favor, ingrese números válidos.";
        return;
    }
    const El = (mBala + mBlanco) - (mProd + mNC);
    document.getElementById('energia-liberada-result').textContent = `La masa liberada es aproximadamente: ${El.toFixed(6)} UMA.`;
}
