function invertHash(hash) {
    var reverseObj= {};
    var keys= Object.keys(hash);
    var values= Object.values(hash);
    for (var i=0; i < keys.length; i++){
        reverseObj[values[i]]= keys[i];
    }
    return reverseObj;
}
