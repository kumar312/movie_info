$(document).ready(function () {
    console.log("ready");

    var apikey = "8db3311b"
    $("#movieName").submit(function (event) {
        console.log("submit");
        event.preventDefault();


        var movie = $("#movieTitle").val();

        var result = "";

        var url = "http://www.omdbapi.com/?apikey=" + apikey + "&t=" + movie;
        console.log(url);

        $.ajax({
            method: 'Get',
            url: url,
            success: function (data) {
                console.log(data);


                if (data.Response == "True")
                    result = `
                <div style="display: flex;flex-wrap: wrap;">
                <div style="padding: 15px;">
                <h2>${data.Title}</h2>
                <img src="${data.Poster}"/></div>
                <div style="margin: 100px 15px 15px 15px">
                <h6><b>Released:</b> ${data.Released}</h6>
                <h6><b>Runtime:</b> ${data.Runtime}</h6>
                <h6><b>Genre:</b> ${data.Genre}</h6>
                <h6><b>Actors:</b> ${data.Actors}</h6>
                <h6><b>Director:</b> ${data.Director}</h6>
                <h6><b>Writer:</b> ${data.Writer}</h6>
                <h6><b>Language:</b> ${data.Language}</h6>
                <h6><b>Country:</b> ${data.Country}</h6>
                </div>
                </div>`;

                $("#result").html(result)

            }
        });
    })
})