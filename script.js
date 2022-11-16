function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
// задание 1 : среднее арифметическое

const arr = [12,44,21];
console.log ('массив') ; 
console.log(arr);
console.log ('количество элементов массиива');  
console.log (arr.length) ; 
  function midArif(t) {return  t.map(i=>x+=i, x=0).reverse()[0]/t.length};
 
  console.log('среднее арифметическре элементов массива');
  console.log(midArif(arr));
  //задание 2: большее из трех чисел
 /* const t1=parseInt(prompt('введите первое число'));
  const t2=parseInt(prompt('введите второе число'));
  const t3=parseInt(prompt('введите  третье число'));
  console.log('первое число  '+t1);
  console.log('второе число  '+t2);
  console.log('третье число  '+t3);
  function max(a,b,c){
    if(a==undefined){
        return undefined;
    }
    if(b==undefined){
        return a;
    }
    if(c==undefined){
        if(a>b){
            return a
        }
        return b;
    }
    if(a>b && a>c){
        return a;
    }
    if(b>c){
        return b;
    }
    return c;
 };
 alert('наибольшее число '+ max(t1,t2,t3));
 console.log('наибольшее  число  '+ max(t1,t2,t3));*/

 //задание 3: программа угадывания числа
 let h=getRandomInRange(1, 10);
 console.log(h);
  let z=0;
  
 while(true){
  let f=parseInt(prompt('введите искомое  число в диапазоне 1..10'));
  if(f>h){
  alert('много');
  z++;
  };
  if(f<h){
  alert('мало');
  z++;
  };
  if(f==h){
    z++;
    alert('<БИНГО!!! Количество попыток '+z);
    break;
       }
  
  }