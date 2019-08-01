
let first_name = prompt("enter your first name")
let last_name = prompt("enter your last name")
let school = prompt("enter your school name")

let school_name = school.split(" ")
let result = first_name.charAt(0) + last_name.charAt(0) + school_name[0]

alert(result);