
async function weatherDetector() {
    
    try {

        let result = await (await fetch("https://www.gov.uk/bank-holidays.json")).json();

        let output = await result.scotland.events;

        console.log(foo(output))

        
    } catch (error) {
        
        console.log(error)
        
    }
}

weatherDetector();

//bootstrap layout

let container = document.createElement('div');

container.setAttribute('class', 'container');

let row1 = document.createElement('div');

row1.setAttribute('class', 'row');

let row2 = document.createElement('div');

row2.setAttribute('class', 'row');

let box_outer = document.createElement('div');

box_outer.setAttribute('class', 'col d-flex justify-content-center')

let header = document.createElement('h3');

header.innerText = 'Scotland Holidays:';

header.style.textAlign='center'

//table creation

let table = document.createElement('table');

table.setAttribute('class','table table-striped table-dark')

let thead = document.createElement('thead');

let tr1 = document.createElement('tr');

let holiday = document.createElement('th');

holiday.innerText = 'Holiday';

let date = document.createElement('th');

date.innerText = 'Date';


let tbody = document.createElement('tbody');

let tr2 = document.createElement('tr');

let td1 = document.createElement('td');

let td2 = document.createElement('td');

let td3 = document.createElement('td');

let td4 = document.createElement('td');

let td5 = document.createElement('td');


document.body.append(container);

container.append(row1);

container.append(row2);

row1.append(header);

row2.append(box_outer);

box_outer.append(table);

table.append(thead);

table.append(tbody);

thead.append(tr1);

tr1.append(holiday);

tr1.append(date);




function foo(data) {

    console.log(data[0])

    for (let i = 0; i < data.length; i++){

        let tr2 = document.createElement('tr');

        let td1 = document.createElement('td');

        td1.innerText = data[i].title;

        let td2 = document.createElement('td');

        let dates = new Date(data[i].date)

        td2.innerText = dates;

        tbody.append(tr2);

        tr2.append(td1);

        tr2.append(td2);


    }
    

}

