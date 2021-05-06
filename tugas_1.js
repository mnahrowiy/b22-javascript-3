
const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}


try{
    cekHariKerja("senin").then(resolvedValue=>{
        console.log(resolvedValue)
        console.log("sukses")
    }).catch(err => {
        console.log(err)
    })
}catch(error){
    console.log(error + " program gagal berjalan")
}

/*
penggunaan then-catch untuk program ini adalah 
apabila terjadi salah input ataupun tidak ada parameter pada function,
maka catch akan menampilkan pesan error

sedangkan try-catch digunakan untuk menangkap sebuah error pada program
seperti salah ketik ataupun ada kesalahan saat mengetik kode, maka catch akan
menangkap error tersebut dan menampilkannya ke output layar
*/


