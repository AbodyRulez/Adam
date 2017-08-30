/* global document */

let pageNum = 1;

function nextPage(){
    if(pageNum == 227) return;
    pageNum++;
    document.getElementById('pageNumber').value = pageNum;
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.png`;
}

function prevPage(){
    if(pageNum == 1) return;
    pageNum--;
    document.getElementById('pageNumber').value = pageNum;    
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.png`;
}

function pageInput(){
    let num = document.getElementById('pageNumber').value;
    if(num <1 || num > 227 || getLength(num) > 3) return;
    pageNum = num;
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.png`;    
}

function firstPage(){
    pageNum = 1;
    document.getElementById('pageNumber').value = pageNum;    
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.png`;
}

function lastPage(){
    pageNum = 227;
    document.getElementById('pageNumber').value = pageNum;        
    document.getElementById('imageid').src = `img/Adam_Page_${padZero(pageNum)}.png`;
}

function getLength(number) {
    return number.toString().length;
}

function padZero(num){
    if(getLength(num) == 3) return num;
    let pad = 0;
    if(num < 10 && getLength(num) == 1)
        pad = '00' + num;
    if(num >= 10 && getLength(num) == 2)
        pad = '0' + num;
    return pad;
}