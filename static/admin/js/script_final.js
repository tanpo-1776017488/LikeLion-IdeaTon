$( document ).ready(function() {
    $('.trigger').on('click', function() {
      //alert('hello');
      $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur-it');
      var targetime=document.getElementById('settime');
      //set delivered time
      document.getElementById('postime').innerHTML=targetime.value;
      document.getElementById('destime').innerHTML=targetime.value;

      var loc=document.getElementById('loc');
      loc=loc.options[loc.selectedIndex].text;
      
      document.getElementById('loc_post').innerHTML=loc;
      document.getElementById('loc_last').innerHTML=loc;

      var howMany_html=$('#cnt').val();
      var howMany=Number(howMany_html);
      document.getElementById('cnt_post').innerHTML=howMany_html;
      document.getElementById('cnt_last').innerHTML=howMany_html;

      var del_price_html=document.getElementById('del_price').innerHTML.replace(/[^0-9]/g,'');
      del_price=Number(del_price_html);

      var target=parseInt(del_price/howMany);
      var final_payment_str=document.getElementById('final_payment').innerHTML.replace(/[^0-9]/g,'');
      var final_payment=Number(final_payment_str)+target;
      
      
      if(parseInt(target/1000)!=0)
      {
          var tmp=String(target);
          tmp=tmp.split('').reverse().join('');
          tmp=tmp.slice(0,3)+','+tmp.slice(3,tmp.length);
          target=tmp.split('').reverse().join('');
      }
      if(parseInt(del_price/1000)!=0)
      {
          var tmp=String(del_price);
          tmp=tmp.split('').reverse().join('');
          tmp=tmp.slice(0,3)+','+tmp.slice(3,tmp.length);
          del_price=tmp.split('').reverse().join('');
      }
      if(parseInt(final_payment/1000)!=0)
      {
          var tmp=String(final_payment);
          tmp=tmp.split('').reverse().join('');
          tmp=tmp.slice(0,3)+','+tmp.slice(3,tmp.length);
          final_payment_str=tmp.split('').reverse().join('');
        console.log(final_payment_str);
      }
      
      document.getElementById('tell_del_price').innerHTML=del_price+'원 <i class="fas fa-arrow-right" sy></i>'+ target+'원';
      document.getElementById('final_payment').innerHTML='<button class="btn bttn own_trigger"><a style="color: #000; text-decoration: none;"class="btn-example">'+final_payment_str+'원 결제하기</a></button>';
      document.getElementById('final_del_price').innerHTML=del_price+'원 <i class="fas fa-arrow-right" sy></i>'+ target+'원';
      document.getElementById('myorder').innerHTML=final_payment_str+'/15,900';
      return false;
    });
    $(document).on('click','.own_trigger',function()
    {
      $('.modal-wrapper').toggleClass('open');
      $('.modal_wrapper_final').toggleClass('on');
    });
    $(document).on('click','.final_close',function()
    {
      $('.modal_wrapper_final').toggleClass('on');
    });
    // $(document).on('click','.confirm',function()
    // {
    //   location.replace("{% url 'mainmenu'%}");
    // })
  });
  
  
  