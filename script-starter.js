// Function runs on page load to view current popular movies in the US
// endpoint here: https://developer.themoviedb.org/reference/movie-popular-list
function getPopularMovies(){
    // the endpoint
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=e02099532e263970809c21a4f4262d5e&language=en-US&page=1";
    // the place on the page where we'll display the movies
    let popularMovies = document.getElementById("popular");
    let imgUrl = "https://image.tmdb.org/t/p/w400";


    // ajax time!
    // create the object
    let xhr = new XMLHttpRequest();

    // attach event handlers
    xhr.addEventListener("readystatechange", function () {
        if(this.readyState === this.DONE) {
            // get JSON response 
            let json = this.response;

            //empty string to build output
            let html = "";

            // This code can be used for the display of the featured movie
            // (it is a string template)
            html += `<section id="featured">
                        <h3>${json.results[0].title}</h3>
                        <img src="${imgUrl}${json.results[0].poster_path}" alt="">
                        <p>"${json.results[0].overview}"</p>
                    </section>`;

            for(let i =1; i< 19; i++) {
                // This code can be used for the display of the other popular movies (18 of them)
                // (it is a string template)
                html += `<section class="movie">
                        <img src="${imgUrl}${json.results[i].poster_path}" alt="">
                        <div>
                            <h3>${json.results[i].title}</h3>
                            <p>${json.results[i].overview}
                                <span class="vote">Vote Average: ${json.results[i].vote_average}</span>
                            </p>
                        </div>
                    </section>`;
            }

            //add to page
            popularMovies.innerHTML = html;
        }
    });
    // set the response type
    xhr.responseType = "json";
    // open the request
    xhr.open("GET", url);

    // send the request
    xhr.send();
}

// function runs only after a year is entered/chosen and submitted through the form
// endpoint here: https://developer.themoviedb.org/reference/discover-movie
function getBirthYearMovies(e){
    e.preventDefault();

    // Get the user's input/year value
    // TO DO
    // the place on the page where we'll add the movies
    let birthYearMovies = document.getElementById("birthYear");

    if(year < 1940 || year > 2025 || year == ""){
        birthYearMovies.innerHTML = `<p style="color: red; background-color: white;">Please enter a year between 1940 and 2022</p>`;
    }else{
        // TO DO - Build the endpoint we need (this one has additional parameters)
        // TO DO
        let imgUrl = "https://image.tmdb.org/t/p/w400";

        // ajax time!
        // create the object
        // TO DO

        // attach event handlers
        // TO DO

        /*
            // This code can be used for the display of the movies from the given year
            // It skips any movies that don't include a poster
            // currently only displays the top six movies from that year but can be adjusted
            let counter = 0;
            for(let i = 0; counter < 6; i++){
                if(json.results[i].poster_path === null){
                    continue;
                }else{
                    `<section class="yrMovie">
                        <img src="${"TO DO"}" alt="">
                        <h3>${"TO DO"}</h3>
                    </section>`; 
                    counter++;
                }
            }
        */
        
        // set the response type
        // TO DO
        // open the request
        // TO DO
        // attach the headers (optional)

        // send the request
        // TO DO
    }
}

window.addEventListener("load", function(){
    getPopularMovies();
    document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
});
