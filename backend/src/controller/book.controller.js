import { Book } from "../model/book.model.js"

export async function getAllBooks(req, res) {
    try {
        const books = await Book.find().sort({createdAt:-1});
        res.status(200).json(books);
    } catch (error) {
        console.log("Failed to fetch books:", error)
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (error) {
        console.log("Failed to fetch book:", error)
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function createBook(req, res){
    try {
        const {title, author, isbn, year,totalCopies, availableCopies} = req.body;
        console.log('received data:',title, author, isbn, year,totalCopies, availableCopies)
        const newBook = new Book({
            title,
            author,
            isbn,
            year,
            totalCopies,
            availableCopies
        });
        await newBook.save();
        //res.status(201).json({message:'Book created successfully', body:newBook});
        res.status(200).json(newBook);
        } catch (error) {
        console.error("Failed to create a book:", error);
    res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateBookById(req, res) {
    try {
        const {title, author, isbn, year,totalCopies, availableCopies} = req.body;
        const updateBook = await Book.findByIdAndUpdate(
            req.params.id,{
            title,
            author,
            isbn,
            year,
            totalCopies,
            availableCopies
        },{new:true});
        if (!updateBook) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(updateBook);
    } catch (error) {
        console.error("Failed to updating book:", error);
    res.status(500).json({ message: "Internal server error" });
    }

}

export async function deleteBook (req, res) {
    try {
        const deletedBook= await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.status(200).json({ message: "Book deleted successfully!" });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}