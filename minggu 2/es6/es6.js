const pertambahan = (num1,num2) => {
    return num1+num2;
}

const perkalian = (num1,num2) => {
    return num1*num2;
}

const pembagian = (num1,num2) => {
    return num1/num2;
}

const luasalassegitiga= (a,t) => {
    return 0,5*a*t;
}

const luaslingkaran=(d) => {
    return 3,14*d;
}


const siswa = [
    {
        "nama" :"aziz",
        "kelas":"XI RPL1"
    },
    {
        "nama" :"azaz",
        "kelas":"XI RPL1"
    },
    {
        "nama" :"azuz",
        "kelas":"XI RPL1"
    },
    {
        "nama" :"azez",
        "kelas":"XI RPL1"
    },
    {
        "nama" :"azoz",
        "kelas":"XI RPL1"
    },
    {
        "nama" :"dzul",
        "kelas":"XI RPL1"
    },
    {
        "nama" :"dzal",
        "kelas":"XI RPL1"
    },
    {
        "nama" :"dzil",
        "kelas":"XI RPL1"
    },
];

let x;

for(x in siswa){
    let namasiswa=siswa[x].nama
    let kelassiswa=siswa[x].kelas
    let divider = "<div><span class='nama-siswa'>"+namasiswa+"</span><span class='kelas-siswa'>"+kelassiswa+"</span>\<div>"
    document.getElementById('siswa-rpl').innerHTML +=  divider
}

