var divUtama = new Vue({
    //element 
    el : '#divUtama',
    //data
    data : {
        pengembang : 'Haxors',
        dataToDo : [
            {no : '1', judul : 'beresin tempat tidur', deks : 'Membersihkan tempat tidur', waktu : '12:00'},
            {no : '2', judul : 'mandi', deks : 'Mandi', waktu : '13:00'},
            {no : '3', judul : 'pergi sekolah', deks : 'Pergi ke sekolah', waktu : '14:00'}
        ]
    }
});