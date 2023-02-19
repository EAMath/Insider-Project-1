//Bool for toggle
var enable = true;

function toggleCss(){
    if(enable == true){
    //Enable Css
        //Change Bg Color
        document.body.style.cssText="background-color: #eaeaea; text-align: center; color:grey;";

        //Add div styles
        var div = document.getElementsByClassName("page-content")[0];
        div.style.cssText="background-color: white; border-radius: 2rem; margin: 3rem; padding: 1rem;";

        //Style ul
        document.getElementsByTagName("ul")[0].style.listStyleType= "none";

        //Style li
        var lists = document.getElementsByTagName("li");
        for (var i = 0; i < lists.length; i++) {
            var list = lists[i];
            list.style.cssText="display: inline-grid; padding: 2rem;";   
        }

        //Style to img
        var imgs = document.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            img.style.cssText="height:50px";   
        }

        //Changing button placeholder
        var button = document.getElementsByTagName("button")[0];
        button.innerHTML = "Disable Css";
        button.style.cssText="padding: 1rem; border-radius:1rem;";

        //Seting Bool false for toggle it
        enable = false;
    }else{
    //Disable Css
        //Change Bg Color
        document.body.style.cssText="";

        //Add div styles
        var div = document.getElementsByClassName("page-content")[0];
        div.style.cssText="";

        //Style ul
        document.getElementsByTagName("ul")[0].style.cssText="";

        //Style li
        var lists = document.getElementsByTagName("li");
        for (var i = 0; i < lists.length; i++) {
            var list = lists[i];
            list.style.cssText="";   
        }

        //Style to img
        var imgs = document.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            img.style.cssText="";   
        }

        //Changing button placeholder
        var button = document.getElementsByTagName("button")[0];
        button.innerHTML = "Enable Css";
        button.style.cssText="";

        //Seting Bool true for toggle it
        enable = true;
    }
}
