<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>CodersLab</title>
    <link href="<c:url value="/resources/css/style.css" />" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="<c:url value="resources/js/app.js" />"></script>
</head>
<body>

<form id="form">
    <input type="text", id="isbn" placeholder="ISBN"/>
    <input type="text", id="title" placeholder="Title"/>
    <input type="text", id="author" placeholder="Author"/>
    <input type="text", id="publisher" placeholder="Publisher"/>
    <input type="text", id="type" placeholder="Type"/>
    <button id="button">Add book</button>
</form>


</body>
</html>