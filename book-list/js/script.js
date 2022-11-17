
//2nd work:
//define ui element
let form = document.querySelector('#book-form');
//11th work
// define booklist element
let booklist = document.querySelector('#book-list');

//3rd work:
//declear eventlister function
//get the data of title,author,isbn through eventlister function
function newBook(e) {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    // let ui = new UI()
    //11th work 
    //do if else for input validation 
    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("please input all the fields", "error");
    } else {
        //5th work:
        //create e new book with collect data and keep in class object
        let book = new Book(title, author, isbn);
        UI.addToBookList(book); // part of 7th work
        UI.clearFields(); // part of 9th work
        UI.showAlert("book submited successfully", "success");
        Store.addBooks(book); // part of 17th work)
    }
}

//6th work:
//now create class Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//7th work:
// show book data in ui table, so create e ui class for put data
class UI {
    static addToBookList(book) {
        //8th work:
        //in new class define table element using dom , create tr elements,create td and send data (uisng apend clhild) of title, author,isbn, delete (x) sign
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML =
            `<td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`; // Delete built-in class os sceleton css !       
        list.appendChild(row);

    }
    //9th work
    //create a function to reset the form after data receive
    static clearFields() {
        let title = document.querySelector('#title').value = "";
        let author = document.querySelector('#author').value = "";
        let isbn = document.querySelector('#isbn').value = "";
    }
    static showAlert(message, className) {
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        container.insertBefore(div, form);
        //11th work 
        // call a function to remove the alert after 3 secend!
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    //part of 13th work: call the function to remove booklist
    static deletFromBook(target) {
        if (target.hasAttributes("href")) {
            target.parentElement.parentElement.remove();
            //14th work:
            //give e alert message for book remove 
            UI.showAlert("removed book successfully", "success");

        }
    }
}

//10th work
//add css for success and error messages in script.js file


//13TH work
//define a function to remove the BOOKLIST element
function removeBook(e) {
    e.preventDefault();
    // let ui = new UI(); // remove as we already make function static 
    UI.deletFromBook(e.target);

}

//14th work
// optimized code (make class functions to stitc function )


//15th work :local storage area
//defina a local storage area class for hadle local storage everything
class Store {
    //16th work: define getiteam() to set book obejct and get data from local storage
    static getBooks() {
        let booklist;
        if (localStorage.getItem('booklist') === null) {
            booklist = [];
        } else {
            booklist = JSON.parse(localStorage.getItem('booklist'));
        }
        return booklist;
    }


    //17th work: define setitem() to add book into local storage booklist object
    static addBooks(book) {
        let booklist = Store.getBooks();
        booklist.push(book);
        localStorage.setItem('booklist', JSON.stringify(booklist));
    }
    //18th work :
    //displayBooklist() - display local storage iteams into UI interface (booklist)
    static displayBooklist() {
        let booklist = Store.getBooks();
        booklist.forEach(book => {
            UI.addToBookList(book);
        });

    }
    //19th work :
    //removeBook() - remove book from local storage
   



    
}

//1st work:
//add event lister
form.addEventListener('submit', newBook);
//12th work
//add event listeners into booklist element
booklist.addEventListener('click', removeBook);
//part of 18th work
document.addEventListener('DOMContentLoaded', Store.displayBooklist());
