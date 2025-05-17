$(document).ready(function () { 
  const LOCAL_KEY = 'expenses'; 
  let expenses = JSON.parse(localStorage.getItem(LOCAL_KEY)) || []; 
  function updateLocalStorage() { 
    localStorage.setItem(LOCAL_KEY, JSON.stringify(expenses)); 
  }  
  function renderExpenses(filter = "All") {
    $('#expense-list').empty();
    // … filter logic and row appending … 
    $('#total-expense').text(total); 
  }
  $('#expense-form').submit(function (e) {  
    e.preventDefault();  
    // … collect inputs, push record, update & render … 
    this.reset(); 
  }); 
  $('#expense-list').on('click', '.delete-btn', function () { 
    // … delete logic …  
  });
  $('#filter-category').change(function () {  
    renderExpenses($(this).val()); 
  });
     renderExpenses();
}); 
