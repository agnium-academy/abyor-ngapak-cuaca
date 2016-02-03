$(function(){
    get_weather();
    });
$(function(){
    get_country();
});

    var get_weather = function() {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=Bogor,id&appid=44db6a862fba0b067b1930da0d769e98',
            processData:false,
            type: 'GET',
            dataType: 'json',
//            beforeSend:function(jqXHR, settings){
//                jqXHR.setRequestHeader('Content-Type', 'application/json');     //ini tipe data json
//            },
            success: function(data, textStatus, jqXHR){
                process_weather(data);      //data.data karena ada objek di dalam objek
                console.log(data.sys.country);      //kebenaran ditegakkan!
            }
        });
    };
    var process_weather = function(weather){  //person ngambil dari data.data
//        $.each(weather,function(i,cuaca){ //looping untuk array
//            $("#dataTables-weather tbody").append(
//            '<tr>'+
//            "<td>"+ weather.name +"</td>"+
//            "<td>" +weather.sys.country+"</td>"+
//            "<td>" +weather.main.temp+"</td>"+
//            "<td><a href='#' class='btn btn-danger btn-xs' title='delete' ><i class='fa fa-times fa-left'></i></a>"+
//            "<a href='#' class='btn btn-info btn-xs' title='edit location' ><i class='fa fa-edit fa-left'></i></a>"+
//            "</tr>"
//            );
//        });
          var temperature = Math.round(weather.main.temp - 273.15);
          $('.large-temp').html(temperature +" &#8451" + "</br>" ); //ambil value lalu lempar ke html
          $('.city').html(weather.name + ", "+ weather.sys.country);
//        $('#lokasi').html(orang.alamat);
    };
    var get_weather = function() {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=Bogor,id&appid=44db6a862fba0b067b1930da0d769e98',
                processData:false,
                type: 'GET',
                dataType: 'json',
    //            beforeSend:function(jqXHR, settings){
    //                jqXHR.setRequestHeader('Content-Type', 'application/json');     //ini tipe data json
    //            },
                success: function(data, textStatus, jqXHR){
                    process_weather(data);      //data.data karena ada objek di dalam objek
                    console.log(data.sys.country);      //kebenaran ditegakkan!
                }
            });
        };
        var process_weather = function(weather){  //person ngambil dari data.data
    //        $.each(weather,function(i,cuaca){ //looping untuk array
    //            $("#dataTables-weather tbody").append(
    //            '<tr>'+
    //            "<td>"+ weather.name +"</td>"+
    //            "<td>" +weather.sys.country+"</td>"+
    //            "<td>" +weather.main.temp+"</td>"+
    //            "<td><a href='#' class='btn btn-danger btn-xs' title='delete' ><i class='fa fa-times fa-left'></i></a>"+
    //            "<a href='#' class='btn btn-info btn-xs' title='edit location' ><i class='fa fa-edit fa-left'></i></a>"+
    //            "</tr>"
    //            );
    //        });
              var temperature = Math.round(weather.main.temp - 273.15);
              $('.large-temp').html(temperature +" &#8451" + "</br>" ); //ambil value lalu lempar ke html
              $('.city').html(weather.name + ", "+ weather.sys.country);
    //        $('#lokasi').html(orang.alamat);
        };
