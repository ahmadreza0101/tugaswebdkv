  // Fungsi untuk mencegah klik kanan
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });

        // Fungsi untuk mencegah penyalinan teks
        document.addEventListener('copy', function(event) {
            event.preventDefault();
        });

    // Hamburger menu toggle with animation
    document.getElementById('hamburger').addEventListener('click', function () {
      this.classList.toggle('active'); // Tambahkan/lepaskan kelas "active"
      const nav = this.nextElementSibling; // Pilih elemen <nav> setelah hamburger
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    let currentIndex = 0;

    function showImage(index) {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none'; // Sembunyikan semua gambar
        }
        images[index].style.display = 'block'; // Tampilkan gambar yang sesuai
    }


    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Pindah ke gambar berikutnya
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Pindah ke gambar sebelumnya
        showImage(currentIndex);
    }

    // Event listener untuk tombol
    document.getElementById('next').addEventListener('click', nextImage);
    document.getElementById('prev').addEventListener('click', prevImage);

    // Tampilkan gambar pertama saat halaman dimuat
    showImage(currentIndex);

  // Fungsi untuk mengatur mode malam
  document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    document.querySelectorAll('.section').forEach(section => {
      section.classList.toggle('night-mode');
    });
    document.querySelectorAll('.hero').forEach(hero => {
      hero.classList.toggle('night-mode');
    });
    document.querySelectorAll('.card').forEach(card => {
      card.classList.toggle('night-mode');
    });
    document.querySelectorAll('.contact-card').forEach(card => {
      card.classList.toggle('night-mode');
    });
      document.querySelectorAll('h2').forEach(card => {
        card.classList.toggle('night-mode');
    });
    document.querySelector('footer').classList.toggle('night-mode'); // Tambahkan ini
    if (document.body.classList.contains('night-mode')) {
      this.textContent = '🔆';
      this.classList.add('night-mode');
    } else {
      this.textContent = '🌙';
      this.classList.remove('night-mode');
    }
  });
            
    document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Pindahkan data-src ke src
          img.classList.remove("lazy");
          observer.unobserve(img); // Hentikan pengamatan pada gambar ini
        }
      });
    });

    lazyImages.forEach(image => {
      imageObserver.observe(image); // Mulai mengamati gambar
    });
  });

  document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable", false);
});

  document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.onkeydown = function(e) {
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
    e.preventDefault();
  }};

  setInterval(function() {
  if (window.console && (console.log.toString().indexOf('debugger') !== -1)) {
    alert('Developer tools are open!');
    window.location.reload();
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
  const newsContainer = document.getElementById("news-container");

  if (newsContainer) {
      news.forEach(item => {
          const newsCard = document.createElement("div");
          newsCard.classList.add("card");
          newsCard.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h3>${item.title}</h3>
              <p>${item.content}</p>
              <a href="${item.link}" class="btn" target="_blank">Read More</a>
          `;
          newsContainer.appendChild(newsCard);
      });
  }
});

const news = [
  {
      title: "Gajah dan Tali yang Tipis",
      link: "https://www.dkv.smkn1.tangera.ng/news/2025-01/gajah-dan-tali-tipis",
      image: "https://www.dkv.smkn1.tangera.ng/sites/default/files/styles/16_9_608x342_focal_point_webp/public/2025-01/gajah-dan-tali-tipis.jpg.webp?itok=4BYDJ5ws",
      content: "Di sebuah tempat pelatihan gajah, seorang pria berhenti melangkah, terpesona oleh pemandangan yang aneh. Gajah-gajah raksasa yang kuat dan perkasa itu hanya terikat dengan tali tipis sederhana di kaki depannya. Tidak ada rantai..."
  },
  {
      title: "Rapikan Tempat Tidur Setiap Pagi",
      link: "https://www.dkv.smkn1.tangera.ng/news/2025-01/rapikan-tempat-tidurmu",
      image: "https://www.dkv.smkn1.tangera.ng/sites/default/files/styles/16_9_608x342_focal_point_webp/public/2025-01/tempat-tidur.jpg.webp?itok=Bl4V1Q3f",
      content: "Mari simak pidato oleh Laksamana William H. McRaven, seorang perwira tinggi Angkatan Laut Amerika Serikat. Pidato ini disampaikan pada acara Wisuda Universitas Texas di Austin pada tahun 2014, sebagai pidato sambutan untuk kelas..."
  },
  {
      title: "Manfaat PBL dan PjBL Bagi Murid SMK",
      link: "https://www.dkv.smkn1.tangera.ng/news/2025-01/manfaat-pbl-dan-pjbl-bagi-murid-smk",
      image: "https://www.dkv.smkn1.tangera.ng/sites/default/files/styles/5_2_1300x520_focal_point_webp/public/2025-01/kelas-dkv.jpg.webp?itok=4JjLUdsM",
      content: "Dalam dunia pendidikan, pendekatan pembelajaran yang relevan dengan kebutuhan dunia kerja sangat penting, terutama bagi murid Sekolah Menengah Kejuruan (SMK). Dua pendekatan yang sering digunakan adalah Project Based...."
  },
  {
      title: "Arah Kebijakan Pendidikan Tahun 2025",
      link: "https://www.dkv.smkn1.tangera.ng/news/2025-01/rapikan-tempat-tidurmu",
      image: "https://www.dkv.smkn1.tangera.ng/sites/default/files/styles/5_2_1300x520_focal_point_webp/public/2025-01/cgp-7-1.jpg.webp?itok=-cCOdfn2",
      content: "Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) telah mengungkapkan arah kebijakan pendidikan untuk tahun 2025. Kebijakan ini difokuskan pada sejumlah program strategis yang bertujuan meningkatkan..."
  },
  {
      title: "Guru Bukan Satu-Satunya Sumber Belajar",
      link: "https://www.dkv.smkn1.tangera.ng/news/2025-01/guru-bukan-satu-satunya-sumber-belajar",
      image: "https://www.dkv.smkn1.tangera.ng/sites/default/files/styles/5_2_1300x520_focal_point_webp/public/2025-01/setelah-bimbingan-pkl_0.jpg.webp?itok=B9L2IXFz",
      content: "Di era digital yang serba canggih ini, paradigma pendidikan telah mengalami perubahan yang signifikan. Jika di masa lalu guru dianggap sebagai satu-satunya sumber belajar, kini..."
  },
  {
      title: "LMS DKV",
      link: "https://www.dkv.smkn1.tangera.ng/news/2025-01/lms-dkv",
      image: "https://www.dkv.smkn1.tangera.ng/sites/default/files/styles/5_2_1300x520_focal_point_webp/public/2025-01/Lab%20Komputer.jpg.webp?itok=5pPgGqij",
      content: "Alhamdulillah, di awal tahun 2025 ini DKV telah mempunyai website (yang sedang anda lihat ini) dan Learning Management Sistem (LMS) dengan alamat web adalah lms.dkv.smkn1.tangera.ng. LMS ini dibangun dengan memakai CMS Moodle yang telah dipakai luas oleh berbagai institusi pendidikan..."
  },
];

var swiper = new Swiper(".mySwiper", {
            effect: "flip",
            grabCursor: true,
            loop: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Efek smooth scrolling
        }
      
        window.onscroll = function() {
          let toTopBtn = document.getElementById("toTopBtn");
          if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            toTopBtn.style.display = "block"; // Munculkan tombol saat scroll ke bawah
            toTopBtn.style.opacity = "1"; // Efek fade in
          } else {
            toTopBtn.style.opacity = "0"; // Efek fade out
            setTimeout(() => {
             
            }, 300);
          }
        };