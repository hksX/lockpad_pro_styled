import CryptoJS from 'crypto-js';
function deriveKey(password, saltHex){ const salt = CryptoJS.enc.Hex.parse(saltHex); return CryptoJS.PBKDF2(password,salt,{keySize:256/32,iterations:10000}); }
export function encryptText(plaintext,password,saltHex){ const key=deriveKey(password,saltHex); const iv=CryptoJS.lib.WordArray.random(128/8); const enc=CryptoJS.AES.encrypt(plaintext,key,{iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}); return {ciphertext:enc.toString(), iv:iv.toString(CryptoJS.enc.Hex)} }
export function decryptText(ciphertext,password,saltHex,ivHex){ const key=deriveKey(password,saltHex); const iv=CryptoJS.enc.Hex.parse(ivHex); const dec=CryptoJS.AES.decrypt(ciphertext,key,{iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}); return dec.toString(CryptoJS.enc.Utf8) }
