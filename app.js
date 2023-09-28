$('.ui.radio.checkbox')
  .checkbox()
;

$('#submit').click(function () {

    let output = `[center][color=Transparent]aaa[/color]
    [img]https://i.imgur.com/ODe46mh.png[/img]
    
    [color=grey][size=100]LOS SANTOS COUNTY SHERIFF'S DEPARTMENT[/size][/color]
    [color=black][size=150][b]FIELD TRAINING OBSERVATION REPORT[/b][/size][/color]
    [/center]
    
    
                    [transtable=Arial]
                    [tr]
                    [td][b]RAPOR TARİHİ[/b][/td]
                    [td][b]RAPOR SAATİ[/b][/td]
                    [td][b]AŞAMA #[/b][/td][/tr]
                    [tr]
                    [td]${$('input[name="date"]').val()}[/td]
                    [td]${$('input[name="time"]').val()}[/td]
                    [td]${$('input[name="phase"]').val()}[/td]
                    [/tr]
                    [/transtable]
    
                    [transtable=Arial]
                    [tr]
                    [td][b]ADAY İSMİ[/b][/td]
                    [td][b]ÇALIŞAN NUMARASI[/b][/td]
                    [td][b]FTO İSMİ[/b][/td]
                    [td][b]ÇALIŞAN NUMARASI[/b][/td][/tr]
                    [tr]
                    [td]${$('input[name="trainee_first"]').val()} ${$('input[name="trainee_last"]').val()}[/TD]
                    [td]${$('input[name="trainee_serial"]').val()}[/TD]
                    [td]${$('input[name="fto_first"]').val()} ${$('input[name="fto_last"]').val()}[/TD]
                    [td]${$('input[name="fto_serial"]').val()}[/TD][/tr][/transtable]
    
    [transtable=Arial][tr]
    [td][b][center]KATEGORİK DEĞERLENDİRME[/center][/b][/td][/tr][/transtable]
    
    [transtable=Arial]
    [tr]
    [td][justify][b]YÖNERGELER:[/b]
    [indent=25]Y — Adayın performansı Departmanın gerekli standartları karşılıyor. Patrol Deputy olarak değerlendirmek için minimum gereksinimdir.
    Ü — Performansı, departmanın standartlarını aşıyor. Aday beklenenin ve Departman standartlarının önemli ölçüde üzerinde performans gösteriyor.
    G — Adayın belirtilen konuya ilgi göstermesi, bu alanda gelişmesi ve kendini geliştirmesi gerektiğini gösterir.
    GY — Devriye süresince aday hakkında bu başlıkta değerlendirme yapılabilecek bir olayla karşılaşılmadığını gösterir.
    ET — Adayın verilen eğitimlere karşı tepkisiz kaldığını ve kendini geliştirmediğini gösterir.[/indent][/justify][/td][/tr][/transtable]
    
    [transtable=Arial][tr]
    [td][b]DAVRANIŞ[color=transparent]-------------------------------------------------------------[/color][/b][/td]
    [td][b][center][center]DERECE[/center][/center][/b][/td]
    [tr]
    [td]Eleştiri ve Geri Bildirime Karşı Yaklaşım[/td]
    [td][center][center]${$('input[name="field1"]:checked').val()}[/center][/center][/td]
    [tr]
    [td]Polis Görevine Karşı Yatkınlık[/td]
    [td][center]${$('input[name="field2"]:checked').val()}[/center][/td]
    [tr]
    [td]Dürüstlük/Etik Kurallar[/td]
    [td][center]${$('input[name="field3"]:checked').val()}[/center][/td]
    [tr]
    [td]Liderlik[/td]
    [td][center]${$('input[name="field4"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b]GÖRÜNÜM[color=transparent]------------------------------------------------------------[/color][/b][/td]
    [td][b][center]DERECE[/center][/b][/td]
    [tr]
    [td]Genel Görünüş[/td]
    [td][center]${$('input[name="field5"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b]İLİŞKİLER[color=transparent]-------------------------------------------------------------[/color][/b][/td]
    [td][b][center]DERECE[/center][/b][/td]
    [tr]
    [td]Toplum ve Vatandaş İlişkileri[/td]
    [td][center]${$('input[name="field6"]:checked').val()}[/center][/td]
    [tr]
    [td]Diğer Kurumlarla İlişkiler[/td]
    [td][center]${$('input[name="field7"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b]PERFORMANS[color=transparent]------------------------------------------------------[/color][/b][/td]
    [td][b][center]DERECE[/center][/b][/td]
    [tr]
    [td]Her Koşulda Sürüş Becerisi[/td]
    [td][center]${$('input[name="field8"]:checked').val()}[/center][/td]
    [tr]
    [td]Rapor Yazma Becerisi[/td]
    [td][center]${$('input[name="field9"]:checked').val()}[/center][/td]
    [tr]
    [td]Saha Performansı: Kendi Başına Aktivite Gösterme[/td]
    [td][center]${$('input[name="field10"]:checked').val()}[/center][/td]
    [tr]
    [td]Saha Performansı: Genel[/td]
    [td][center]${$('input[name="field11"]:checked').val()}[/center][/td]
    [tr]
    [td]Memur Güvenliği[/td]
    [td][center]${$('input[name="field12"]:checked').val()}[/center][/td]
    [tr]
    [td]Anlaşmazlık Kontrolü[/td]
    [td][center]${$('input[name="field13"]:checked').val()}[/center][/td]
    [tr]
    [td]Problem Çözme ve Karar Verme Teknikleri[/td]
    [td][center]${$('input[name="field14"]:checked').val()}[/center][/td]
    [tr]
    [td]Telsiz İletişimi[/td]
    [td][center]${$('input[name="field15"]:checked').val()}[/center][/td]
    [tr]
    [td]Mobile Data Computer Kullanımı[/td]
    [td][center]${$('input[name="field16"]:checked').val()}[/center][/td]
    [tr]
    [td]Harita ve GPS Kullanımı: Oryantasyon/Kullanım Hızı[/td]
    [td][center]${$('input[name="field17"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b]BİLGİ[color=transparent]-------------------------------------------------------------------[/color][/b][/td]
    [td][b][center]DERECE[/center][/b][/td]
    [tr]
    [td]Departman Kuralları ve Prosedürleri[/td]
    [td][center]${$('input[name="field18"]:checked').val()}[/center][/td]
    [tr]
    [td]Ceza Hukuk Bilgisi[/td]
    [td][center]${$('input[name="field19"]:checked').val()}[/center][/td]
    [tr]
    [td]Ceza Prosedür Bilgisi[/td]
    [td][center]${$('input[name="field20"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b](( ROLEPLAY ))[color=transparent]------------------------------------------------------[/color][/b][/td]
    [td][b][center]DERECE[/center][/b][/td]
    [tr]
    [td]Roleplay Kalitesi[/td]
    [td][center]${$('input[name="field21"]:checked').val()}[/center][/td]
    [tr]
    [td]Karakter Derinliği Yaratma, Betimleme[/td]
    [td][center]${$('input[name="field22"]:checked').val()}[/center][/td]
    [tr]
    [td]Tavırlar ve Davranışlar[/td]
    [td][center]${$('input[name="field23"]:checked').val()}[/center][/td]
    [tr]
    [/transtable]
    
    [transtable=Arial][tr]
                    [td][b][center]YAZILI DEĞERLENDİRME[/center][/b][/td][/tr][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr]
                    [td][justify][b]YÖNERGELER:[/b] 
					Bölüm A & B — Tamamlanan FTOR'a dayanarak, Performans Referans Listesinin yardımıyla adayın EN ÇOK ve EN AZ tatmin edici performansını belirleyin.
                    Bölüm C — Devriye sırasında adaylara öğretilen teorik/pratik materyallerin ve bilgilerin ayrıntılı listesini sağlayın. Devriye süresince yapılan eylemlerin detaylı bir listesini sunun.[/justify][/td][/tr][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr][td][b]BÖLÜM A. EN İYİ PERFORMANS[/b][/TD][/TR]
                    [tr][td]${$('#positive').val()}[/TD][/TR][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr][td][b]BÖLÜM B. EN ZAYIF PERFORMANS[/b][/TD][/TR]
                    [tr][td]${$('#negative').val()}[/TD][/TR][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr][td][b]BÖLÜM C. ÖĞRETİLEN PRATİK/TEORİK BİLGİLER & DEVRİYE KAYDI[/b][/TD][/TR]
                    [tr][td]${$('#documented').val()}[/TD][/TR][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr]
                    [td][b][center]İMZALAR[/center][/b][/td][/tr][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr]
                    [td][b]ADAY İMZASI[/b][/td]
                    [td][b]TARİH[/b][/td][/tr]
                    [tr]
                    [td]${$('input[name="trainee_first"]').val()} ${$('input[name="trainee_last"]').val()}[/TD]
                    [td]${$('input[name="date"]').val()}[/TD][/tr]
                    [tr]
                    [td][b]FTO İMZASI[/b][/td]
                    [td][b]TARİH[/b][/td][/tr]
                    [tr]
                    [td]${$('input[name="fto_first"]').val()} ${$('input[name="fto_last"]').val()}[/TD]
                    [td]${$('input[name="date"]').val()}[/TD][/tr][/transtable]
    
       [transtable=Arial]
                    [tr]
                    [td][b][center]GERİ BİLDİRİM FORMU (SADECE ADAYLAR)[/center][/b][/td][/tr][/transtable]
    
                    [transtable=Arial]
                    [tr]
                    [td][justify][b]YÖNERGELER:[/b]
    Saha devriyesinin tamamlanmasının ardından aday, FTO'suna ilişkin gizli bir performans değerlendirmesi sunmalıdır.
    
    FTP Command, bir aday tarafından tamamlanan her FTO Geri Bildirimini inceleyecektir. Bu, FTP Command ile aday arasında gizli bilgi olarak kalacaktır. Bilgiler, FTO'nun bir eğitmen ve değerlendirici olarak genel performansını artırmak için kullanılacaktır.
    
    [b][url=https://forms.gle/o7BWNRWFjJRZsCXh6]FTO Geri Bildirim Formu[/url][/b][/justify][/td][/tr][/transtable]`

    $('#output').val(output);
});

$('#copy').click(function() {
    
  var copyText = document.getElementById('output');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

});