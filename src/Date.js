
 function now() {

    return Date();
}

 function day() {

    return new Date().getDay();
};

export {
    now as default,
    day
}