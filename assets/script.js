const date = moment().format('dddd, MMMM Do YYYY')
let time = moment().format('H')
const wrapper = document.getElementById('wrapper')
const newDay = document.getElementById('newDay')
hs = localStorage.getItem('hoursInDay')
hoursInday = parseInt(hs)
console.log(hoursInday)
st = localStorage.getItem('startTime')
startTime = parseInt(st)

console.log(startTime)
if(isNaN(hoursInday) == true || isNaN(startTime) == true) {
    createNewDay()
}
else
{
    buildContent()
}
newDay.addEventListener('click', function(){
    if(confirm('Would you like to start a new day?')){
        createNewDay()
    }
    else {
        return
    }
})

// buildContent()

function buildContent() {
    // for loop, create 9 rows
    for (i = 0; i < hoursInday; i++) {
        // define row
        var row = document.createElement('div')
        // add the class "row"
        row.classList.add('row')
        // define container
        var container = document.getElementsByClassName('container')
        // append row to container
        $(container).append(row)
        // create number for each row, and compare to current time
        let rowTime = (startTime + i)
        console.log(startTime)
        console.log(rowTime)
        let rowTimeMoment = moment(rowTime, 'HH')
        let rowTimeAmPm = moment(rowTimeMoment).format('LT')
        // Create our inner content
        let timeDiv = document.createElement('div')
        timeDiv.classList.add('hour')
        $(row).append(timeDiv)
        timeDiv.innerHTML = (rowTimeAmPm.toString())
        let contentDiv = document.createElement('input')
        contentDiv.type = 'text'
        contentDiv.classList.add('notesInput')
        contentDiv.id = "Button" + i + "input"
        var test = "Button" + i + "input"
        console.log(test)
        var holder = localStorage.getItem(test)
        if (holder === null){
            holder = ''
        }
        console.log(holder)
        contentDiv.value = holder
        if (!contentDiv.value === ''){
            contentDiv.classList.add('stored')
        }
        $(row).append(contentDiv)
        let saveI = document.createElement('button')
        saveI.classList.add('fas')
        saveI.classList.add('fa-save')
        saveI.classList.add('saveBtn')
        saveI.id = "Button" + i
        $(row).append(saveI)

        if
            (rowTime < time) {
            contentDiv.classList.add('past')
        }
        else if (rowTime == time) {
            contentDiv.classList.add('present')
        }
        else if (rowTime > time) {
            contentDiv.classList.add('future')
    }
}
}
wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    var newAdd = (event.target.id + "input")
    newAdd.classList.add('stored')
    var addInput = document.getElementById(newAdd)
    localStorage.setItem(newAdd, addInput.value)
})
function createNewDay(){
    localStorage.clear()
    x = prompt('What time will you be starting work today?')
    start = parseInt(x)
    localStorage.setItem("startTime", start)
    hours = prompt('how many hours will you be working today?')
    localStorage.setItem("hoursInDay", hours)
    location.reload()

}