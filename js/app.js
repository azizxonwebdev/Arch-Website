    let r = 0
	let b = 0
	let block = document.querySelector('.images')
    let progress = document.querySelector('.progressbaredit')
	function slider(n){
		b = 0
		r = n
		if(r>=3){
			r=0
		}
		if(r<0){
			r=3
		}
		block.style.left = -r*1500+'px'
        progress.style.left = r*500+'px'
	}
    function ongga(){
		r++
		slider(r)
	}
	function vaqt(){
        b++
		setTimeout("vaqt()",1000)
		if(b==5){
			ongga()
		}
	}
	vaqt()






    // counter
    let f = ''
    let i = 0
    let j = 0
    let l = 0
    let q = 0

    let a = '+'

    let text1 = document.querySelector('#number1')
    let text2 = document.querySelector('#number2')
    let text3 = document.querySelector('#number3')
    let text4 = document.querySelector('#number4')

    let count1 = document.querySelector('#count1')
    let count2 = document.querySelector('#count2')
    let count3 = document.querySelector('#count3')
    let count4 = document.querySelector('#count4')


    function counter1(){
        i++
        text1.innerHTML = i
        f = setTimeout("counter1()", 100)
        if(Number(text1.innerHTML)==Number(count1.innerHTML)){
            clearTimeout(f)
        }
    }
    
    function counter2(){
        j++
        text2.innerHTML = j
        f = setTimeout("counter2()", 35)
        if(Number(text2.innerHTML)==Number(count2.innerHTML)){
            clearTimeout(f)
        }
        text2.innerHTML = text2.innerHTML+a
    }
    
    function counter3(){
        l++
        text3.innerHTML = l
        f = setTimeout("counter3()", 100)
        if(Number(text3.innerHTML)==Number(count3.innerHTML)){
            clearTimeout(f)
        }
    }
    
    function counter4(){
        q++
        text4.innerHTML = q
        f = setTimeout("counter4()", 25)
        if(Number(text4.innerHTML)==Number(count4.innerHTML)){
            clearTimeout(f)
        }
        text4.innerHTML = text4.innerHTML+a
    }
    setTimeout("counter1()",1500)
    setTimeout("counter2()",1500)
    setTimeout("counter3()",1500)
    setTimeout("counter4()",1500)