package pl.coderslab.beans;

import org.springframework.stereotype.Service;
import pl.coderslab.classes.Book;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class MemoryBookService {
    private List<Book> list;
    public MemoryBookService() {
        list = new ArrayList<>();
        list.add(new Book(1L, "9788324631766", "Thinking in Java", "Bruce Eckel",
                "Helion", "programming"));
        list.add(new Book(2L, "9788324627738", "Rusz glowa, Java.",
                "Sierra Kathy, Bates Bert", "Helion", "programming"));
        list.add(new Book(3L, "9780130819338", "Java 2. Podstawy",
                "Cay Horstmann, Gary Cornell", "Helion", "programming"));
    }
    public void addBook(long id, String isbn, String title, String author, String publisher, String type) {
        Book book = new Book();
        book.setId(id);
        book.setIsbn(isbn);
        book.setTitle(title);
        book.setAuthor(author);
        book.setPublisher(publisher);
        book.setType(type);
        System.out.println("To książka którą dodaje do listy" + book.toString());
        this.list.add(book);

    }

    public void editBook(int id, String isbn, String title, String author, String publisher, String type){
        for (Iterator<Book> iter = list.listIterator(); iter.hasNext(); ) {
            Book a = iter.next();
            if (a.getId() == id) {
                a.setIsbn(isbn);
                a.setTitle(title);
                a.setAuthor(author);
                a.setPublisher(publisher);
                a.setType(type);

            }
        }

    }
    public void deleteBook(int id) {
        for (Iterator<Book> iter = list.listIterator(); iter.hasNext(); ) {
            Book a = iter.next();
            if (a.getId() == id) {
                iter.remove();
            }
        }
    }

    public List<Book> getList() {return list;}

    public Book getBookById(int id) {

        return list.get(id);
    }
    public void setList(List<Book> list) {this.list = list;}}