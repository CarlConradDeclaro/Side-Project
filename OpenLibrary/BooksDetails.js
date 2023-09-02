

let  details;
let image;
let year;
let language;
let sbn;
let series;
let publisher;
let pages ;
let isbn;  
let file ;

var x1 = document.getElementById("popUp");
var x2 = document.getElementById("Financial-books");
function Open(){
    x1.style.display = "block";      
    x2.style.height = "650px";  
}
function closePopup(){
    x1.style.display = "none";
    x2.style.height = "auto"; 
}

function toggle(element) {
    let book = element.className;
 
    switch(book){
        case "book-1": 
       
                        Open();
                        details = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quae est maxime cupiditate sit ratione deleniti totam quo culpa temporibus sint minima, numquam voluptates vel alias. Nobis officiis suscipit consectetur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit maxime quidem accusamus rem ipsum nam repellat facilis quas quaerat blanditiis at mollitia, amet delectus magni, nesciunt minus ullam sunt beatae!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quae est maxime cupiditate sit ratione deleniti totam quo culpa temporibus sint minima, numquam voluptates vel alias. Nobis officiis suscipit consectetur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit maxime quidem accusamus rem ipsum nam repellat facilis quas quaerat blanditiis at mollitia, amet delectus magni, nesciunt minus ullam sunt beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur reprehenderit adipisci ab? Ab sed voluptatem, vitae cum veniam temporibus repudiandae dolorum asperiores! Repellat veniam quidem et esse illum ut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reiciendis ab delectus similique ea totam libero blanditiis ipsam vel obcaecati neque laudantium iusto et, hic eaque tempora, odio quaerat perferendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam iste nihil itaque delectus, expedita modi dolores ab voluptate iure reprehenderit pariatur dolore, quam excepturi magni dolorum perferendis aut rerum!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, inventore explicabo eum ab ducimus, ipsa amet nam cum quidem blanditiis dignissimos, similique cumque vero error architecto obcaecati tempore quasi illo!";
                        image = "images/book1.png";
                        year ="Year: 2011";
                        language = "Language:English"
                        sbn = "SBN 10: 0446509361";
                        series = "Series: Rich Dad";
                        publisher = "Publisher: Business Plus";
                        pages = "Pages: 197";
                        isbn = "ISBN 13: 9780446509367";
                        file = "File: EPUB, 1.20 MB";

                        document.getElementById("details").textContent = details;
                        document.getElementById("year").textContent = year;
                        document.getElementById("language").textContent = language;
                        document.getElementById("sbn").textContent = sbn;
                        document.getElementById("series").textContent = series;
                        document.getElementById("publisher").textContent = publisher;
                        document.getElementById("pages").textContent = pages;
                        document.getElementById("isbn").textContent = isbn;
                        document.getElementById("file").textContent = file;
                        document.getElementById("img").src = image;
                        
                        break;

        case "book-2": 
       
                        Open();
                        details = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur reprehenderit adipisci ab? Ab sed voluptatem, vitae cum veniam temporibus repudiandae dolorum asperiores! Repellat veniam quidem et esse illum ut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reiciendis ab delectus similique ea totam libero blanditiis ipsam vel obcaecati neque laudantium iusto et, hic eaque tempora, odio quaerat perferendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam iste nihil itaque delectus, expedita modi dolores ab voluptate iure reprehenderit pariatur dolore, quam excepturi magni dolorum perferendis aut rerum!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, inventore explicabo eum ab ducimus, ipsa amet nam cum quidem blanditiis dignissimos, similique cumque vero error architecto obcaecati tempore quasi illo!";
                        image = "images/book1.png";
                        year ="Year: 2012";
                        language = "Language:English"
                        sbn = "SBN 10: 0446509361";
                        series = "Series: Rich Dad";
                        publisher = "Publisher: Business Plus";
                        pages = "Pages: 197";
                        isbn = "ISBN 13: 9780446509367";
                        file = "File: EPUB, 1.20 MB";

                        document.getElementById("details").textContent = details;
                        document.getElementById("year").textContent = year;
                        document.getElementById("language").textContent = language;
                        document.getElementById("sbn").textContent = sbn;
                        document.getElementById("series").textContent = series;
                        document.getElementById("publisher").textContent = publisher;
                        document.getElementById("pages").textContent = pages;
                        document.getElementById("isbn").textContent = isbn;
                        document.getElementById("file").textContent = file;
                        document.getElementById("img").src = image;                        
                        break;
        default:
            console.log("It's an unknown fruit.");
            break;
    }
}