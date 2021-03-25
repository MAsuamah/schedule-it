//Get current date using moment

var currentDate = moment()
console.log(currentDate)


//Display date in the jumbotron
var showDate = moment(currentDate).format('MMMM Do YYYY');

$('#currentDay').append(showDate)



