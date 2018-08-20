import * as path from "../constants/pathConstants.js";


export const getApiCall = (page) => {
    let url =path.PATH_GET+page.page;
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};

export const getApiDetailCall = (id) => {
    let url = path.PATH_DETAIL_GET+ id;
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => { 
        return data;
    });
};