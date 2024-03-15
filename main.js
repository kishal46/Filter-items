const button=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
const search=document.getElementById('search');

// search product

search.addEventListener('keyup',(e)=>{
    let searchtext=e.target.value.toLowerCase().trim();
    boxes.forEach((box)=>{
        const data=box.dataset.item;
        if(data.includes(searchtext)){
            box.style.display='block';
        }else{
            box.style.display='none';   
        }
        // this is select for all balance normal for seaching time
        button.forEach((button)=>{
            button.classList.remove('btn-clicked');
        });
        button[0].classList.add('btn-clicked');
    });
});
// this is one click than again change hover normal
button.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter=e.target.dataset.filter;

        boxes.forEach((box)=>{
            if(btnfilter=='all'){
                box.style.display="block";
            }else{
                const boxfilter=box.dataset.item;
                if(btnfilter==boxfilter){
                    box.style.display="block";
                }else{
                    box.style.display="none";
                }
            }
        });
    });
});

function setActiveBtn(e){
    button.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}
