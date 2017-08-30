/* global document */

let pageNum = 1;

function nextPage(){
    if(pageNum == 80) return;
    pageNum++;
    document.getElementById('pageNumber').value = pageNum;
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.jpg`;
}

function prevPage(){
    if(pageNum == 1) return;
    pageNum--;
    document.getElementById('pageNumber').value = pageNum;    
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.jpg`;
}

function pageInput(){
    let num = document.getElementById('pageNumber').value;
    if(num <1 || num > 80 || getLength(num) > 2) return;
    pageNum = num;
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.jpg`;    
}

function firstPage(){
    pageNum = 1;
    document.getElementById('pageNumber').value = pageNum;    
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.jpg`;
}

function lastPage(){
    pageNum = 80;
    document.getElementById('pageNumber').value = pageNum;        
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.jpg`;
}

function getLength(number) {
    return number.toString().length;
}

function padZero(num){
    return (num < 10 && getLength(num) == 1) ? '0' + num : num;
}