
    total=0;
    totals=0;
    $(document)  //(1)
    .on('click','[name=menubox]',function(){
        str=$(this).text();
        ar=str.split(',');
        ar[0]=ar[0].trim();
        ar[1]=ar[1].trim();
        $('#name').val(ar[0]);
        $('#price').val(ar[1]);
    }) //(2)
    .on('change','#qty',function(){
        count=$('#qty').val();
        $('#price').val(ar[1]*count);
    })
    .on('click','#btnR',function(){ //(3)
        $('#name').val('');
        $('#price').val('');
        $('#qty').val(1);
    })
    .on('click','#btnS',function(){//(4)
        if($('#name').val()==''||$('#price').val()==''||$('#qty').val()==''){
            return false;
        }
        n=' 메뉴 '+$('#name').val();
        p=' 가격 '+$('#price').val();
        q=' 수량 '+$('#qty').val();
        $('#orderbox').append('<option id="menuboxxx" name="menubox">'+n+p+q+'</option>');
        $('#btnR').trigger('click');
        arp=p.split('가격 ');
        arp[1]=parseInt(arp[1]);
        total=total+arp[1];
        console.log(total);
        $('#orderprice').val(total);
    })
    .on('click','#btnC',function(){
        $('#orderprice').val('');
        $('#mobile').val('');
        $('#totaldar').val(totals);
        while(($('#menuboxxx').length)){
        $('#menuboxxx').remove();
        }
        total=0;
    })
    .on('click','#btnO',function(){
        if($('#orderprice').val()==''){
            return false;
        }
        let today = new Date();
        year= today.getFullYear()+'년 ';
        month = today.getMonth()+1+'월 ';
        date = today.getDate()+'일 ';
        hour = today.getHours()+'시 ';
        minute = today.getMinutes()+'분 ';
        second = today.getSeconds()+'초 ';
        time=year+month+date+hour+minute+second
        new Date();
        t='주문금액 '+$('#orderprice').val()+'원';
        number='모바일번호 '+$('#mobile').val();
        $('#final').append('<option id="menuboxx" name="menubox">'+time+'</option>');
        $('#final').append('<option id="menuboxx" name="menubox">'+t+'</option>');
        if(!$('#mobile').val()==''){
            $('#final').append('<option id="menuboxx" name="menubox">'+number+'</option>');
        }
        if($('#mobile').val()==''){
            $('#final').append('<option id="menuboxx" name="menubox">적립번호가 없습니다.</option>');
        }
        $('#orderprice').val('');
        $('#mobile').val('');
        $('#final').append('<option id="menuboxx" name="menubox"></option>');
        $('#btnC').trigger('click');
        arp=t.split('주문금액 ');
        arp[1]=parseInt(arp[1]);
        totals=totals+arp[1];
        console.log(totals);
        $('#totaldar').val(totals);
        total=0;
    })
    .on('click','#buttnG',function(){
        while($('#menuboxxx').length){
        $('#menuboxxx').remove();
        }
        while($('#menuboxx').length){
            $('#menuboxx').remove();
            }
        $('#orderprice').val('');
        $('#mobile').val('');
        total=0;
        $('#totaldar').val('');
        totals=0;
    })
