const HP = [
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram":"3 gb",
        "storage":"64gb",
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",s
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",
    },
    {
        "nama" :"vivo y81",
        "harga":"1.900.00",
        "ram": "3 gb",
        "storage":"64 gb",
    },
];

let x;

for(x in HP){
    let namaHP = HP[x].nama
    let gambarHP = HP[x].gambar
    let hargaHP = HP[x].harga
    let ramHP = HP[x].ram
    let storageHP = HP[x].storage
    let divider = "<div><span class='namaHP'>"+namaHP +"</span><span class='gambarHP'>"+gambarHP+"</span><span class='hargaHP'>"+hargaHP+"</span><span class='ramHP'>"+ramHP+"</span><span class='storageHP'>"+storageHP+"</span><div>";
    document.getElementById('merek-hp').innerHTML += divider
}