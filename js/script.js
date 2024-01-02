var submenuVisible = {
    'girisEkrani': false,
    'okulBilgileri': false
};
function uploadImage() {
    var fileInput = document.getElementById('fileInput');
    var previewContainer = document.getElementById('previewContainer');

    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var previewImage = document.createElement('img');
            previewImage.src = e.target.result;
            previewImage.style.maxWidth = '25%';
            previewContainer.innerHTML = '';
            previewContainer.appendChild(previewImage);
        };

        reader.readAsDataURL(file);
    } else {
        alert('Lütfen bir resim seçin.');
    }
}

function toggleSubmenu(category) {
    var submenuId = category + 'Submenu';
    if (submenuVisible[category]) {
        document.getElementById(submenuId).style.display = 'none';
        submenuVisible[category] = false;
    } else {
        document.getElementById(submenuId).style.display = 'block';
        submenuVisible[category] = true;
    }
}

function showContent(category) {
    var contentPlaceholder = document.getElementById('contentPlaceholder');
    var content = '';

    switch (category) {
        case 'notlarDuyurular':
            content = '<h3>Notlar ve Duyurular</h3><h4>Herhangi bir duyuru bulunmamıştır.</h4>';
            break;
        case 'eskiNotOrtalamalari':
            content = '<h3>Ağırlıklı Not Ortalamaları</h3><h4>Herhangi bir Not Ortalaması mevcut değildir.</h4>';
            break;
            case 'okulbilgileriGuncelle':
    content = '<h3>Okul Bilgileri Güncelle</h3>' +
        '<form id="schoolInfoForm" onsubmit="submitSchoolInfoForm(event)">' +
        '  <label for="kurumKodu">Kurum Kodu:</label>' +
        '  <input type="text" id="kurumKodu" name="kurumKodu" required><br>' +
        '  <label for="kurumAdi">Kurum Adı:</label>' +
        '  <input type="text" id="kurumAdi" name="kurumAdi" required><br>' +
        '  <label for="kurumTuru">Kurum Türü:</label>' +
        '  <input type="text" id="kurumTuru" name="kurumTuru" required><br>' +
        '  <label for="ili">İl:</label>' +
        '  <input type="text" id="ili" name="ili" required><br>' +
        '  <label for="ilcesi">İlçe:</label>' +
        '  <input type="text" id="ilcesi" name="ilcesi" required><br>' +
        '  <label for="beldesi">Belde:</label>' +
        '  <input type="text" id="beldesi" name="beldesi" required><br>' +
        '  <label for="koyu">Köy:</label>' +
        '  <input type="text" id="koyu" name="koyu" required><br>' +
        '  <label for="saymanlikKodu">Saymanlık Kodu:</label>' +
        '  <input type="text" id="saymanlikKodu" name="saymanlikKodu" required><br>' +
        '  <label for="kurumTipi">Kurum Tipi:</label>' +
        '  <input type="text" id="kurumTipi" name="kurumTipi" required><br>' +
        '  <label for="kurumMuduru">Kurum Müdürü:</label>' +
        '  <input type="text" id="kurumMuduru" name="kurumMuduru" required><br>' +
        '  <label for="yerlesimYeri">Yerleşim Yeri:</label>' +
        '  <input type="text" id="yerlesimYeri" name="yerlesimYeri" required><br>' +
        '  <label for="durumu">Durumu:</label>' +
        '  <input type="text" id="durumu" name="durumu" required><br>' +
        '  <label for="kapalilikNedeni">Kapalılık Nedeni:</label>' +
        '  <input type="text" id="kapalilikNedeni" name="kapalilikNedeni" required><br>' +
        '  <label for="adresi">Adresi:</label>' +
        '  <input type="text" id="adresi" name="adresi" required><br>' +
        '  <label for="telefonNo">Telefon No:</label>' +
        '  <input type="text" id="telefonNo" name="telefonNo" required><br>' +
        '  <label for="faksNo">Faks No:</label>' +
        '  <input type="text" id="faksNo" name="faksNo" required><br>' +
        '  <label for="webSayfasi">Web Sayfası:</label>' +
        '  <input type="text" id="webSayfasi" name="webSayfasi" required><br>' +
        '  <label for="eposta">E-posta:</label>' +
        '  <input type="text" id="eposta" name="eposta" required><br>' +
        '  <label for="pansiyonKapasiteErkek">Pansiyon Kapasite Erkek:</label>' +
        '  <input type="text" id="pansiyonKapasiteErkek" name="pansiyonKapasiteErkek" required><br>' +
        '  <label for="pansiyonKapasiteKiz">Pansiyon Kapasite Kız:</label>' +
        '  <input type="text" id="pansiyonKapasiteKiz" name="pansiyonKapasiteKiz" required><br>' +
        '  <input type="submit" value="Güncelle">' +
        '</form>';
    break;
    case 'ogretimseklisubeGuncelle':
        content = `
            <h3>Öğretim Şekli/Şube Tipi Güncelle</h3>
            <form id="teachingForm">
                <label for="normalOgretim">Normal Öğretim:</label>
                <input type="radio" id="normalOgretim" name="ogretimTipi" value="normal" required>
    
                <label for="ikiliOgretim">İkili Öğretim:</label>
                <input type="radio" id="ikiliOgretim" name="ogretimTipi" value="ikili" required>
    
                <h3>Özel Eğitim:</h3>
                <label >Hafif Zihinsel Engelli Öğrenciler Özel Eğitim Şubesi</label>
                <input type="checkbox">
    
                <label >Orta-Ağır Zihinsel Engelli Öğrenciler Özel Eğitim Şubesi</label>
                <input type="checkbox">
                <label >İşitme Engelli Öğrenciler Özel Eğitim Şubesi</label>
                <input type="checkbox">
    
                <label >Görme Engelli Öğrenciler Özel Eğitim Şubesi</label>
                <input type="checkbox">
                <label >Bedensel Engelli Öğrenciler Özel Eğitim Şubesi</label>
                <input type="checkbox">
    
                <label >Hafif Otistik Engelli Öğrenciler Özel Eğitim Şubesi</label>
                <input type="checkbox">
                <label >Orta-Ağır Engelli Öğrenciler Özel Eğitim Şubesi</label>
                <input type="checkbox">
                <label >Birden Fazla Engelli Öğrenciler Özel Eğitim Şubesi(Zihinsel)</label>
                <input type="checkbox">
                <label >Birden Fazla Engelli Öğrenciler Özel Eğitim Şubesi(Otistik)</label>
                <input type="checkbox">
              
    
                <input type="submit" value="Güncelle">
            </form>`;
        break;
        case 'tahsisDurumu':
            content = '<h3>Tahsis Durumu</h3><p>İlgili içerik buraya eklenecek.</p> ';
            break;
        case 'binaDurumu':
            content = '<h3>Bina Durumu</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'lojmanDurumu':
            content = '<h3>Lojman Durumu</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'binaKullanimi':
            content = '<h3>Bina Kullanımı</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'ogrenciEkle':
            content = '<h3>Öğrenci Ekle</h3>' +
            '<form id="studentForm">' +
            '  <label for="firstName">Ad:</label>' +
            '  <input type="text" id="firstName" name="firstName" required><br>' +
            '  <label for="lastName">Soyad:</label>' +
            '  <input type="text" id="lastName" name="lastName" required><br>' +
            '  <label for="tcKimlik">TC Kimlik:</label>' +
            '  <input type="text" id="tcKimlik" name="tcKimlik" required><br>' +
            '  <label for="schoolNumber">Okul Numarası:</label>' +
            '  <input type="text" id="schoolNumber" name="schoolNumber" required><br>' +
            '  <input type="submit" value="Gönder">' +
            '</form>';
            break;
       case 'tckimliknoDegistirme':
    content = '<h3>Eski Öğrenci Bilgileri</h3>';
    content += '<label for="tcKimlikNo">T.C Kimlik No:</label>';
    content += '<input type="text" id="tcKimlikNo" name="tcKimlikNo" placeholder="Eski T.C Kimlik No">';
    content += '<label for="adi">Adı:</label>';
    content += '<input type="text" id="adi" name="adi" placeholder="Adı">';
    content += '<label for="soyadi">Soyadı:</label>';
    content += '<input type="text" id="soyadi" name="soyadi" placeholder="Soyadı">';
    content += '<label for="babaAdi">Baba Adı:</label>';
    content += '<input type="text" id="babaAdi" name="babaAdi" placeholder="Baba Adı">';
    content += '<label for="dogumYeri">Doğum Yeri:</label>';
    content += '<input type="text" id="dogumYeri" name="dogumYeri" placeholder="Doğum Yeri">';
    content += '<label for="dogumTarihi">Doğum Tarihi:</label>';
    content += '<input type="date" id="dogumTarihi" name="dogumTarihi">';

    // Öğrenci Ders ve Sınıf Bilgileri
    content += '<h3>Öğrenci Ders ve Sınıf Bilgileri</h3>';
    // Sınıflar
    content += '<label for="sinif">Sınıf/Şubesi:</label>';
    content += '<select id="sinif" name="sinif">';
    content += '<option value="a">A</option>';
    content += '<option value="b">B</option>';
    content += '<option value="a">C</option>';
    content += '<option value="a">D</option>';
    content += '<option value="a">E</option>';
    // Diğer sınıflar buraya eklenebilir
    content += '</select>';

    // Okul Numarası
    content += '<label for="okulNo">Okul Numarası:</label>';
    content += '<input type="text" id="okulNo" name="okulNo" placeholder="Okul Numarası">';
    break;
        case 'ogrenciduyuruIslemleri':
            content = '<h3>Öğrenci Duyuru İşlemleri</h3><p>Herhangi bir duyuru bulunmamıştır.</p>';
            break;
            case 'sinifdegisikligiTalep':
                content = '<h3>Öğrenci Bilgileri</h3>';
                content += '<label for="tcKimlikNo">T.C Kimlik No:</label>';
                content += '<input type="text" id="tcKimlikNo" name="tcKimlikNo" placeholder="T.C Kimlik No">';
                content += '<label for="adi">Adı:</label>';
                content += '<input type="text" id="adi" name="adi" placeholder="Adı">';
                content += '<label for="soyadi">Soyadı:</label>';
                content += '<input type="text" id="soyadi" name="soyadi" placeholder="Soyadı">';
                content += '<label for="okulNo">Okul Numarası:</label>';
                content += '<input type="text" id="okulNo" name="okulNo" placeholder="Okul Numarası">';
                
                // Öğrencilik Durumu
                content += '<label for="ogrencilikDurumu">Öğrencilik Durumu:</label>';
                content += '<select id="ogrencilikDurumu" name="ogrencilikDurumu">';
                content += '<option value="aktif">Aktif</option>';
                content += '<option value="mezun">Mezun</option>';
                // Diğer öğrencilik durumları buraya eklenebilir
                content += '</select>';
                
                // Bulunduğu Sınıf/Şube
                content += '<label for="bulunduguSinif">Bulunduğu Sınıf/Şube:</label>';
                content += '<select id="bulunduguSinif" name="bulunduguSinif">';
                content += '<option value="9A">9A</option>';
                content += '<option value="9B">9B</option>';
                // Diğer sınıf/şube seçenekleri buraya eklenebilir
                content += '</select>';
                
                // Gideceği Sınıf/Şube
                content += '<label for="gidecegiSinif">Gideceği Sınıf/Şube:</label>';
                content += '<select id="gidecegiSinif" name="gidecegiSinif">';
                content += '<option value="10A">10A</option>';
                content += '<option value="10B">10B</option>';
                // Diğer sınıf/şube seçenekleri buraya eklenebilir
                content += '</select>';
                
                // Talep Nedeni
                content += '<label for="talepNedeni">Talep Nedeni:</label>';
                content += '<select id="talepNedeni" name="talepNedeni">';
                content += '<option value="akademik">Akademik</option>';
                content += '<option value="sosyal">Sosyal</option>';
                // Diğer talep nedenleri buraya eklenebilir
                content += '</select>';
                
                // Açıklama
                content += '<label for="aciklama">Açıklama:</label>';
                content += '<textarea id="aciklama" name="aciklama" placeholder="Açıklama"></textarea>';
                break;
                case 'yatiliogrenciBilgileri':
                    content = '<h3>Öğrenci Bilgileri</h3>';
                    content += '<label for="tcKimlikNo">T.C Kimlik No:</label>';
                    content += '<input type="text" id="tcKimlikNo" name="tcKimlikNo" placeholder="T.C Kimlik No">';
                    content += '<label for="adi">Adı:</label>';
                    content += '<input type="text" id="adi" name="adi" placeholder="Adı">';
                    content += '<label for="soyadi">Soyadı:</label>';
                    content += '<input type="text" id="soyadi" name="soyadi" placeholder="Soyadı">';
                    content += '<label for="okulNo">Okul Numarası:</label>';
                    content += '<input type="text" id="okulNo" name="okulNo" placeholder="Okul Numarası">';
                    
                    // Öğrencilik Durumu
                    content += '<label for="ogrencilikDurumu">Öğrencilik Durumu:</label>';
                    content += '<select id="ogrencilikDurumu" name="ogrencilikDurumu">';
                    content += '<option value="aktif">Aktif</option>';
                    content += '<option value="mezun">Mezun</option>';
                    // Diğer öğrencilik durumları buraya eklenebilir
                    content += '</select>';
                    
                      break;
                      case 'sagliklailgilifizikseluygunlukKarnesi':
                        content = '<h3>Sağlıkla İlgili Fiziksel Uygunluk Karnesi</h3>';
                        content += '<p style="color: red;"> Sağlıkla İlgili Fiziksel Uygunluk Ölçümleri "Beden Eğitimi ve Spor Dersine Giren" Öğretmenler Tarafından Girilecektir.</p>';
                        content += '<p style="color: blue;"> Sağlıkla İlgili Fiziksel Uygunluk Karnesini Oluşturulmasında Boy, Kilo, Mekik, Şınav ve Otur-Uzan Ölçümlerinin Tamamının Doldurulması Zorunludur.</p>';
                        content += '<p style="color: red;"> Sağlıkla İlgili Fiziksel Uygunluk Karnesini Veli ve Öğrenciler E-Okul Veli Bilgilendirme Sistemi Üzerinde Göreceklerdir. Basılı Evrak Olarak Verilmeyecektir.</p>';
                        content += '<p style="color: blue;"> Sağlıkla İlgili Fiziksel Uygunluk Karnesi Ortaokul ve Lise Seviyesinde Kurumlarda Uygulanmaktadır.</p>';
                        
                        // Sınıf/Şube Seçimi
                        content += '<h3>Sınıf/Şube Seç</h3>';
                        content += '<label for="sinifSube">Sınıf/Şube:</label>';
                        content += '<select id="sinifSube" name="sinifSube">';
                        content += '<option value="9A">9A</option>';
                        content += '<option value="9B">9B</option>';
                        // Diğer sınıf/şube seçenekleri buraya eklenebilir
                        content += '</select>';
                        
                        // Seç Butonu
                        content += '<button onclick="secButonuClick()">Seç</button>';
                        break;


                        case 'subeEkle':
                            content = '<h3>Şube Ekle</h3>';
                            
                            // Sınıf ve Şube Girişi
                            content += '<h4>Sınıf ve Şube Girişi</h4>';
                            content += '<label >Sınıf:</label>';
                            content += '<select>';
                            content += '<option>5. Sınıf</option>';
                            content += '<option>6. Sınıf</option>';
                            content += '<option>7. Sınıf</option>';
                            content += '<option>8. Sınıf</option>';
                            // Diğer durum seçenekleri buraya eklenebilir
                            content += '</select>';
                            
                            content += '<label >Şube:</label>';
                            content += '<select>';
                            content += '<option>A</option>';
                            content += '<option>B</option>';
                            // Diğer durum seçenekleri buraya eklenebilir
                            content += '</select>';
                            
                            content += '<label >Müdür Yardımcısı:</label>';
                            content += '<select>';
                            content += '<option>Mustafa Gezici</option>';
                            // Diğer durum seçenekleri buraya eklenebilir
                            content += '</select>';  


                            content += '<label >Sınıf Öğretmeni:</label>';
                            content += '<select>';
                            content += '<optionRemziye Yüksek</option>';
                            content += '<option>İbrahim Yıldız</option>';
                            content += '<option>Talha Ölger</option>';
                            content += '<option>Eyüp Gürültü</option>'; 
                            content += '<option>Gizem Sayar</option>';
                            content += '<option>Benian Çorak</option>';
                            content += '<option>Rabia Turupçu</option>';
                            content += '<option>Gülbahar Başyiğit</option>';
                            // Diğer durum seçenekleri buraya eklenebilir
                            content += '</select>';
                            
                            
                            content += '<label >Sınıf Başkanı:</label>';
                            content += '<select>';
                            content += '<option>Amine Erdem</option>';
                            content += '<option>Yasemin Atak</option>';
                            content += '<option>Elanur Güngör</option>';
                            content += '<option>Murat Algit</option>';
                            content += '<option>Lalihan Güngör</option>';
                            content += '<option>Melike Güngör</option>';
                            content += '<option>Volkan Güngör</option>';
                            content += '<option>Hasret Muhammed Belçi</option>';
                            // Diğer durum seçenekleri buraya eklenebilir
                            content += '</select>';
                            
     
                            content += '<label for="grup">Şube Sabah/Öğlen Grubu:</label>';
                            content += '<input type="text" id="grup" name="grup" placeholder="Şube Sabah/Öğlen Grubu">';
                            
                            content += '<label for="durum">Şube Durumu:</label>';
                            content += '<select id="durum" name="durum">';
                            content += '<option value="aktif">Aktif</option>';
                            content += '<option value="pasif">Pasif</option>';
                            // Diğer durum seçenekleri buraya eklenebilir
                            content += '</select>';
                            
                            // Sınıf ve Şube Listesi
                            content += '<h3>Sınıf ve Şube Listesi</h3>';
                            content += '<table>';
                            content += '<thead>';
                            content += '<tr>';
                            content += '<th>Sınıf</th>';
                            content += '<th>Şube</th>';
                            content += '<th>Grubu</th>';
                            content += '<th>Müdür Yardımcısı</th>';
                            content += '<th>Sınıf Öğretmeni</th>';
                            content += '<th>Sınıf Başkanı</th>';
                            content += '<th>Şube Durumu</th>';
                            content += '</tr>';
                            content += '</thead>';
                            content += '<tbody>';
                            
                            // Burada sınıf ve şube bilgilerini doldurabilirsiniz
                            content += '<tr>';
                            content += '<td>5.Sınıf</td>';
                            content += '<td>B</td>';
                            content += '<td>Tam Gün</td>';
                            content += '<td>Mustafa Gezici</td>';
                            content += '<td>Remziye Yüksek</td>';
                            content += '<td>Amine Erdem</td>';
                            content += '<td>Açık</td>';
                            content += '</tr>';
                            
                            content += '<tr>';
                            content += '<td>5.Sınıf</td>';
                            content += '<td>A</td>';
                            content += '<td>Tam Gün</td>';
                            content += '<td>Mustafa Gezici</td>';
                            content += '<td>İbrahim Yıldız</td>';
                            content += '<td>Yasemin Atak</td>';
                            content += '<td>Açık</td>';
                            content += '</tr>';
                            
                            content += '<tr>';
                            content += '<td>6.Sınıf</td>';
                            content += '<td>A</td>';
                            content += '<td>Tam Gün</td>';
                            content += '<td>Mustafa Gezici</td>';
                            content += '<td>Talha Ölger</td>';
                            content += '<td>Elanur Güngör</td>';
                            content += '<td>Açık</td>';
                            content += '</tr>';
                            
                            content += '<tr>';
                            content += '<td>6.Sınıf</td>';
                            content += '<td>B</td>';
                            content += '<td>Tam Gün</td>';
                            content += '<td>Mustafa Gezici</td>';
                            content += '<td>Eyüp Gürültü</td>';
                            content += '<td>Murat Algit</td>';
                            content += '<td>Açık</td>';
                            content += '</tr>';
                            
                            content += '<tr>';
                            content += '<td>7.Sınıf</td>';
                            content += '<td>B</td>';
                            content += '<td>Tam Gün</td>';
                            content += '<td>Mustafa Gezici</td>';
                            content += '<td>Gizem Sayar</td>';
                            content += '<td>Lalihan Güngör</td>';
                            content += '<td>Açık</td>';
                            content += '</tr>';
                            
                            content += '<tr>';
                            content += '<td>7.Sınıf</td>';
                            content += '<td>A</td>';
                            content += '<td>Tam Gün</td>';
                            content += '<td>Mustafa Gezici</td>';
                            content += '<td>Benian Çorak</td>';
                            content += '<td>Melike Güngör</td>';
                            content += '<td>Açık</td>';
                            content += '</tr>';
                            
                            content += '<tr>';
                            content += '<td>8.Sınıf</td>';
                            content += '<td>B</td>';
                            content += '<td>Tam Gün</td>';
                            content += '<td>Mustafa Gezici</td>';
                            content += '<td>Rabia Turupçu</td>';
                            content += '<td>Volkan Güngör</td>';
                            content += '<td>Açık</td>';
                            content += '</tr>';
                            
                            content += '<tr>';
                            content += '<td>8.Sınıf</td>';
                            content += '<td>A</td>';
                            content += '<td>Tam Gün</td>';
                            content += '<td>Mustafa Gezici</td>';
                            content += '<td>Gülbahar Başyiğit</td>';
                            content += '<td>Hasret Muhammed Belçi</td>';
                            content += '<td>Açık</td>';
                            content += '</tr>';
                            
                            
                            content += '</tbody>';
                            content += '</table>';
                            
                            break;
        case 'ucretliogretmenEkle':
            content = '<h3>Ücretli Öğretmen Ekle</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'birlestirilmissubeTanimlama':
            content = '<h3>Birleştirilmiş Şube Tanımlama</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'kayit':
            content = '<h3>Kayıt</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'kayitIptal':
            content = '<h3>Kayıt İptal</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'kesinKayit':
            content = '<h3>Kesin Kayıt</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'resimEkle':
            content = '<h3>Resim Ekle</h3>'+
            '<label for="fileInput">Resim Seç:</label>'+
            '<input type="file" id="fileInput" accept="image/*">'+
            '<button onclick="uploadImage()">Resmi Yükle</button>'+
            '<div id="previewContainer"></div>';
            break;
        case 'hizliresimEkle':
            content = '<h3>Hızlı Resim Ekle</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'nakilBasvuru':
            content = '<h3>Nakil Başvuru</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'nakilkabulIslemi':
            content = '<h3>Nakil Kabul İşlemi</h3><p>İlgili içerik buraya eklenecek.</p>';
            break; 
        case 'nakilgelenListesi':
            content = '<h3>Nakil Gelen Listesi</h3><p>İlgili içerik buraya eklenecek.</p>';
            break; 
        case 'nakilistekOnay':
            content = '<h3>Nakil İstek Onay</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'nakilgidenListesi':
            content = '<h3>Nakil Giden Listesi</h3><p>İlgili içerik buraya eklenecek.</p>';
            break; 
        case 'gunlukdevamsizlikGirisi':
            content = '<h3>Günlük Devamsızlık Girişi</h3><p>İlgili içerik buraya eklenecek.</p>';
            break; 
        case 'devamsizlikMektubu':
            content = '<h3>Devamsızlık Mektubu</h3><p>İlgili içerik buraya eklenecek.</p>';
            break; 
        case 'okuldevamsizlikgirisonayIslemleri':
            content = '<h3>Okul Devamsızlık Girişi Onay İşlemleri</h3><p>İlgili içerik buraya eklenecek.</p>';
            break; 
        case 'konservatuarokullaridevamsizlikGirisi':
            content = '<h3>Konservatuar Okulları Devamsızlık Girişi</h3><p>İlgili içerik buraya eklenecek.</p>';
            break; 
        case 'dersbaslangicvebitisSaatleri':
            content = '<h3>Ders Başlangıç ve Bitiş Saatleri</h3><p>İlgili içerik buraya eklenecek.</p>';
            break; 
        case 'secmeliDersler':
            content = '<h3>Seçmeli Dersler</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'ogrencisecmelidersBelirleme':
            content = '<h3>Öğrenci Seçmeli Ders Belirleme</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'dersProgrami':
            content = '<h3>Ders Programı</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'dersOgretmenleri':
            content = '<h3>Ders Öğretmenleri</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'secmelidershaftalikDagilim':
            content = '<h3>Seçmeli Ders Haftalık Dağılım</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'yabancidilprogramSecimi':
             content = '<h3>Yabancı Dil Program Seçimi</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'sinavTarihleri':
            content = '<h3>Sınav Tarihleri</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'gelisimRaporu':
            content = '<h3>Gelişim Raporu</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'davranisNotlari':
            content = '<h3>Davranış Notları</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'hizlidersnotuGirisi':
            content = '<h3>Hızlı Ders Notu Girişi</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'karnebilgileriogretmenGorusu':
            content = '<h3>Karne Bilgileri Öğretmen Görüşü</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'söksiniftekrariKararlari':
            content = '<h3>Şök / Sınıf Tekrarı Kararları</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'uyumsubeIslemleri':
            content = '<h3>Uyum Şube İşlemleri</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'uyumogrenciIslemleri':
            content = '<h3>Uyum Öğrenci İşlemleri</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'sinifkitapligiOlusturma':
            content = '<h3>Sınıf Kitaplığı Oluşturma</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        case 'ogrencikitapBilgileri':
            content = '<h3>Öğrenci Kitap Bilgileri</h3><p>İlgili içerik buraya eklenecek.</p>';
            break;
        default:
            content = 'Lütfen bir kategori seçin.';
            break;
    }

    contentPlaceholder.innerHTML = content;
}
var studentForm = document.getElementById('studentForm');
    if (studentForm) {
        studentForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Formun normal submit işlemini engelle
            handleFormSubmit(); // Formu işle
        });
    }

    function handleFormSubmit() {
        console.log('Form submit işlemi gerçekleşti.'); // Kontrol amacıyla
    
        // Formdaki bilgileri al
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var tcKimlik = document.getElementById('tcKimlik').value;
        var schoolNumber = document.getElementById('schoolNumber').value;
    
        // Bu bilgileri kullanarak istediğiniz işlemleri yapabilirsiniz
        console.log('Ad:', firstName);
        console.log('Soyad:', lastName);
        console.log('TC Kimlik:', tcKimlik);
        console.log('Okul Numarası:', schoolNumber);
    
        alert('Bilgiler başarıyla gönderildi!');
    }
