let bared_token = "BQDhULKKfKHUIM953jf0deR6RsG_-P9O_5ib7PtBvP5PvwSCuUVcnByaXVBxUTNp7qktCziCsSjGaQcrm0laZ5kLbbfZY-ddVKqyvBcbOZpEy_PtEfQmQkX4o_bydFt1cBbyG9mukIxf_ECuYWyX9A62Ds0ouiV68vqMNxOsqlS_5fv5I464WnMqteyMJn5DLFan58F7tLK3jGxZTrc6AOD16VnFa2-eKWe4KUnjK8oLMIhrwlquiD9Dn_GP85kqqbNC2mRK7SmOBdGsXhBS9TW7YsTtML9jIBVPFyFnUNYs";
let url = "https://api.spotify.com/v1/shows";
let beared = "Bearer " + bared_token;



function fetch_featured() {

    let show_id = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ";

    fetch(url+"?ids="+show_id+"&market=US",{
        method: "GET",
        headers: {
            'Authorization': beared,
            'Accept': "application/json",
            'Content-Type': 'application/json'
        }
    }).then((data) => {
        return data.json()})
    .then( (data) => {

        // let show = data.show[0]
        let feature_html = `
        <div class='reatured'>
        <img src='${data.shows[0].images[1].url}' />
        

        <div>

            <h2>${data.shows[0].name}</h2>
            <h4>${data.shows[0].description}</h4>
            <h3> Don't forget to listen now </h3>
            <button> Listen Now </button>


        </div>

        </div>
        `
        document.getElementById("featured").innerHTML = feature_html;
        return feature_html;
    })
    .then(console.log)
    
    .catch(console.log)


}


function fetch_lasted() {

    let show_id = "5CfCWKI5pZ28U0uOzXkDHe%2C5lY4b5PGOvMuOYOjOVEcb9%2C7BQZHMsYPInemu2GMVSYNH%2C5RdShpOtxKO3ZWohR2M6Sv%2C6NWAZzkzl4ljxX7S2xkHvu";

    fetch(url+"?ids="+show_id+"&market=US",{
        method: "GET",
        headers: {
            'Authorization': beared,
            'Accept': "application/json",
            'Content-Type': 'application/json'
        }
    }).then((data) => {
        return data.json()})
    .then( (data) => {

        

        data.shows.forEach(element => {
            
            console.log(element);
            
            let show_html = `
            <div class='show' >
            <img src='${element.images[1].url}' />
    

                <div>

                     <h2>${element.name}</h2>
                    <h5>${element.publisher}</h5>
        
                </div>

            </div>
                        `
    
        document.getElementById("shows").innerHTML += show_html;

    
        

        });
        
    })
    
    
    .catch(console.log)


}


function fetchAll () {


    fetch_featured();
    fetch_lasted();

}