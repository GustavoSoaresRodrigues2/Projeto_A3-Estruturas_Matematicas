// Função para calcular o inverso multiplicativo de 'a' no módulo 'm'
function modInverse(a, m) {
    let t = 0, newT = 1;
    let r = m, newR = a;
    while (newR !== 0) {
        let quotient = Math.floor(r / newR);
        [t, newT] = [newT, t - quotient * newT];
        [r, newR] = [newR, r - quotient * newR];
    }
    if (r > 1) {
        return -1; // Não é possível calcular o inverso
    }
    if (t < 0) {
        t = t + m; // Garantir o valor positivo
    }
    return t;
}

// Função para criptografar a senha
function encryptPassword(password, a, b, m) {
    const encrypted = [];

    for (let char of password) {
        let x = char.charCodeAt(0);
        let y = (a * x + b) % m;    
        encrypted.push(y);          
    }

    return encrypted;
}

function decryptAndConvert(encrypted, a, b, m) {
    let aInverse = modInverse(a, m);
    if (aInverse === -1) {
        throw new Error("Não é possível calcular o inverso de 'a' para a descriptografia");
    }

    const decrypted = [];
    for (let y of encrypted) {
        let x = (aInverse * (y - b + m)) % m;
        decrypted.push(String.fromCharCode(x));
    }

    return decrypted.join('');
}

function generateEncryptedCode(encrypted) {
    const encryptedText = encrypted.map(num => {
        return String.fromCharCode((num % 94) + 33);
    }).join('');
    return encryptedText;
}

const password = "In$tagram2024!";
const a = 5;  // Parâmetro 'a' da cifra afim
const b = 8;  // Parâmetro 'b' da cifra afim
const m = 256;  // Módulo (usado para ASCII)

try {
    // Criptografando a senha
    const encrypted = encryptPassword(password, a, b, m);
    console.log("Senha criptografada (em números):", encrypted);

    // Gerando o código criptografado legível
    const encryptedText = generateEncryptedCode(encrypted);
    console.log("Senha criptografada (legível):", encryptedText);

    // Descriptografando a senha
    const decryptedPassword = decryptAndConvert(encrypted, a, b, m);
    console.log("Senha original (descriptografada):", decryptedPassword);
} catch (error) {
    console.error(error.message);
}
