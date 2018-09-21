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
<section class="people">
    <input type="text" placeholder="Wpisz imię i nazwisko" id="addUser"/>
    <input type="text" placeholder="Wpisz wiek" id="age"/>
    <input type='submit' value='dodaj'>

    <ul class="main">
        <li data-age="63">John Travolta</li>
        <li data-age="18">Angelina Jolie</li>
        <li data-age="50">Barack Obama</li>
        <li data-age="15">Krzysztof Ibisz</li>
    </ul>
</section>
<section class="task_1">
    <button>TASK 1</button>
</section>
</body>
</html>
