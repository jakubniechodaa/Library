package pl.coderslab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.beans.MemoryBookService;
import pl.coderslab.classes.Book;

import java.util.List;

@RestController // polaczenie controller i responsebody
//@Controller
@RequestMapping("/books")

public class BookController {

    @Autowired
    MemoryBookService memoryBookService;

    @RequestMapping("/helloBook")
    public Book helloBook(){

        return new Book(1L,"9788324631766","Thinking in Java",
                "Bruce Eckel","Helion","programming");
    }

    @GetMapping("")
    public List<Book> getBooks(){
        List<Book> booksAll = memoryBookService.getList();
        return booksAll;
    }

    @GetMapping("{id}")
    public Book getBooks(Model model, @PathVariable int id){
        Book book = memoryBookService.getBookById(id - 1);
        return book;
    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/")
    public void createBooks(@RequestBody Book book){
        if (memoryBookService.getList().size()==0) {
            String isbn = book.getIsbn();
            String title = book.getTitle();
            String publisher = book.getPublisher();
            String type = book.getType();
            String author = book.getAuthor();
            memoryBookService.addBook(1, isbn, title, author, publisher, type);
            System.out.println(book);
        }
        else{
            String isbn = book.getIsbn();
            String title = book.getTitle();
            String publisher = book.getPublisher();
            String type = book.getType();
            String author = book.getAuthor();
            memoryBookService.addBook(
                    memoryBookService.getList().size() + 1, isbn, title, author, publisher, type);
            System.out.println(book);

        }
    }
    @PutMapping("{id}")
    public void editBooks(@PathVariable int id, @RequestBody Book book){
        String isbn = book.getIsbn();
        String title = book.getTitle();
        String publisher = book.getPublisher();
        String type = book.getType();
        String author = book.getAuthor();
        memoryBookService.editBook(id, isbn, title, publisher, type, author);
    }
    @DeleteMapping("{id}")
    public void deleteBooks(@PathVariable int id){
        memoryBookService.deleteBook(id);
    }

//
//    public Book createBooks(Model model, @RequestParam String isbn, @RequestParam String title, @RequestParam String author,
//                              @RequestParam String publisher, @RequestParam String type){
//        if (memoryBookService.getList().size()==0) {
//            Book book = new Book(1, isbn, title, author, publisher, type);
//            memoryBookService.addBookToListook(book);
//            //model.addAttribute("addedBook", book);
//            return book;
//        }
//        else{
//            Book book = new Book(
//                    memoryBookService.getList().size() + 1, isbn, title, author, publisher, type);
//            memoryBookService.addBookToListook(book);
//            //model.addAttribute("addedBook", book);
//            return book;
//        }
//    }


}
