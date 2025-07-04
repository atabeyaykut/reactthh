import React from 'react'

function FormPage() {
    /*

    > required      -> Bu alanı doldurmak zorunludur
    > name          -> input verisinin backed'e tanıtımı için kullanılır
    > autocomplete  -> Tarayıcıdan otomatik doldurma özelliğini kontrol eder
    > pattern       -> Regex ile girilen veriyi sınırlar (pattern="\d{3}-\)
    > readonly      -> Sadece okunabilir hale getirir
    > disabled      -> Kullanılmaz hale getirir

    */

    return (
        <>
            <form>
                {/* Tek satır metin girişi */}
                <div>
                    <label htmlFor="text">Metin:</label>
                    <input type="text" id="text" name="text" />
                </div>

                {/* E-posta girişi */}
                <div>
                    <label htmlFor="email">E-posta:</label>
                    <input type="email" id="email" name="email" />
                </div>

                {/* Şifre alanı */}
                <div>
                    <label htmlFor="password">Şifre:</label>
                    <input type="password" id="password" name="password" />
                </div>

                {/* Sayı girişi */}
                <div>
                    <label htmlFor="number">Sayı:</label>
                    <input type="number" id="number" name="number" />
                </div>

                {/* Onay kutusu */}
                <div>
                    <label htmlFor="checkbox">Onay Kutusu:</label>
                    <input type="checkbox" id="checkbox" name="checkbox" />

                    <label htmlFor="checkbox2">Onay Kutusu2:</label>
                    <input type="checkbox" id="checkbox2" name="checkbox" />

                    <label htmlFor="checkbox3">Onay Kutusu3:</label>
                    <input type="checkbox" id="checkbox3" name="checkbox" />

                    <label htmlFor="checkbox4">Onay Kutusu4:</label>
                    <input type="checkbox" id="checkbox4" name="checkbox" />
                </div>

                {/* Tek seçenekli buttonlar */}
                <div>
                    <label htmlFor="kadin">Kadın</label>
                    <input type="radio" id="kadin" name="radio" value="1" />
                    <label htmlFor="erkek">Erkek</label>
                    <input type="radio" id="erkek" name="radio" value="2" />
                </div>

                {/* Dosya yükleme */}
                <div>
                    <label htmlFor="file">Dosya:</label>
                    <input type="file" id="file" name="file" />
                </div>

                {/* Tarih seçimi */}
                <div>
                    <label htmlFor="date">Tarih:</label>
                    <input type="date" id="date" name="date" />
                </div>

                {/* Zaman seçimi */}
                <div>
                    <label htmlFor="time">Zaman:</label>
                    <input type="time" id="time" name="time" />
                </div>

                {/* Renk seçimi */}
                <div>
                    <label htmlFor="color">Renk:</label>
                    <input type="color" id="color" name="color" />
                </div>

                {/* Slider aralığı */}
                <div>
                    <label htmlFor="range">Aralık:</label>
                    <input type="range" id="range" name="range" />
                </div>

                {/* Telefon girişi */}
                <div>
                    <label htmlFor="tel">Telefon:</label>
                    <input type="tel" id="tel" name="tel" />
                </div>

                {/* URL girişi */}
                <div>
                    <label htmlFor="url">Web Adresi:</label>
                    <input type="url" id="url" name="url" />
                </div>

                {/* Arama kutusu */}
                <div>
                    <label htmlFor="search">Arama:</label>
                    <input type="search" id="search" name="search" />
                </div>

                {/* Gönderme alanı */}
                <div>
                    <label htmlFor="submit">Gönder:</label>
                    <input type="submit" id="submit" value="Gönder" />
                </div>

                {/* Sıfırlama alanı */}
                <div>
                    <label htmlFor="reset">Sıfırla:</label>
                    <input type="reset" id="reset" value="Sıfırla" />
                </div>
            </form>
            <br />
            <br />
            <br />
            <form>
                <label htmlFor='ad'>Adınız: </label>
                <input type="text" id='ad' name="ad" required />

                <br />

                <label htmlFor="email">E-posta: </label>
                <input type="email" id='email' name='email' />

                <br />

                <label htmlFor="mesaj">Mesaj: </label>
                <textarea name="mesaj" id="mesaj"></textarea>

                <br />

                <button type='submit'>Gönder</button>
            </form>
        </>
    )
}

export default FormPage