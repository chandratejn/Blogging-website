//  Get the modal form
var modal = document.getElementById("modal");

// Get the button that opens the modal
var createBtn = document.getElementById("createBtn");

// Get the <span> element that closes the modal i.e, x symbol
var span = document.getElementsByClassName("close")[0];

// Get the form element for taking user input.
var form = document.getElementById("postForm");

// Get the posts element to push the data
var postsEl = document.getElementById("posts");

// Get the edit buttons element
// var editButtonsEl = document.getElementById("editButtons");

//Get the cancel button before posting the blog
var cancelBtn = document.getElementById("btn-cancel-modal");

// Get the submit button/create button for popping the modal
var submitBtn = document.getElementById("btn-create");

// Get the heading of modal window for updaion purposes
var mainHead = document.getElementById("mainHead");

//Get the update button for saving the changes in the  existing post 
var updateBtn = document.getElementById("button-save-changes");

//Get the delete button on edit
var deleteBtnEdit = document.getElementById("button-delete-modal");

// Get the delete button in the modal
var deleteModalBtn = document.getElementById("deleteModalBtn");

// Get the save and delete buttons for other future purposes
var saveBtn = document.getElementById("saveBtn");
var deleteBtn = document.getElementById("deleteBtn");

// Define a variable to store the post that is being edited
var postToEdit;

// When the user clicks the Create button, open the modal
createBtn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("mainHead").textContent = "Create A Post";
  editButtonsEl.style.display = "none";

  // reset the form
  form.reset();
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks on cancel post, close the modal
cancelBtn.onclick = function() {
    modal.style.display = "none";
  }
  

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    
  }
}

//When the user submits the form, create a new post or update an existing post
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
 
  // Get the form inputs
  var title = document.getElementById('title').value;
  var content = document.getElementById('content').value;

  // If we're editing a post, update the existing post
  if (postToEdit) {
    postToEdit.querySelector('h2').textContent = title;
    postToEdit.querySelector('p').textContent = content;
   
    // Reset the postToEdit variable
    postToEdit = null;
  }
  // If we're creating a new post, create a new post element
  else {
  
    
    // Create a new post element
    var postEl = document.createElement('div');
    postEl.classList.add('post');
    
    // Create a title element
    var titleEl = document.createElement('h2');
    titleEl.textContent = title;
    
    // Create a content element
    var contentEl = document.createElement('p');
    contentEl.textContent = content;
    
    // Create an edit button
    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Post';
    editBtn.classList.add('edit');
    editBtn.id="editButton";
   
     
    
    // Create a delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Post';
    deleteBtn.classList.add('delete');
    deleteBtn.id="delButton";

 

    // Add an event listener to the delete button
    deleteBtn.addEventListener('click', function() {
    // Remove the corresponding post element from the DOM
    postsEl.removeChild(postEl);
});

    
    // Add the title, content, edit button, and delete button to the post element
    postEl.appendChild(titleEl);
    postEl.appendChild(contentEl);
    postEl.appendChild(editBtn);
    postEl.appendChild(deleteBtn);
    
    // Add the post element to the posts element
    postsEl.appendChild(postEl);
  }

  // Reset the form and close the modal
  form.reset();
  modal.style.display = "none";
});



 // Create  a click listener on buttons
  postsEl.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit')) {
    // Get the post element that the edit button belongs to
    var postEl = event.target.closest('.post');
    
    // Set the postToEdit variable to the post element
    postToEdit = postEl;
    // Display buttons in case of editing the post
    cancelBtn.style.display = "none";
    submitBtn.style.display = "none";
    updateBtn.style.display = "inline-block";
    deleteBtnEdit.style.display = "inline-block";

    deleteBtnEdit.addEventListener('click', function() {
      // Remove the corresponding post element from the DOM
      postsEl.removeChild(postEl);
    });

    
    // Get the title and content elements of the post
    var title = postEl.querySelector('h2').textContent;
    var content = postEl.querySelector('p').textContent;
    
    // Set the values of the title and content inputs in the form to the values of the post
    document.getElementById('title').value = title;
    document.getElementById('content').value = content;
   
    
    // Show the modal with the title "Edit Post" and the update and delete buttons
    modal.style.display = "block";
    mainHead.textContent = "Edit Post";
    editButtonsEl.style.display = "block";
  }
});




