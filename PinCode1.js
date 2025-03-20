function validatePinCode(pinCode) {
    let pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pinCode);
}

console.log(validatePinCode("400088")); // ✅ true (Valid)
console.log(validatePinCode("123456")); // ✅ true (Valid)
console.log(validatePinCode("000088")); // ❌ false (Cannot start with 0)
console.log(validatePinCode("4008"));   // ❌ false (Less than 6 digits)
console.log(validatePinCode("4000889")); // ❌ false (More than 6 digits)
console.log(validatePinCode("40A088")); // ❌ false (Contains letters)
