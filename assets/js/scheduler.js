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
];

//Display Timeblocks

workDay.forEach(hourBlock => {
  //Creates scheduler row
  var row = $('<form>').addClass('row time-block');
  $('.container').append(row);

  //Creates time column
  var hourColumn = $('<div>').text(hourBlock.hour).addClass('hour col-md-2');
  $(row).append(hourColumn);

  //Create event column
  var eventColumn = $('<textarea>').text(hourBlock.event).addClass('col-md-9 description').attr('id', hourBlock.id);
  $(row).append(eventColumn); 

  //Create Save button column
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
});

//Save Data to local storage with save button...code help from https://stackoverflow.com/questions/27273444/save-and-load-input-values-using-local-storage/27273657
$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  $(this).each(function() {
    var id = $(this).siblings('textarea').attr('id');
    var value = $(this).siblings('textarea').val();
    localStorage.setItem(id, value);
  })
});

//Load saved events when the document is ready...code help from https://stackoverflow.com/questions/27273444/save-and-load-input-values-using-local-storage/27273657
$( document ).ready(function() {
  $('textarea').each(function(){    
      var id = $(this).attr('id');
      var value = localStorage.getItem(id);
      $(this).val(value);
  }); 
});

$('.btn-danger').on('click', function(event) {
  event.preventDefault();
  localStorage.clear();
  $('textarea').val('')
})










