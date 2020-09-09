function getImage() {
    let ele=document.getElementsByClassName('image1')
    ele[0].src="https://cdn.pixabay.com/photo/2019/12/02/07/07/autumn-4667080__340.jpg"
    console.log(ele[0].src)
    
}

changeImage1 = () => {
let ele1=document.getElementsByClassName("image1");
  let newurl="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg";
ele1[0].src=newurl;
}

changeImage2=()=> {
    let ele2=document.getElementsByClassName("image1");
    let newurl="https://cdn.pixabay.com/photo/2016/04/18/22/05/sea-1337565__340.jpg"
    ele2[0].src=newurl;
}

