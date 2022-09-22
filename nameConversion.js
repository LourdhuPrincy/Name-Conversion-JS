const input=document.getElementById('text');
const btn=document.getElementById('convert-btn');
const camel=document.getElementById('camel-case');
const pascal=document.getElementById('pascal-case');
const snake=document.getElementById('snake-case');
const screamSnake=document.getElementById('screaming-snake-case');
const kebab=document.getElementById('kebab-case');
const screamKabab=document.getElementById('screaming-kebab-case');

// creating camelcase functon
function camelCase(str){
   const arrC1= str.trim().toLowerCase().split(/[\s\.]/g);
   const arrC2=[];
   for(const el of arrC1){
     if(arrC1.indexOf(el)!=0){
       arrC2.push(el.replace(el[0], el[0].toUpperCase()));
     }else{
        arrC2.push(el);
     }
    }
   camel.innerHTML=arrC2.join('');
}

// creating pascalcase function
function pascalCase(str){
   const arrC1= str.trim().toLowerCase().split(/[\s\.]/g);
   const arrC2=[];
   for(const el of arrC1){
      arrC2.push(el.replace(el[0], el[0].toUpperCase()));
     }
   pascal.innerHTML=arrC2.join('');
}

// creating snakecase function
function snakeCase(str){
   let newStr=str.toLowerCase().replace(/[\s\.]/g, '_');
   snake.innerHTML=newStr;
} 

// creating screaming snakecase function
function screamSnakeCase(str){
    let newStr=str.toUpperCase().replace(/[\s\.]/g, '_');
    screamSnake.innerHTML=newStr;
 } 

 // creating kebabcase function
function kebabCase(str){
   let newStr=str.toLowerCase().replace(/[\s\.]/g, '-');
   kebab.innerHTML=newStr;
} 

// creating screaming kababcase function
function screamKebabCase(str){
    let newStr=str.toUpperCase().replace(/[\s\.]/g, '-');
    screamKabab.innerHTML=newStr;
 } 

btn.addEventListener('click', ()=>{
    let value=input.value;
    camelCase(value);
    pascalCase(value);
    snakeCase(value);
    screamSnakeCase(value);
    kebabCase(value);
    screamKebabCase(value);
});
