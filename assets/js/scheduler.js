//Get current date using moment

var currentDate = moment()
console.log(currentDate)

//Display date in the jumbotron
var showDate = moment(currentDate).format('dddd, MMMM Do YYYY');

$('#currentDay').append(showDate)

//Array that will be used to display Timeblocks

var workDay = [
  {
    hour: '9am',
    event: ''
  },
  {
    hour: '10am',
    event: '',
  },
  {
    hour: '11am',
    event: '',
  },
  {
    hour: '12pm',
    event: '',
  },
  {
    hour: '1pm',
    event: '',
  },
  {
    hour: '2pm',
    event: '',
  },
  {
    hour: '3pm',
    event: '',
  },
  {
    hour: '4pm',
    event: '',
  },
  {
    hour: '5pm',
    event: '',
  }  
]

