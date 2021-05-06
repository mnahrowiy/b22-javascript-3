
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
    console.log(data.map(item=>item))
}
getmonth(tampil_data)
