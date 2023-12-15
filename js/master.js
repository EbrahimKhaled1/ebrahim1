// Check If There's Local Storage Color Option
let mainColor = localStorage.getItem("color_option");
if(mainColor != null){
    // console.log('its not empty');
    // console.log(mainColor);
    document.documentElement.style.setProperty('--main--color' , mainColor);

    // Remove Active Class From All Childrens
    document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");
    // Add Active Class On Elemen With Data-Color === Local Storage Item//تثبيت علامة الاكتيف في الخانة المختارة
    if(element.dataset.color == mainColor){
        // Add Active Class
        element.classList.add("active");
    }
    });
} 

//..............................................................................//
// Toglle Spin Class On Icon  قسم العنصر المتحرك للاعدادات
document.querySelector(".toggle-setting .fa-sharp").onclick = function () {
// Toglle Class Fa-Spin For Rotation On Self
    this.classList.toggle("fa-spin");

// Toglle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

//................................................//
//Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
// console.log(colorsLi);

//Loop On All List Item
colorsLi.forEach(li =>{
    //Click On Every List Item 
    li.addEventListener("click",(e) => {
    
    //Set Color On Root
    document.documentElement.style.setProperty('--main--color', e.target.dataset.color);//when we click any color it will be on root(main color) color.

    // Set Color On Local Storage
    localStorage.setItem("color_option" , e.target.dataset.color);

    handleActive(e);
    });

});

//.............................................................................//
//Random Background Option 
let backgroundOption = true;

//Varible To Control The Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Chech If The Random Background Local Storage Is Not Empty
if(backgroundLocalItem !== null){

    if(backgroundLocalItem === 'true'){
        backgroundOption = true;
    }
    else{
        backgroundOption = false;
    }
    // Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
    element.classList.remove("active");
    });
    if(backgroundLocalItem == 'true'){
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }
    else{
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}

//Switch Background Option 
const randomBackE = document.querySelectorAll(".random-backgrounds");

//Loop On All span
randomBackE.forEach(span =>{
    //Click On Every List Item 
    span.addEventListener("click",(e) => {

    handleActive(e);  

    if(e.target.dataset.background == 'yes'){
        backgroundOption = true;
        randomaizeImg();
        localStorage.setItem("background_option", true);
    }
    else{
        backgroundOption = false;
        clearInterval(backgroundInterval);
        localStorage.setItem("background_option", false);
    }
    });

});
//...............//
//Select Landing page element قسم الخلفيات
let LandingPage = document.querySelector(".Landig-page");

// Get Array Of Imgs
let ImgsArray = ["4.webp" , "7.jpg" , "6.jpg" , "6.webp" , "13.jpg"];

//let randomNumber = Math.floor(Math.random() * ImgsArray.length);
// Function To Randomize Imgs
function randomaizeImg(){
    if(backgroundOption == true){
        backgroundInterval = setInterval(()=>{
            // Get Random Number 
                let randomNumber = Math.floor(Math.random() * ImgsArray.length);
            // Change Background Image Url
                LandingPage.style.backgroundImage = 'url("imgs/' +ImgsArray[randomNumber]+ '")';
            },1000 );
    }
}
randomaizeImg();

// ..............................................................تحريك المهارات
// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
    //Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height كيفية معرفة طول صفحة المطلوبة
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height معرفة طول الصفحة
    let windowHeight = this.innerHeight;

    //window Scroll Top
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
        let allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};
//...................................................................THE IMAGES
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery .images-box img");

ourGallery.forEach(img => {
    img.addEventListener('click',(e) =>{
        //Create Overlay Element 
        let overlay = document.createElement("div");

        //Add Class To Overlay
        overlay.className = 'popup-overlay';

        //Append Overlay To The Body
        document.body.appendChild(overlay);

        //Create The Popup Box
        let popupBox = document.createElement("div");

        //Add Class To The Popup Box
        popupBox.className = 'popup-box';

        //Append The Popup Box To The Body
        document.body.appendChild(popupBox);

        if(img.alt !== null){
            // Ceate Heading 
            let imgHeading = document.createElement("h2");

            // Create Text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
        }

        //Create The Image 
        popupImage = document.createElement("img");

        //Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To The Popup Box
        popupBox.appendChild(popupImage);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append The Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add The Close To The Popup
        popupBox.appendChild(closeButton);

    });
});

// Close popup
document.addEventListener("click", function(e){
    if(e.target.className == 'close-button'){
        // Remove The Current Popup
        e.target.parentElement.remove();

        // Remove Overlay 
        document.querySelector(".popup-overlay").remove();
    }
})
// ..............................................................................................

//Sellect All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
// allBullets.forEach(bullet =>{
//     bullet.addEventListener("click", (e) =>{
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         })
//     });
// });

let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletsLocalItem = localStorage.getItem("bullets_option");
if(bulletsLocalItem !== null){
    bulletsSpan.forEach(span =>{
        span.classList.remove("active");
    });
    if(bulletsLocalItem === 'block'){
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");
    }
    else{
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
};

bulletsSpan.forEach(span =>{
    span.addEventListener("click", (e) =>{
        if(span.dataset.display ==='show'){
            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets_option", 'block');
        }
        else{
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets_option", 'none');
        }
        handleActive(e);
    });
});



//Sellect All Links
const allLinks = document.querySelectorAll(".links a");
// allLinks.forEach(link =>{
//     link.addEventListener("click", (e) =>{
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         })
//     });
// });

function scrollToSomeWhere(element){
    element.forEach(ele =>{
        ele.addEventListener("click", (e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);
// ........................................................................
// Handle Active State
function handleActive(ev){
    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    //Add Active Class On Self //اضافة عنصر الاكتيف الى الخيار الذي تم اختياره
    ev.target.classList.add("active");   
};

// .....................................................................................
//Resent Button
document.querySelector(".reset-options").onclick = function(){
    localStorage.clear();
    // localStorage.removeItem("color_option");
    // localStorage.removeItem("background_option");
    // localStorage.removeItem("bullets_option");

    //Reload Window 
    window.location.reload();
};

// ................................................................

//Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function(e){

    // Stop Propagation
    e.stopPropagation();

    // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");

    // Toggle Class "open" On Links
    tLinks.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
    if(e.target !==toggleBtn && e.target !==tLinks){
        // Chech If Menu Is Open
        if(tLinks.classList.contains("open")){
            // Toggle Class "menu-active" On Button
            toggleBtn.classList.toggle("menu-active");

            // Toggle Class "open" On Links
            tLinks.classList.toggle("open");
        }
    }
});

// Stop Propagation On Menu
tLinks.onclick = function (e) {
    e.stopPropagation();
};
