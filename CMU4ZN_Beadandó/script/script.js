$(document).ready(function () {
    // Form ellenőrzés és hiba esetén kiírása
    $("#contactForm").submit(function (e) {
        e.preventDefault();

        // Példa: név mező üres ellenőrzése
        let name = $("#name").val();
        if (name === "") {
            $("#name").css("border", "2px solid red");
            alert("Név mező nem lehet üres!");
        } else {
            $("#name").css("border", "1px solid #ccc");
        }

        // További form ellenőrzések...

    });

    // Animáció példa
    $(".main-content").hover(function () {
        $(this).animate({ fontSize: "18px" }, "fast");
    }, function () {
        $(this).animate({ fontSize: "16px" }, "fast");
    });

    // Elem kiválasztása és módosítása példa
    $("p").css("color", "blue");

    // Új HTML elem készítése és módosítása példa
    let newDiv = $("<div>").html("Ez egy új div elem!");
    $(".main-content").append(newDiv);
});