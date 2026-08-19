const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");

      ctx.strokeRect(30, 30, 100, 100); // Menggambar garis
       ctx.fillStyle = ("blue"); // Mengatur warna isi menjadi merah
      ctx.fillRect(150, 30, 100, 100); // Menggambar persegi panjang
      ctx.clearRect(50, 50, 60, 60); // Menghapus area persegi panjang
     
      