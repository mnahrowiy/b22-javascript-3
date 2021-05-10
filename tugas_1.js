
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

cekHariKerja("senin").then(resolvedValue=>{
      console.log(resolvedValue)
      console.log("sukses")
}).catch(err => {
        console.log(err)
})

async function proces(_hari){
    try {
        const hari = await cekHariKerja(_hari)
        console.log(hari)
    }catch(err){
        console.log(err)
    }finally{
        console.log('Proses Berakhir')
    }
}

proces('senin')


/*
penggunaan then-catch untuk program ini adalah 
apabila terjadi salah input ataupun tidak ada parameter pada function,
maka catch akan menampilkan pesan error

sedangkan try-catch digunakan untuk menangkap sebuah error pada program
seperti salah ketik ataupun ada kesalahan saat mengetik kode, maka catch akan
menangkap error tersebut dan menampilkannya ke output layar
*/


