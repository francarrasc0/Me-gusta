function like(element) {    
    let number = document.querySelector('#user');
    let likeNumber = number.innerText;
    likeNumber++;
    number.innerText = likeNumber;
}