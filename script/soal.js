const dataSoalPreTest = [
  {
    nomor_soal: 1,
    soal:
      "Perhatikan baik-baik contoh kasus ini! <br> Nino sedang ingin memasak, akan tetapi nino hanya akan memasak jika bahannya lengkap, maka dapat dibuat notasi algoritmiknya sebagai berikut. <br> .... (bahan lengkap){<br>.....<br>}",
    pilihan1: "Memasak-If",
    pilihan2: "Switch-case",
    pilihan3: "Switch – memasak",
    pilihan4: "If – switch",
    pilihan5: "If – memasak",
    jawaban: "If – memasak",
  },
  {
    nomor_soal: 2,
    soal:
      "Pada percabangan IF, apabila blok kondisi bernilai TRUE, maka aliran data pada flowchart akan dialihkan ke blok .........",
    pilihan1: "Kondisi",
    pilihan2: "Variabel",
    pilihan3: "Tipe data",
    pilihan4: "Di luar IF",
    pilihan5: "Instruksi",
    jawaban: "Instruksi",
  },
  {
    nomor_soal: 3,
    soal:
      "Nino sedang bermain video game. saking seringnya dia bermain video game, dia sampai hafal bagaimana caranya bermain. video game tersebut adalah game pokemon arcade. game tersebut sudah memilih karakter lawan. jika karakter lawan Nino memiliki kekuatan air, maka nino akan memilih karakter yang berkekuatan angin. jika lawan memilih karakter yang memiliki kekuatan api, Nino akan memilih karakter yang berkekuatan air atau karakter yang berkekuatan tanah. ketika nino memilih karakter yang berkekuatan air, Nino akan membeli item untuk membuka combo attack. apabila musuh memilih karakter yang berkekuatan bukan air dan api, maka Nino akan memilih karakter yang berkekuatan api.Kondisi yang terdapat pada contoh kasus tersebut adalah lawan memilih karakter air, lawan memilih ......., lawan memilih karakter selain air dan api, Nino memilih karakter ......",
    pilihan1: "Air - Api",
    pilihan2: "Air - Air",
    pilihan3: "Api - Api",
    pilihan4: "Api - Air",
    pilihan5: "Tanah - Air",
    jawaban: "Api - Air",
  },
  {
    nomor_soal: 4,
    soal:
      "Perhatikan Notasi berikut! <pre>Input UTS,UAS;<br>hasil = (UTS+UAS)/2; <br>Output Indeks Nilai <br>if(hasil >= 85 AND hasil <=100){<br>    Indeks Nilai = A<br>}else if (hasil > 70 AND hasil <85){<br>   Indeks Nilai = B<br>}else if(hasil >= 60 AND hasil < 70){<br>  Indeks Nilai = C<br>}else{<br>  Cetak (“Tidak ada nilai”)<br>}</pre>Danu sudah mengerjakan UTS dan UAS, adapun nilai UTSnya adalah 45 sedangkan nilai UASnya adalah 95. Akan tetapi saat nilai dimasukkan ke dalam sistem Danu justru “Tidak ada nilai”. Apa yang membuat Danu tidak ada nilai?<br>",
    pilihan1: "Karena tidak ada blok kondisi yang terpenuhi",
    pilihan2: "Karena nilai UTS Danu kecil",
    pilihan3: "Karena Danu curang",
    pilihan4: "Karena nilai UAS dan UTS terlalu jauh jaraknya",
    pilihan5: "Karena Danu tidak ikut remedial UTS",
    jawaban: "Karena tidak ada blok kondisi yang terpenuhi",
  },
  {
    nomor_soal: 5,
    soal:
      '<div style="background: #202020; color:white; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include&lt;iostream&gt;</span><br><span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br><br><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(){</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">hari=</span><span style="color: #3677a9">20</span><span style="color: #d0d0d0">;</span><br>	<br>	<span style="color: #6ab825; font-weight: bold">switch</span><span style="color: #d0d0d0">(hari</span> <span style="color: #d0d0d0">%</span> <span style="color: #3677a9">7</span><span style="color: #d0d0d0">){</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">0</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Hari Minggu&quot;</span><span style="color: #d0d0d0">;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">1</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Hari Senin&quot;</span><span style="color: #d0d0d0">;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">2</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Hari Selasa&quot;</span><span style="color: #d0d0d0">;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">3</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Hari Rabu&quot;</span><span style="color: #d0d0d0">;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">4</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Hari Kamis&quot;</span><span style="color: #d0d0d0">;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">5</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Hari Jumat&quot;</span><span style="color: #d0d0d0">;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">6</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Hari Sabtu&quot;</span><span style="color: #d0d0d0">;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #d0d0d0">default:</span><br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Tidak ada hari&quot;</span><span style="color: #d0d0d0">;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">}</span><br>	<span style="color: #d0d0d0">cout&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><br>Apabila hari diganti menjadi 22 maka apa hasil keluaran program tersebut?',
    pilihan1: "Sabtu",
    pilihan2: "Minggu",
    pilihan3: "Senin",
    pilihan4: "Selasa",
    pilihan5: "Rabu",
    jawaban: "Senin",
  },
  {
    nomor_soal: 6,
    soal:
      '<div>Alnev merupakan lulusan TKJ yang saat ini bekerja sebagai Customer Service di perusahaan jasa layanan internet, tugasnya adalah menghubungi customer. Di sela kesibukannya Alnev membuat program prioritas untuk dihubungi.</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(customer.tambah_bandwith){</span><br>	<span style="color: #d0d0d0">tambah_bandwith();</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(customer.jatuh_tempo){</span><br>	<span style="color: #d0d0d0">tagih();</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>	<span style="color: #d0d0d0">layani_keperluan_lain();</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Dengan menggunakan notasi yang dibuat oleh Alnev, jika Nelfan adalah customer yang sudah jatuh tempo dan ingin tambah bandwith, maka apa yang akan dilakukan Alnev ?</div>',
    pilihan1: "tagih()",
    pilihan2: "layani_keperluan_lain()",
    pilihan3: "tambah_bandwith() dan tagih()",
    pilihan4: "tambah_bandwith()",
    pilihan5: "tagih() dan layani_keperluan_lain()",
    jawaban: "tambah_bandwith()",
  },
  {
    nomor_soal: 7,
    soal:
      '<div>Perhatikan program berikut!</div><div style="background: #202020; color:white;overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include&lt;iostream&gt;</span><br><span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br><br><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(){</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">hobi;</span><br>	<br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Masukan pilihan hobi&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;1. Futsal&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;2. Badminton&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;3. Volly&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;4. Bernyanyi&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;5. Belajar&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;6. Bermusik&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;7. Main Game&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cin</span> <span style="color: #d0d0d0">&gt;&gt;</span> <span style="color: #d0d0d0">hobi;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Hobi kamu adalah &quot;</span><span style="color: #d0d0d0">;</span><br>	<br>	<span style="color: #6ab825; font-weight: bold">switch</span><span style="color: #d0d0d0">(hobi){</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">1</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Futsal&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">2</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Badminton&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">3</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Volly&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">4</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Bernyanyi&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">5</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Belajar&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">6</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Bermusik&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #6ab825; font-weight: bold">case</span> <span style="color: #3677a9">7</span>:<br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Main Game&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>		<span style="color: #d0d0d0">default:</span><br>			<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Tidak ada hobi&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>			<span style="color: #6ab825; font-weight: bold">break</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">}</span><br>	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Saat memilih 1 maka hasil keluarannya adalah “Hobi kamu adalah Futsal”. Akan tetapi, saat user memilih 2 maka hasil keluarannya adalah “Hobi kamu adalah Badminton Volly Bernyanyi”Apa yang membuat sistem menampilkan tiga hobi sekaligus padahal user hanya menginput satu pilihan hobi?</div>',
    pilihan1: "Karena hobi bisa lebih dari satu",
    pilihan2: "karena tidak ada break di akhir statement",
    jawaban: "karena tidak ada break di akhir statement",
    pilihan3: "karena nilai return 0",
    pilihan4: "karena case 2, case 3, case 4 satu paket",
    pilihan5: "karena user salah ketik",
  },
  {
    nomor_soal: 8,
    soal:
      "Perhatikan baik-baik contoh kasus ini! Nino sedang ingin memasak, akan tetapi nino hanya akan memasak jika bahannya lengkap. Kasus tersebut merupakan salah satu contoh dari percabangan…. ",
    pilihan1: "If Else",
    pilihan2: "If",
    jawaban: "If",
    pilihan3: "If Else If",
    pilihan4: "Switch-Case",
    pilihan5: "Bersarang",
  },
  {
    nomor_soal: 9,
    soal:
      '<div>Perhatikan program untuk melakukan pengecekan uang kita pas atau tidak. Akan tetapi pada program tersebut berapapun nilai harga dan nilai uang, hasilnya selalu pas.</div><div style="background: #202020; color:white;overflow:auto;width:auto;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%"> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include&lt;iostream&gt;</span><br><span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(){</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">harga</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">10000</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">uang</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">20000</span><span style="color: #d0d0d0">;</span><br><br>	<span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(harga</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">uang){</span><br>		<span style="color: #d0d0d0">cout << </span><span style="color: #ed9d13">&quot;uang pas&quot;</span><span style="color: #d0d0d0"> << endl;</span><br>	<span style="color: #d0d0d0">}</span><br><span style="color: #d0d0d0">}</span><br></pre></td></tr></table></div><div>Pada baris berapakah yang terdapat kesalahan?</div>',
    pilihan1: "5",
    pilihan2: "6",
    pilihan3: "7",
    jawaban: "7",
    pilihan4: "8",
    pilihan5: "9",
  },
  {
    nomor_soal: 10,
    soal:
      '<div>Lengkapilah potongan kode berikut, supaya ketika jumlah ayam lebih dari 5 maka potong dua ekor.</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include &lt;iostream&gt;</span><br><span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br><br><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span> <span style="color: #d0d0d0">()</span> <span style="color: #d0d0d0">{</span><br>  <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">ayam=</span><span style="color: #3677a9">10</span><span style="color: #d0d0d0">;</span><br>	<br>  <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(</span> <span style="color: #d0d0d0">......</span> <span style="color: #d0d0d0">){</span><br>	<span style="color: #d0d0d0">........</span><br>	<span style="color: #d0d0d0">printf(</span><span style="color: #ed9d13">&quot;ayam sudah dipotong 2, sisanya adalah %d&quot;</span><span style="color: #d0d0d0">,ayam);</span><br>  <span style="color: #d0d0d0">}</span><br><span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div>',
    pilihan1: "ayam>5; ayam = ayam-2",
    jawaban: "ayam>5; ayam = ayam-2",
    pilihan2: "ayam>2; ayam = ayam-5",
    pilihan3: "ayam>=2; ayam = ayam-2",
    pilihan4: "ayam>5; ayam = ayam-1",
    pilihan5: "ayam<2; ayam = ayam-2",
  },
  {
    nomor_soal: 11,
    soal:
      "Nino sedang memasang kabel di rumahnya, akan tetapi Nino tidak memiliki bakat sebagai teknisi listrik. Nino mengetahui arus listrik akan mengalir jika kabel tersambung, sedangkan jika tidak tersambung maka arus listrik tidak mengalir. Contoh kasus tersebut cocok untuk diselesaikan dengan menggunakan konsep percabangan .......",
    pilihan1: "If Else",
    jawaban: "If Else",
    pilihan2: "If",
    pilihan3: "If Else If",
    pilihan4: "Switch Case",
    pilihan5: "Bersarang",
  },
  {
    nomor_soal: 12,
    soal:
      '<div>Di bawah ini merupakan potongan notasi algoritmik untuk menentukan sebuah bilangan genap. Hasil pengecekan akan ditampung pada variabel genap yang bertipe data boolean. Lengkapilah notasi algoritmik tersebut!</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #d0d0d0">genap</span> <span style="color: #d0d0d0">=</span> <span style="color: #24909d">false</span><span style="color: #d0d0d0">;</span><br><span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(bilangan%</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">==</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">){</span><br>	<span style="color: #d0d0d0">genap</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">......</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>	<span style="color: #d0d0d0">genap</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">......</span><br><span style="color: #d0d0d0">}</span><br></pre></div>',
    pilihan1: "True-True",
    pilihan2: "False-False",
    pilihan3: "True-False",
    jawaban: "True-False",
    pilihan4: "False-True",
    pilihan5: "Salah Semua",
  },
  {
    nomor_soal: 13,
    soal:
      '<div>Apa hasil keluaran dari program di bawah ini</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include&lt;iostream&gt;</span><br><span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(){</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">arus</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">nyala_listrik</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><br>	<span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(arus</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">){</span><br>		<span style="color: #d0d0d0">nyala_listrik</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>		<span style="color: #d0d0d0">nyala_listrik</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">}</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">nyala_listrik</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div>',
    pilihan1: "1",
    pilihan2: "0",
    jawaban: "0",
    pilihan3: "True",
    pilihan4: "False",
    pilihan5: "Error",
  },
  {
    nomor_soal: 14,
    soal:
      '<div>Deskripsi: Di hari Minggu pak Dengklek akan pergi ke Cirebon untuk mengurus dokumen imigrasi. Di tengah perjalanan, dia mampir di SPBU untuk mengisi bahan bakar, diketahui bahwa harga bahan bakar per liter adalah sebagai berikut:<ol><li>Premium = 7.500</li><li>Pertalite = 10000</li><li>Pertamax = 15000</li></ol>Input: <br />pilihan bahan bakar pak Dengklek dalam bentuk integer, jumlah uang yangdibayarkan dalam bentuk integer Output: <br />Banyaknya bahan bakar yang didapat.</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include &lt;iostream&gt;</span><br><span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(){</span><br>  <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">uang;</span><br>  <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">premium</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">7500</span><span style="color: #d0d0d0">;</span><br>  <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">pertalite</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">10000</span><span style="color: #d0d0d0">;</span><br>  <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">pertamax</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">15000</span><span style="color: #d0d0d0">;</span><br>  <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">jumlah_bbm</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br>  <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">pilihan;</span><br>  <span style="color: #d0d0d0">cin</span> <span style="color: #d0d0d0">&gt;&gt;</span> <span style="color: #d0d0d0">pilihan;</span> <span style="color: #d0d0d0">cin</span> <span style="color: #d0d0d0">&gt;&gt;</span> <span style="color: #d0d0d0">uang;</span><br>  <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(pilihan</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">){</span><br>    <span style="color: #d0d0d0">jumlah_bbm</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">uang/premium;</span><br>  <span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(pilihan</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">){</span><br>    <span style="color: #d0d0d0">jumlah_bbm</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">uang/pertalite;</span><br>  <span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(pilihan</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">3</span><span style="color: #d0d0d0">){</span><br>    <span style="color: #d0d0d0">jumlah_bbm</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">uang/pertamax;</span><br>  <span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>    <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;pilihan tidak ada&quot;</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>  <span style="color: #d0d0d0">}</span><br>  <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">jumlah_bbm</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Apa hasil keluaran program jika masukan 1 150000</div>',
    pilihan1: "10",
    pilihan2: "15",
    pilihan3: "20",
    jawaban: "20",
    pilihan4: "25",
    pilihan5: "30",
  },
  {
    nomor_soal: 15,
    soal:
      '<div>Perhatikan potongan kode program berikut</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">jumlah_bebek</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">10</span><span style="color: #d0d0d0">;</span><br><br><span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(jumlah_bebek</span> <span style="color: #d0d0d0">&lt;</span> <span style="color: #3677a9">10</span><span style="color: #d0d0d0">){</span><br>  <span style="color: #d0d0d0">jumlah_bebek</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">jumlah_bebek</span> <span style="color: #d0d0d0">*</span> <span style="color: #3677a9">10</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>  <span style="color: #d0d0d0">jumlah_bebek</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">jumlah_bebek</span> <span style="color: #d0d0d0">+</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br><br><span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(jumlah_bebek</span> <span style="color: #d0d0d0">&lt;</span> <span style="color: #3677a9">15</span><span style="color: #d0d0d0">){</span><br>  <span style="color: #d0d0d0">jumlah_bebek</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">jumlah_bebek</span> <span style="color: #d0d0d0">+</span> <span style="color: #3677a9">5</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Berapakah jumlah bebek saat ini?</div>',
    pilihan1: "9",
    pilihan2: "11",
    pilihan3: "13",
    pilihan4: "15",
    pilihan5: "17",
    jawaban: "17",
  },
  {
    nomor_soal: 16,
    soal:
      '<div>Perhatikan potongan kode program berikut!</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(username</span> <span style="color: #d0d0d0">==</span> <span style="color: #d0d0d0">db.username</span> <span style="color: #d0d0d0">||</span> <span style="color: #d0d0d0">password</span> <span style="color: #d0d0d0">==</span> <span style="color: #d0d0d0">db.password){</span><br>  <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Login Sukses&quot;</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>  <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Login Gagal&quot;</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Pada potongan program tersebut user bisa tetap login meskipun username atau password salah, hal ini karena......</div>',
    pilihan1: "Kesalahan database",
    pilihan2: "Kesalahan operator logika",
    jawaban: "Kesalahan operator logika",
    pilihan3: "user adalah seorang hacker",
    pilihan4: "program error",
    pilihan5: "system error",
  },
  {
    nomor_soal: 17,
    soal:
      '<div>Perhatikan potongan kode program berikut!</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(a</span> <span style="color: #d0d0d0">&lt;</span> <span style="color: #d0d0d0">b){</span><br>  <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;a lebih kecil dari b&quot;</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Jika a = 6 dan b = 5; program tersebut tidak menghasilkan keluaran apapun, hal ini dikarenakan......</div>',
    pilihan1: "Tidak ada return 0",
    pilihan2: "Program tidak lengkap",
    pilihan3: "Logika pada kondisi salah",
    pilihan4: "Program Error",
    pilihan5: "Tidak ada kondisi yang terpenuhi",
    jawaban: "Tidak ada kondisi yang terpenuhi",
  },
  {
    nomor_soal: 18,
    soal:
      '<div>Perhatikan potongan kode program berikut!</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(n</span> <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">100</span><span style="color: #d0d0d0">){</span><br>  <span style="color: #d0d0d0">hasil</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">(n%</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">)*</span><span style="color: #3677a9">10</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(n</span> <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">70</span><span style="color: #d0d0d0">){</span><br>  <span style="color: #d0d0d0">hasil</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">(n*</span><span style="color: #3677a9">10</span><span style="color: #d0d0d0">)-</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(n</span> <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">50</span><span style="color: #d0d0d0">){</span><br>  <span style="color: #d0d0d0">hasil</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">n+</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">-n+</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>  <span style="color: #d0d0d0">hasil</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">n+</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">-</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">*n;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Berapa nilai hasil apabila n=65?</div>',
    pilihan1: "20",
    pilihan2: "648",
    pilihan3: "136",
    pilihan4: "8",
    jawaban: "8",
    pilihan5: "Error",
  },
  {
    nomor_soal: 19,
    soal:
      "<div><p>Perhatikan pernyataan-pernyataan berikut dengan seksama!</p><ol><li>Switch Case adalah percabangan yang hanya memiliki satu blok kondisi dan satu instruksi</li><li>Setiap akhir statement harus diberi break</li><li>Hanya menerima kondisi bilangan bulat atau karakter</li><li>Bisa menerima kondisi rentang</li><li>Switch case adalah percabangan yang memiliki satu blok kondisi dan memiliki satu instruksi serta satu alternatif instruksi</li></ol><p>Pernyataan yang benar mengenai switch case ditunjukan oleh nomor......</p></div>",
    pilihan1: "2 dan 3",
    jawaban: "2 dan 3",
    pilihan2: "3 dan 4",
    pilihan3: "4 dan 5",
    pilihan4: "1 dan 2",
    pilihan5: "Tidak ada yang benar",
  },
  {
    nomor_soal: 20,
    soal:
      '<div>Perhatikan program berikut!</div><div style="background: #202020; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include&lt;iostream&gt;</span><br><span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br><br><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(){</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">jarak_tempuh,</span> <span style="color: #d0d0d0">lama_oli;</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">km_sebelumnya,</span> <span style="color: #d0d0d0">km_sekarang;</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">bulan_ganti_oli,</span> <span style="color: #d0d0d0">bulan_sekarang;</span><br>	<br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Program Keputusan Ganti Oli\n&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Masukan kilometer saat ganti oli terakhir:&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">cin</span> <span style="color: #d0d0d0">&gt;&gt;</span> <span style="color: #d0d0d0">km_sebelumnya;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Masukan kilometer saat ini:&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">cin</span> <span style="color: #d0d0d0">&gt;&gt;</span> <span style="color: #d0d0d0">km_sekarang;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Bulan berapa terakhir ganti oli?&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">cin</span> <span style="color: #d0d0d0">&gt;&gt;</span> <span style="color: #d0d0d0">bulan_ganti_oli;</span><br>	<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Bulan sekarang?&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">cin</span> <span style="color: #d0d0d0">&gt;&gt;</span> <span style="color: #d0d0d0">bulan_sekarang;</span><br>	<br>	<span style="color: #d0d0d0">jarak_tempuh</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">km_sekarang</span> <span style="color: #d0d0d0">-</span> <span style="color: #d0d0d0">km_sebelumnya;</span><br>	<span style="color: #d0d0d0">lama_oli</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">bulan_sekarang</span> <span style="color: #d0d0d0">-</span> <span style="color: #d0d0d0">bulan_ganti_oli;</span><br>	<br>	<span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(jarak_tempuh</span> <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">150</span> <span style="color: #d0d0d0">||</span> <span style="color: #d0d0d0">lama_oli</span> <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">){</span><br>		<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;endl&lt;&lt;</span><span style="color: #ed9d13">&quot;Ganti oli sekarang&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>		<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;Belum waktunya ganti oli&quot;</span><s<br>pan style="color: #d0d0d0">;</s><br>	<span style="color: #d0d0d0">}</span><br>	<br>	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Apa hasil keluaran dari program apabila user mengisi km_sebelumnya=100; km_sekarang = 250; bulan_ganti_oli = 1;Bulan_sekarang = 3?</div>',
    pilihan1: "Ganti oli sekarang",
    pilihan2: "Error",
    pilihan3: "Tidak menampilkan apa-apa",
    pilihan4: "Belum waktunya ganti oli",
    jawaban: "Belum waktunya ganti oli",
    pilihan5: "input invalid",
  },
];
const dataSoalPostTest = [
  {
    nomor_soal: 1,
    soal:
      '<div>Perhatikan program di bawah ini!</div>  <div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include&lt;iostream&gt;</span><br>  <span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br><br><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(){</span><br>	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">bilangan;</span><br>	<br>	<span style="color: #d0d0d0">cout&lt;&lt;</span> <span style="color: #ed9d13">&quot;Masukan bilangan: \n&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">cin</span> <span style="color: #d0d0d0">&gt;&gt;</span> <span style="color: #d0d0d0">bilangan;</span><br>	<br>	<span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(bilangan</span> <span style="color: #d0d0d0">%</span><span style="color: #3677a9">2</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">){</span><br>		<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">bilangan</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot; Merupakan kelipatan 3\n&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>		<span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">bilangan</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot; Bukan merupakan kelipatan 3\n&quot;</span><span style="color: #d0d0d0">;</span><br>	<span style="color: #d0d0d0">}</span><br>	<br>	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Program tersebut adalah program untuk mendeteksi sebuah angka kelipatan 3 atau bukan, akan tetapi program tersebut terdapat sebuah kesalahan. Pada baris ke berapa letak kesalahan program, lalu apa solusinya?</div>',
    pilihan1: "Baris 8 solusi setelah kurung if tambahkan ;",
    pilihan2: "Baris 6 variabel bilangan ganti nama menjadi kelipatan 3",
    pilihan3: 'Baris 9 solusi output diganti menjadi "merupakan bilangan 2',
    pilihan4:
      'Baris 9 solusi output diganti menjadi cout << bilangan << "merupakan kelipatan 3" << endl;',
    pilihan5: "Baris 8 solusi (bilangan %3 == )",
    jawaban: "Baris 8 solusi (bilangan %3 == )",
  },
  {
    nomor_soal: 2,
    soal:
      '<div>Perhatikan notasi algoritmik berikut!</div><div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(nilai_akhir</span> <span style="color: #d0d0d0">&lt;=</span> <span style="color: #3677a9">100</span><span style="color: #d0d0d0">){</span><br>  <span style="color: #d0d0d0">indeks</span> <span style="color: #d0d0d0">=</span>  <span style="color: #d0d0d0">A</span><br><span style="color: #d0d0d0">}</span> <span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(nilai_akhir</span> <span style="color: #d0d0d0">&gt;=</span> <span style="color: #3677a9">80</span><span style="color: #d0d0d0">){</span><br>  <span style="color: #d0d0d0">indeks</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">B</span><br><span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>  <span style="color: #d0d0d0">indeks</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">C</span><br><span style="color: #d0d0d0">}</span><br></pre></div><div>Apa nilai indeks jika nilai_ulangan = 70?</div>',
    pilihan1: "Error",
    pilihan2: "A",
    jawaban: "A",
    pilihan3: "B",
    pilihan4: "C",
    pilihan5: "False Logical",
  },
  {
    nomor_soal: 3,
    soal:
      "Percabangan yang memiliki alternatif instruksi dan blok kondisi yang lebih dari 1 adalah konsep percabangan..........",
    pilihan1: "If Else",
    pilihan2: "If Else If",
    jawaban: "If Else If",
    pilihan3: "If",
    pilihan4: "Switch Case",
    pilihan5: "Bersarang",
  },
  {
    nomor_soal: 4,
    soal:
      '<div>Perhatikan Potongan cerita berikut!Suatu pagi bu Dengklek sedang memasak sayur untuk sarapan. Rasa masakan bu Dengklek dipengaruhi oleh siapa yang membantu. Masakan memiliki rasa asin jika dibantu pa Dengklek, sedangkan masakan bu Dengklek akan terasa enak ketika dibantu Nino. Akan tetapi, jika tidak ada yang membantu, masakannya akan terasa hambar.</div>  <div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cd2828; font-weight: bold">#include&lt;iostream&gt;</span><br><span style="color: #6ab825; font-weight: bold">using</span> <span style="color: #6ab825; font-weight: bold">namespace</span> <span style="color: #d0d0d0">std;</span><br><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(){</span><br>    <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">dengklek_bantu</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br>    <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">nino_bantu</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><br>    <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(.......){</span><br>      <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;makanan asin&quot;</span><span style="color: #d0d0d0">;</span><br>    <span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(nino_bantu</span>  <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">){</span><br>      <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;masakan enak&quot;</span><span style="color: #d0d0d0">;</span><br>    <span style="color: #d0d0d0">}</span><span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">{</span><br>      <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #ed9d13">&quot;makanan hambar&quot;</span><span style="color: #d0d0d0">;</span><br>    <span style="color: #d0d0d0">}</span><br><br>  <span style="color: #d0d0d0">cout</span> <span style="color: #d0d0d0">&lt;&lt;</span> <span style="color: #d0d0d0">endl;</span><br>  <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">;</span><br><span style="color: #d0d0d0">}</span><br></pre></div>  <div>Kode yang tepat untuk melengkapi program tersebut adalah.....</div>',
    pilihan1: "dengklek_bantu > 1",
    pilihan2: "dengklek_bantu == 1",
    jawaban: "dengklek_bantu == 1",
    pilihan3: "dengklek+bantu = 1",
    pilihan4: "dengklek_bantu < 1",
    pilihan5: "dengklek_bantu <= 1",
  },
  {
    nomor_soal: 5,
    soal:
      "Percabangan yang memiliki percabangan lain di dalamnya disebut sebagai .......",
    pilihan1: "Percabangan If",
    pilihan2: "Switch Case",
    pilihan3: "Percabangan bersarang",
    jawaban: "Percabangan bersarang",
    pilihan4: "Percabangan If Else",
    pilihan5: "Percabangan If Else if",
  },
  {
    nomor_soal: 6,
    soal:
      "Perhatikan baik-baik contoh kasus ini! <br> Nino sedang ingin memasak, akan tetapi nino hanya akan memasak jika bahannya lengkap, maka dapat dibuat notasi algoritmiknya sebagai berikut. <br> .... (bahan lengkap){<br>.....<br>}",
    pilihan1: "Memasak-If",
    pilihan2: "Switch-case",
    pilihan3: "Switch – memasak",
    pilihan4: "If – switch",
    pilihan5: "If – memasak",
    jawaban: "If – memasak",
  },
  {
    nomor_soal: 2,
    soal:
      "Pada percabangan IF, apabila blok kondisi bernilai TRUE, maka aliran data pada flowchart akan dialihkan ke blok .........",
    pilihan1: "Kondisi",
    pilihan2: "Variabel",
    pilihan3: "Tipe data",
    pilihan4: "Di luar IF",
    pilihan5: "Instruksi",
    jawaban: "Instruksi",
  },
];
export { dataSoalPreTest, dataSoalPostTest };
