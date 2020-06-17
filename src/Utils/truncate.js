export const truncate = (string, number) => {
    console.log(string.substring(0,number).length)
    return string.length > number ? string.substring(0,number) + "..." : string;
}