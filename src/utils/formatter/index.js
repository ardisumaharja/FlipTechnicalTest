export const BankNameFormatter = (text) => {
    if(text.length <= 4){
        return text.toUpperCase()
    }else { 
        return text.slice(0,1).toUpperCase() + text.slice(1,text.length)
    }
}

export const DateFormatter = (text) => {
   const month = ['Januari','Febuari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
   const temp = text.slice(0,10).split('-')
   return temp[2]+' '+month[parseInt(temp[1])]+' '+temp[0]
}

export const MoneyFormatter = (text) => {
    const tempString = text.toString()
	const sisa = tempString.length % 3
	let rupiah = tempString.substr(0, sisa)
	const ribuan = tempString.substr(sisa).match(/\d{3}/gi)
    
	if(ribuan){
		const separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}	

	return 'Rp'+rupiah
}