
const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July', 
        'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sory Data Not Found'))
        }
    }, 4000)
}

function tampil_data(error, month){
    console.log(error)
    // console.log(month)
    month.map(bulan=> {
        console.log(bulan)
    })
}
getmonth(tampil_data)

// const callback = month.map(function(val){
//     return val
// })

// function callback(month){
//     bulan.map(item=>{
//         return value
//     })
// }

// const cari_data = month.map(
//     function (element, index, array ){

//     }
// )
// function callback(bulan){
//     month.map(bulan=> {
//         return bulan
//     })
// }

// getmonth(callback)

// const cari_data = (bulan) =>{ map(month=>{
//         return month === bulan
//     })
// }

// cari_data('January')

// const sweetArray = [2, 3, 4, 5, 35]
// const sweeterArray = sweetArray.map(sweetItem => {
//     return sweetItem * 2
// })

// console.log(sweeterArray)