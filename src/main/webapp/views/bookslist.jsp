<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: jakub
  Date: 21.07.18
  Time: 20:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h5>Add new book</h5>


<form action="/books/books" method="post">

    <input type="text" name="isbn" placeholder="isbn">
    <input type="text" name="title" placeholder="title">
    <input type="text" name="author" placeholder="author">
    <input type="text" name="publisher" placeholder="publisher">
    <input type="text" name="type" placeholder="type">
    <button></button>

</form>

<c:forEach items="${booksAll}" var="book">
    <li>
            ${book}, type:
    </li>
</c:forEach>



</body>
</html>
