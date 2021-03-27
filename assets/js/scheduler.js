//Get current date using moment and display date in the jumbotron
var showDate = moment().format('dddd, MMMM Do YYYY');

$('#currentDay').append(showDate)

//Get current hour from moment
var currentHour = moment().format('HH');
console.log(currentHour)


//Array that will be used to display Timeblocks

var workDay = [
  {
    hour: '9am',
    momentHour: '09',
    event: '',
    id: 'a'
  },
  {
    hour: '10am',
    momentHour: '10',
    event: '',
    id: 'b'

  },
  {
    hour: '11am',
    momentHour: '11',
    event: '',
    id: 'c'
  },
  {
    hour: '12pm',
    momentHour: '12',
    event: '',
    id: 'd'
  },
  {
    hour: '1pm',
    momentHour: '13',
    event: '',
    id: 'e'
  },
  {
    hour: '2pm',
    momentHour: '14',
    event: '',
    id: 'f'
  },
  {
    hour: '3pm',
    momentHour: '15',
    event: '',
    id: 'g'
  },
  {
    hour: '4pm',
    momentHour: '16',
    event: '',
    id: 'h'
  },
  {
    hour: '5pm',
    momentHour: '17',
    event: '',
    id: 'i'
  }
]

//Display Timeblocks

workDay.forEach(hourBlock => {
  //Creates scheduler row
  var row = $('<form>').addClass('row time-block');
  $('.container').append(row);

  //Creates time columns
  var hourColumn = $('<div>').text(hourBlock.hour).addClass('hour col-md-2');
  $(row).append(hourColumn);

  //Create event columns
  var eventColumn = $('<textarea>').text(hourBlock.event).addClass('col-md-9 description').attr('id', hourBlock.id);
  $(row).append(eventColumn); 

  //Create Save button
  var saveBtn = $('<button>').html('<i class="far fa-save"></i>').addClass('saveBtn col-md-1');
  $(row).append(saveBtn);

  //Check if Hour is in the past, present, or future
  if (currentHour > hourBlock.momentHour) {
    eventColumn.addClass('past')
  } else if (currentHour < hourBlock.momentHour) {
    eventColumn.addClass('future')
  }
    else if (currentHour === hourBlock.momentHour) {
      eventColumn.addClass('present')
    }
})

//Save Data with save button
$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  var getEvent = $(this).siblings('textarea').val()
  console.log(getEvent)
  localStorage.setItem('savedTask', getEvent)
})











