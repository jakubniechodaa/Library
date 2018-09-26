$(document).ready(function () {

    var body = $("body");

    $.ajax({
        url: "http://localhost:8080/books/",
        data: {},
        type: "GET",
        dataType: "json",
        success: function (json) {

            for (var i = 0; i < json.length; i++) {

                var newBook = $("<h3>");
                newBook.attr("id", json[i].id).attr("data-type", "GET");
                newBook.text(json[i].title);
                var delButton = $("<button>").text("Delete").attr("data-type", "DELETE");
                var editButton = $("<button>").text("Edit").attr("data-type", "PUT");
                var newDiv = $("<div>");

                newBook.on("click", showBook);
                editButton.on("click", editBook);
                delButton.on("click", delBook);

                body.append(newBook);
                body.append(editButton);
                body.append(delButton);
                body.append(newDiv);
            }
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
        }
    });

    var button = $("#button").attr("data-type", "POST");
    button.on("click", addBook);
});
var showBook = function () {
    $.ajax({
        url: "http://localhost:8080/books/" + $(this).attr("id"),
        data: {},
        type: "GET",
        dataType: "json",
        success: function (json) {

            var elementDiv = $("#" + json.id).next().next().next().empty();

            var isbn = $("<p>").text("ISBN: " + json.isbn);
            var title = $("<p>").text("Title: " + json.title);
            var author = $("<p>").text("Author: " + json.author);
            var publisher = $("<p>").text("Publisher: " + json.publisher);
            var type = $("<p>").text("Type: " + json.type);

            elementDiv.append(isbn);
            elementDiv.append(title);
            elementDiv.append(author);
            elementDiv.append(publisher);
            elementDiv.append(type);
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
        }
    });
}

var editBook = function() {

    $.ajax({
        url: "http://localhost:8080/books/" + $(this).prev().attr("id"),
        data: {},
        type: "GET",
        dataType: "json",
        success: function (json) {

            var elementDiv = $("#" + json.id).next().next().next().empty();

            var newForm = $("<form>");
            var isbnLabel = $("<label>").text("ISBN: ")
            var isbn = $("<input>").attr("type", "text").attr("value", json.isbn).attr("id", "editisbn");
            var titleLabel = $("<label>").text("Title: ")
            var title = $("<input>").attr("type", "text").attr("value", json.title).attr("id", "edittitle");
            var authorLabel = $("<label>").text("Author: ")
            var author = $("<input>").attr("type", "text").attr("value", json.author).attr("id", "editauthor");
            var publisherLabel = $("<label>").text("Publisher")
            var publisher = $("<input>").attr("type", "text").attr("value", json.publisher).attr("id", "editpublisher");
            var typeLabel = $("<label>").text("Type: ")
            var type =$("<input>").attr("type", "text").attr("value", json.type).attr("id", "edittype");
            var saveButton = $("<button>").text("Save").attr("data-type", "PUT");

            saveButton.on("click", function (event) {

                event.preventDefault();
                var isbn = $(this).parent().find("#editisbn").val();
                var title = $(this).parent().find("#edittitle").val();
                var publisher = $(this).parent().find("#editpublisher").val();
                var type = $(this).parent().find("#edittype").val();
                var author = $(this).parent().find("#editauthor").val();

                var id = $(this).parent().parent().prev().prev().prev().attr("id");
                console.log(id)

                $.ajax({
                    url: "http://localhost:8080/books/" + id,
                    data: JSON.stringify({
                        "isbn": isbn,
                        "title": title,
                        "publisher": publisher,
                        "type": type,
                        "author": author
                    }),
                    type: "PUT",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function () {
                        console.log("sukces")
                    },
                    error: function (xhr, status,
                                     errorThrown) {
                        console.log("błąd")
                    },
                    complete: function (xhr, status) {
                        location.reload();
                    }
                });

            });


            newForm.append(isbnLabel);
            newForm.append(isbn);
            newForm.append(titleLabel);
            newForm.append(title);
            newForm.append(authorLabel);
            newForm.append(author);
            newForm.append(publisherLabel);
            newForm.append(publisher);
            newForm.append(typeLabel);
            newForm.append(type);
            newForm.append(saveButton);
            elementDiv.append(newForm)



        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
        }
    });
}

var delBook = function deleteBook() {
    console.log("del");
    $.ajax({
        url: "http://localhost:8080/books/" + $(this).prev().prev().attr("id"),
        data: {},
        type: "DELETE",
        dataType: "json",
        success: function (json) {
            console.log("DELETED")
        },
        error: function (xhr, status,
                         errorThrown) {
            console.log("DEL Error")
        },
        complete: function (xhr, status) {
            location.reload();
        }
    });
}

var addBook = function (event) {
    event.preventDefault();
    var isbn = $("#isbn").val();
    var title = $("#title").val();
    var publisher = $("#publisher").val();
    var type = $("#type").val();
    var author = $("#author").val();

    $.ajax({
        url: "http://localhost:8080/books/",
        data: JSON.stringify({
            "isbn": isbn,
            "title": title,
            "publisher": publisher,
            "type": type,
            "author": author
        }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
            location.reload();
        }
    });
}
