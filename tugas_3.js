// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

// program cari planet
const cekNamaPlanet = (planet) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataPlanet = ['Merkurius', 'Venus', 'Bumi', 'Mars', 'Jupyter', 'Satrunus', 'Uranus', 'Neptunus']
            let cek = dataPlanet.find((item)=>{
                return item === planet
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Kamu harus pilih nama planet'))
            }
        }, 2000);
    })
}


try{
    cekNamaPlanet("Mars").then(resolvedValue=>{
        console.log(resolvedValue)
        console.log("sukses ketemu")
    }).catch(err => {
        console.log(err)
    })
}catch(error){
    console.log(error + " program gagal berjalan")
}


// program mencari buah

const cekNamaBuah = (buah) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataBuah = ['Semangka', 'Pisang', 'Mangga', 'Pepaya', 'Jeruk', 'Anggur', 'Melon', 'Manggis']
            let cek = dataBuah.find((item)=>{
                return item === buah
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Kamu harus pilih nama buah'))
            }
        }, 3000);
    })
}


try{
    cekNamaBuah("Pisang").then(resolvedValue=>{
        console.log(resolvedValue)
        console.log("sukses ketemu")
    }).catch(err => {
        console.log(err)
    })
}catch(error){
    console.log(error + " program gagal berjalan")
}