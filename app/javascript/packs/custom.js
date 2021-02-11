export function blackAndWhite() {
    let element = document.getElementById("myid").checked;
    let array = document.getElementById("body").classList;
    let array2 = document.getElementById("btn-close").classList;
    if (!element) {
        array.remove("dark");
        array2.remove("btn-close-white")
    } else {
        array.add("dark");
        array2.add("btn-close-white")
    }

}