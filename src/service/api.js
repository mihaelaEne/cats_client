

export async function getAllCats(){
    let data=await api("allCats");

    return data.json();
}

export async function addCat(cat){
    let data=await api("cretaeCat", "POST", cat);

    return data.json();
}

export async function updateCatAge(prod){
    const method="PUT";
    const body=prod;
    const ressponse=await api("updateCatAge", method, body);


    console.log(ressponse);

    return ressponse.json();
}


export async function getCatById(id) {
    let data = await api(`catById?id=${id}`);
    return data.json();
}

function api(path, method = "GET", body = null) {

    const url = "http://localhost:8080/api/v1/cat/" + path;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest',
        }
    }
    if (body != null) {
        options.body = JSON.stringify(body);
    }
    
    return fetch(url, options);
}

