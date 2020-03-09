const tableData = data
const tbody = d3.select('tbody')
const table = d3.select('table')

// D3 to set the table class to `table table-striped`
table.attr('class', 'table table-striped');

function buildTable(data) {
    tbody.html('')  // Clear existing data
    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

const handleClick = () => {
    d3.event.preventDefault()

    const date = d3.select('#datetime').property('value')
    let filteredData = tableData;

    if (date)
        filteredData = filteredData.filter(row => row.datetime === date)
    
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

d3.selectAll('#filter-btn').on('click', handleClick)

// HMWRK Code Start

buildTable(tableData)


const submit = d3.select("#filter-btn"); 

// input elements
var colDate = d3.select("#datetime");
var colCity = d3.select("#city");
var colState = d3.select("#state");
var colCountry = d3.select("#country");
var colShape = d3.select("#shape");

// Filtering data with button click
submit.on("click", function() {
  // Prevent page from refreshing
  d3.event.preventDefault();
  var newValue = colDate.property("value"); 
  console.log(newValue);

  // Create filtered dataset by date
  var filteredData = tableData.filter(row => row.datetime === newValue);
  console.log(filteredData);
 
  // New Table with time filter applied to dtaset
  buildTable(filteredData);

});
