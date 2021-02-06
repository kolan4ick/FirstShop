export function blackAndWhite() {
    let element = document.getElementById("myid").checked;
    let array = document.getElementById("body").classList;
    if (!element) {
        array.remove("dark");
    } else {
        array.add("dark");
    }

}