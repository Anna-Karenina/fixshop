function init() {
    $.post(
        "core.php",
        {
            "action" : "init"
        },
        showGoods
    );
}

function showGoods(data) {
    data = JSON.parse(data);
    console.log(data);
    var out='<select>';
    out +='<option data-id="0">Новый товар</option><br>';
    for (var id in data) {
        out +=`<option data-id="${id}">${data[id].name}</option>`;
    }
    out +='</select>';
    $('.goods-out').html(out);
    $('.goods-out select').on('change', selectGoods);
}

function selectGoods(){
    var id = $('.goods-out select option:selected').attr('data-id');
    $.post(
    "core.php",
        {
            "action" : "selectOneGoods",
            "gid" : id
        },
        function(data){
           data = JSON.parse(data);
            $('#gname').val(data.name);
            $('#gcost').val(data.cost);
            $('#gdescr').val(data.description);
            $('#gimg').val(data.image);
            $('#gorder').val(data.ord);
            $('#gid').val(data.id);
            $('#gcat').val(data.catalog);
        }
    );
}
function saveToDb() {
	console.log('checked1');
    var id = $('#gid').val();
    if (id != ""){
		console.log(id);
        $.post(
        "core.php",
            {
                "action" : "updateGoods",
                "gid" : $('#gid').val(),
                "gname" : $('#gname').val(),
                "gcost" : $('#gcost').val(),
                "gdescr" : $('#gdescr').val(),
                "gimg" : $('#gimg').val(),
                "gorder" : $('#gorder').val(),
                "gcat" : $('#gcat').val()
            },
            function(data){
                if (data == 1){
                    alert('Изменения сохранены')
                    init();
                }else{
                    console.log(data);
                }
            }
        );
    }
    else{
        console.log('new');
        $.post(
        "core.php",
            {
                "action" : "newGoods",
                "id" : 0,
                "gname" : $('#gname').val(),
                "gcost" : $('#gcost').val(),
                "gdescr" : $('#gdescr').val(),
                "gimg" : $('#gimg').val(),
                "gorder" : $('#gorder').val(),
                "gcat" : $('#gcat').val()
            },
            function(data){
                if (data == 1) {
                    alert('Записть добавленна')
                    init();
                }
                else {
                    console.log(data);
                }
            }
        );
    }
}

$(document).ready(function () {
   init();
    $('.add-to-db').on('click', saveToDb);
});


