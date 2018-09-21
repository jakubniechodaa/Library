$(document).ready(function() {

    var getBooks = $.ajax({
        url: "/books",
        data: {},
        type: "GET",
        dataType : "json",
        success: function( json ) {},
        error: function( xhr, status,
                         errorThrown ) {},
        complete: function( xhr, status ){}
    });


    var section = $("section.task_1");

    $("button").on("click", function () {

        var div = $("<div>");
        div.addClass("panel");
        var p = $("<p>");
        p.text("Napis cwiczebny");
        div.append(p);
        p.hide();
        section.append(div);
    });

    section.on("mouseenter", "div", function () {

        $(this).find("p").show();
    })

    section.on("mouseleave", "div", function () {

        $(this).find("p").hide();
    })
    ///////stare zadani

    $("[type=submit]").on("click", function () {

        var addUser = $("#addUser");
        var age = $("#age");
        var ageInt = parseInt(age.val(), 10);
        var li = $("<li>");
        li.data("age", ageInt);
        li.text(addUser.val() + " <button class='dlt'>DILITA TO</button>");
        if (ageInt < 16) {
            li.css("color", "green");
        }
        else if (ageInt > 15 && ageInt < 40) {
            li.css("color", "blue");

        } else {
            li.css("color", "brown");

        }

        var ul = $("ul.main");
        ul.append(li);
        console.log(ageInt);

    });

    //zad2
    var f = function () {
        var people = $(".people");
        var ll = people.find("li");
        ll.append("<button class='dlt'>DILITA TO</button>");

        people.on("click", "li", function () {
            $(this).remove();


        });
    }
    f();

    //zad3

    var people = $(".people");


    var mylist = people.find('ul');

    console.log(mylist);

    var listitems = mylist.children('li').get();

    listitems.sort(function(a, b) {
        var compA = $(a).text().toUpperCase();
        var compB = $(b).text().toUpperCase();
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    })

    $(".task_1").append("<button class='sort'>sort</button>");
    var btn = $(".sort");
    btn.one("click", function(){
        $.each(listitems, function(idx, itm) { mylist.append(itm); });
    });



});