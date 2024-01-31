//no 1//
for(let i = 0; i <= 50; i++){
    console.log(i)
}

let a = 1 
while (a<= 50){ 
    console.log(a) 
    a++ 
}

//no 2//
let b = 1
while (b <= 50) {
    console.log(b + " Adalah bilangan ganjil")
    b+=2
}

//no 3//
let c = 2
while (c <= 50) {
    console.log(c + " Adalah bilangan genap")
    c+=2
}

//no 4//
let d = 1
while (d <= 50) {
    if (d % 2 == 0){
        console.log(d + " Bilangan Genap")
    }else if (d % 2 != 0) {
        console.log(d + " Bilangan Ganjil")
    } d++
}


//no 5//
let total
let terbesar = 0
let terkecil = 0
let e = 1
while (e <=20) {
    let bil = Number(prompt("Masukkan angka"))
    total += bil

    if (bil > terbesar){
        terbesar = bil
    }

    if (bil < terkecil){
        terkecil = bilangan
    }
    e++   
}
let rtrt = e / 2

console.log("Bilangan terbesar:" + terbesar)
console.log("Bilangan Terkecil:" + terkecil)
console.log("Rata-rata:" + rtrt)    
