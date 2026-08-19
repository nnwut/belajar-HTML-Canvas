const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");

      // Menggambar garis baru
      ctx.beginPath();
      ctx.moveTo(70, 70); // Titik awal garis
      ctx.lineTo(100, 70); // Titik akhir garis
      ctx.strokeStyle = "white"; // Warna garis
      ctx.lineWidth = 10; // Ketebalan garis
      ctx.stroke(); // Menggambar garis