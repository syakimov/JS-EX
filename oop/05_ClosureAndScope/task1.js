function solution() {
    let library = (function() {

        let titlesToBooks = new Map();
        let idCounter = 0;

        class Book {
            constructor(t, a, c, i) {
                this.title = t;
                this.author = a;
                this.category = c;
                this.id = i;
            }

            toString(){
                return `ID: ${this.id} ${this.title} from ${this.author} category: ${this.category}.`
            }
        }

        function listBooks() {
            console.log(titlesToBooks.values());
            return titlesToBooks.values();
        }

        function addBook(title, author, catergory) {
            if (titlesToBooks.has(title)) {
                console.log('This book already exists, it will not be included');
                return;
            }

            titlesToBooks.set(title,
              new Book(title, author, catergory, idCounter++));
        }

        function listCatergories() {
            let arr = []
            titlesToBooks.forEach(x => arr.push(x.category));
            console.log(arr.reduce((unique, cat) => {
                if (!unique.includes(cat)) {
                    unique.push(cat);
                }

                return unique;
            }, []));
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCatergories
            }
        };
    }());

    return library;
}

module.exports = solution;

let s = solution();
s.books.add('Pets cemetery', 'Steven King', 'Horror');
s.books.add('Pets cemetery', 'Steven King', 'Horror');
s.books.add('The Dark Half', 'Steven King', 'Horror');
s.books.add('The Great Gatsby', 'F. Scott Fitzgerald', 'Novel');

s.books.list();
s.categories.list();

/* Task Description */
/*
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
