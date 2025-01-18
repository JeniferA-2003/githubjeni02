

const loadHtml=(file,id) =>{
    const target= document.querySelector(`#${id}`);
    fetch(` ./html/${file}.html`)
    .then(res => {
        if(res.ok){
            return res.text();
        }
    })
    .then(htmlSnippet =>{
        target.innerHTML=htmlSnippet;
    });

}



// document.addEventListener("DOMContentLoaded",()=>{
//     loadHtml("home","body");
// })

const html1=["home","loading","college profile","vision mision-1", "principal desk","organogram","autonomy","code of conduct","2f 12b","aishe","nirf","affiliation","loading","departments","research","calendar","nursery","PET","admission","loading","controller","calendar","result","guidelines","loading","vision mision-2","composition","report","quality initiative","atr","aqar","best practices","feedback","loading","cycle-1","cycle-2","quality audits","extended profile","loading","store","photo copier","wi-fi","scholarship","computer center","ncc army","ncc air,navy","nss","fine arts","ek bharath","rotaract","unnat bharath","health care","reading","movie","canteen","gym","sports","library","loading","anti ragging","legal","ed","grievance","scst","minority","sexual harassment","discipline","placement","career","cyber","alumni","gallery","rti","contact"];
const item1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73];
// const item=[0,1,2,3,4,5,6,7,8,9,10];
let prev1;
let current1=0;
let prev2;
let current2=0;
const links=document.querySelectorAll('.nav a');
const bars=document.querySelectorAll(".offcanvas-body a");

item1.forEach(i =>{
    links[i].addEventListener('click', ()=>{
        loadHtml(html1[i],"body");
        prev1=current1;
        current1=i;
        links[prev1].classList.remove("active");
        links[current1].classList.add("active");
        links[current1].parentNode.parentNode.parentNode.firstElementChild.classList.add("active");
        if( links[prev1].parentNode.parentNode.parentNode===links[current1].parentNode.parentNode.parentNode){
            true;
        }
        else{
            links[prev1].parentNode.parentNode.parentNode.firstElementChild.classList.remove("active");
        }
      
    })
   
            // bars[current].parentNode.parentNode.parentNode.firstElementChild.classList.add("active");
            // if( bars[prev].parentNode.parentNode.parentNode===links[current].parentNode.parentNode.parentNode){
            //     true;
            // }
            // else{
            //     bars[prev].parentNode.parentNode.parentNode.firstElementChild.classList.remove("active");
            // }
          
        })
        const html2=["home","loading","college profile","vision mision-1", "principal desk","organogram","autonomy","code of conduct","2f 12b","aishe","nirf","affiliation","loading","departments","research","calendar","nursery","PET","admission","loading","controller","calendar","result","guidelines","loading","vision mision-2","composition","report","quality initiative","atr","aqar","best practices","feedback","loading","cycle-1","cycle-2","quality audits","extended profile","loading","loading","store","photo copier","wi-fi","scholarship","computer center","loading","ncc army","ncc air,navy","nss","fine arts","ek bharath","rotaract","unnat bharath","health care","reading","movie","loading","canteen","gym","sports","library","loading","anti ragging","legal","ed","grievance","scst","minority","sexual harassment","discipline","placement","career","cyber","alumni","gallery","rti","contact"];
        const item2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76];
       item2.forEach(i =>{
        bars[i].addEventListener("click", ()=>{
            loadHtml(html2[i],"body");
            prev2=current2;
        current2=i;
        bars[prev2].classList.remove("active");
        bars[current2].classList.add("active");
        })
       })
       
// console.log(links.length,"length");
// console.log(html.length,"length");
// console.log(links[73]);
// console.log(bars.length);

   





