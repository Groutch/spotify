$(document).ready(function () {
    $("form").on("submit", loginUser);

    function loginUser() {
        var infos = $("input");
        //console.log(infos);
        //console.log(infos[0]);
        //var listeduser = localStorage.getItem("userlist");
        //localStorage.setItem("userlogged", infos[0].value);
        var requestURL = "./users.json";
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'text';
        request.send();
        request.onload = function () {
            var jsondata2 = request.response;
            var jsondata = JSON.parse(jsondata2);
            //var tabusers = Array.prototype.slice.call(jsondata.Users, 0);
            var tabusers = jsondata.Users.map(elt=>elt.username);
            var idxuser = tabusers.indexOf(infos[0].value);
            
            //si l'utilisateur entré est dans la liste des utilisateurs
            if (idxuser != -1) {
                //si le mdp corrrespondent
                if (jsondata.Users[idxuser].password == infos[1].value) {
                    localStorage.setItem("colorUser", jsondata.Users[idxuser].color);
                    localStorage.setItem("nameUser", jsondata.Users[idxuser].username);
                }else{
                    alert("NEIN NEIN NEIN !!");
                    return false;
                }
            }else{
                alert("NEIN NEIN NEIN !!");
                return false;
            }
        }
    }

});
