const secretKey = "mySuperSecretKey"; // Key for encryption and decryption

function encryptText() {
    let text = document.getElementById("inputText").value;
    if (text === '') {
        alert("Please enter text to encrypt.");
        return;
    }

    let encrypted = btoa(text + secretKey); // Encrypt using Base64 encoding + secret key
    document.getElementById("result").textContent = "Encrypted: " + encrypted;
}

function decryptText() {
    let text = document.getElementById("inputText").value;
    if (text === '') {
        alert("Please enter text to decrypt.");
        return;
    }

    try {
        let decrypted = atob(text); // Decrypt Base64 encoding
        decrypted = decrypted.replace(secretKey, ''); // Remove the secret key
        document.getElementById("result").textContent = "Decrypted: " + decrypted;
    } catch (error) {
        document.getElementById("result").textContent = "Decryption failed. Invalid input.";
    }
}

function clearText() {
    document.getElementById("inputText").value = '';
    document.getElementById("result").textContent = '';
}
