"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Events", [
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230725213049_64bfdc99c80e0.jpg",
        eventName: "Jam Your Playlist : A Tribute Night to JYP Entertainment",
        date: "05 Aug 2023",
        time: "19:00 - 23:30 WIB",
        location: "Jakarta",
        description: "SATURDAY NIGHT FOR JYP NIGHT! LET’S GO CRAZY CHINGU~",
        category: "Musik",
        price: 100000,
        stock: 1497,
        userid: 1,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230728150533_64c376cd51004.jpg",
        eventName: "Speak Your Mind, Win Your Stage! with Rizqiani Putri",
        date: "12 Aug 2023",
        time: "09:00 - 18:00 WIB",
        location: "Braga",
        description:
          "Sinergi Bicara presents: Speak Your Mind, Win Your Stage!",
        category: "Karir",
        price: 500000,
        stock: 200,
        userid: 1,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230726093502.jpg",
        eventName:
          "2023 ASIA FAN MEETING IN JAKARTA: KIMBUM (Between U and Me)",
        date: "03 Sep 2023",
        time: "19:00 - 22:00 WIB",
        location: "Jakarta",
        description:
          "Viu Scream Dates is an annual Viu festival event in Indonesia, bringing the Viu experience to live to our millions of Viu’ers in Indonesia. The initial Viu Scream Dates was done in Bangkok, Thailand, in 2019 and was attended by thousands of Viu’ers. The Viu Scream Dates 2023 will be the first Viu Scream Dates in Indonesia, where we will create the excitement by bringing the most favorite Korean, Thailand, Mandarin, & Indonesia celebrties to life through music concerts, meet & greets, photo signings, talk-shows, screenings, and fun games. On the 3rd of September Viu Scream Dates will bring the star of Boys Before Flower, Ghost Doctor, and Tale of The Nine Tailed, Kim Bum for his 2023 ASIAN FAN MEET TOUR in Jakarta: Between U and Me - To Create Memorable Memories.",
        category: "Musik",
        price: 800000,
        stock: 500,
        userid: 1,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230724124852.png",
        eventName: "Projek-D Vol. 2",
        date: "05 Aug - 06 Aug 2023",
        time: "13:00 - 23:00 WIB",
        location: "Karanganyar",
        description:
          "PROJEK-D merupakan sebutan singkat dari Projek Dynamic (Dyandra Music & Collaborations), melalui Projek-D, Dyandra Promosindo ingin mempersembahkan festival musik yang dapat dinikmati oleh seluruh kalangan. Sejalan dengan gairah tersebut demi menciptakan ekosistem dan pengalaman baru bagi para pegiat hingga penikmat musik, khususnya yang berada di luar Kota Jakarta. Solo yang dijuluki sebagai kota penuh nuansa sejarah dan kental dengan warisan budaya, dipilih karena memiliki berbagai macam kesenian bertaraf nasional dan internasional.",
        category: "Musik",
        price: 100000,
        stock: 496,
        userid: 1,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230729235526_64c5447e0ca9a.jpg",
        eventName: "INDONESIAN PRIVATE LESSONS",
        date: "04 Aug 2023",
        time: "11:00 - 13:00 WIB",
        location: "Mataram",
        description:
          "Bahasa Indonesia online school is a modern service of personal training in the Indonesian language. We help our students improve their knowledge and enjoy every lesson. Our school combines rich teaching experience and understanding of the processes of working in the Internet environment. People with various professional backgrounds: philologists, managers, representatives of technical professions — were able to find worthy application of their knowledge in our school. We are very sensitive to the issues of education, and position ourselves not as a base of tutors, but as a school. Due to this serious attitude to work, we have developed our own method of learning online. We are confident in the knowledge that our students receive, because all our teachers go through a three-stage selection process before starting work. And our experienced facilitators complete the onboarding process for a new teacher by teaching them how to deliver online classes most effectively.",
        category: "Pendidikan",
        price: 1000000,
        stock: 150,
        userid: 1,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230713111320_64af79e000357.jpg",
        eventName: "SOUTHWAVE PHASE 2",
        date: "04 Aug 2023",
        time: "18:00 - 23:00 WIB",
        location: "Jakarta",
        description: "Southwave Phase 1",
        category: "Musik",
        price: 25000,
        stock: 981,
        userid: 2,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230727015648.png",
        eventName: "Playlist Live Festival 2023",
        date: "21 Oct - 22 Oct 2023",
        time: "14:00 - 23:00 WIB",
        location: "Bandung",
        description: "Playlist Live Festival 2023",
        category: "Musik",
        price: 150000,
        stock: 749,
        userid: 2,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230604123900.jpg",
        eventName: "JOYLAND JAKARTA 2023",
        date: "24 Nov - 26 Nov 2023",
        time: "15:00 - 23:00 WIB",
        location: "Jakarta",
        description:
          "Music and arts festival held outdoors in open green space, Three days of live music, comedy, film, workshops, and marketplace across different areas of the venue, A multisensory festival that collaborates with artists in various creative fields",
        category: "Musik",
        price: 625000,
        stock: 500,
        userid: 2,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230622123346_6493dd3abc8ae.jpg",
        eventName: "CERTIFIED SCHOOL MANAGER",
        date: "07 Aug 2023",
        time: "16:00 - 18:00 WIB",
        location: "Online",
        description:
          "Untuk Anda yang ingin meningkatkan kemampuan di bidang Manajerial Sekolah. Mengulas 7 Modul Manajemen Sekolah secara aplikatif, inspiratif, dan komprehensif.",
        category: "Bisnis",
        price: 100000,
        stock: 168,
        userid: 2,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230624080618_6496418a2707a.jpg",
        eventName: "SEE THE LIGHT Leadership Workshop Samarinda 2023",
        date: "23 Aug - 25 Aug 2023",
        time: "09:00 - 11:00 WIB",
        location: "Samarinda",
        description:
          "JPCC Worship adalah tim pujian penyembahan dari Jakarta Praise Community Church (JPCC) yang awalnya dikenal dengan True Worshippers. Lagu-lagu mereka sudah dinyanyikan di seluruh Indonesia bahkan di mancanegara. Beberapa album terakhir mereka diterjemahkan ke berbagai bahasa seperti Jepang, Thai, Mandarin dan lainnya.",
        category: "Keagamaan",
        price: 100000,
        stock: 247,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230712075218.jpg",
        eventName: "LIVE AND LOUD",
        date: "05 Aug - 06 Aug 2023",
        time: "15:00 - 22:00 WIB",
        location: "Makassar",
        description:
          "Live and Loud adalah sebuah perayaan 20 tahun Chambers di Makassar. Dimotori oleh Chambers yang hadir sejak tahun 2003 dengan segala pergerakannya di dunia musik, desain, seni, fesyen, serta budaya urban. Kini akan ditampilkan dalam sebuah presentasi event yang melibatkan pelaku dan penggiat dari berbagai kalangan.",
        category: "Musik",
        price: 100000,
        stock: 293,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230727113218_64c1f3526672a.jpg",
        eventName:
          "Regular Class (RC) #KlubJagoNgomong Level Runner Offline Batch 2 JPS 8-15 Tahun",
        date: "12 Aug 2023",
        time: "13:00 - 15:00 WIB",
        location: "Jakarta",
        description:
          "Program ini merupakan kursus Public Speaking anak, yang dilakukan selama 8x pertemuan, Program ini diperuntukan untuk anak usia Junior Public Speaker (JPS) 8-15 Tahun, Program berlangsung selama 2-3 bulan per periode, dengan intensitas sebanyak 1x pertemuan dalam seminggu, Program ini adalah program berkelanjutan yang terdapat 3 Level, yaitu: Walker, Runner, dan Climber, Program dilaksanakan tanpa pendampingan dari orang tua",
        category: "Keluarga",
        price: 800000,
        stock: 200,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230718214642_64b6a5d28193d.jpg",
        eventName: "Publishing Photography with Brendan Embser",
        date: "14 Sep - 15 Sep 2023",
        time: "10:00 - 18:00 WIB",
        location: "Jakarta",
        description:
          "Join Brendan Embser, Aperture magazine’s senior editor, who will be flying to Jakarta to give a 2-day workshop in publishing photography. The workshop is designed as a small class for 12 participants to discuss editing, sequencing, and presenting photography. This program is suitable for photo publishers, editors, journalists, and photographers who are interested in publishing their works in the form of books, zines, and websites.",
        category: "Workshop",
        price: 400000,
        stock: 195,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230719213545_64b7f4c199f11.jpg",
        eventName: "Latih Professional Gesture",
        date: "27 Aug 2023",
        time: "08:00 - 18:00 WIB",
        location: "Surabaya",
        description:
          "Latih Professional Gesture. Bonus kelas komunikasi efektif tebel-tebel!",
        category: "Karir",
        price: 900000,
        stock: 200,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230726142755_64c0cafbdaed8.jpg",
        eventName: "Cikal-Amri After School Program: Sekolah Musik Cikal",
        date: "20 Jul - 30 Sep 2023",
        time: "14:25 - 17:25 WIB",
        location: "Jakarta",
        description:
          "Yuk bergabung dalam Cikal-Amri After School Program: Sekolah Musik Cikal! Dalam program ini, teman-teman dapat mengasah keterampilan audio-visual melalui kegiatan bermain alat musik yang dapat dipilih sesuai minat teman-teman.",
        category: "Keluarga",
        price: 1500000,
        stock: 150,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230803225505_64cbcdd9e35fc.jpg",
        eventName: "Festival Seni Beladiri",
        date: "27 Aug 2023",
        time: "14:30 - 17:15 WIB",
        location: "Yogyakarta",
        description:
          "Proudly present, Tapak Suci Muallimaat Jogja menghadirkan Festival Seni Beladiri yang bertema 'The Heritage Theatre of Majapahit Sadeng & Keta'.Dengan bangga mempersembahkan karya anak bangsa yang menceritakan Sadeng & Keta sebagai wilayah taklukan Majapahit. Tewasnya Nambi membawa duka sekaligus menyulut kemarahan Sadeng & Keta. Pasalnya, Nambi adalah orang yang berjasa mengangkat derajat dua daerah tersebut. Pemberontakan dapat dipadamkan oleh Gajah Mada, yang kemudian dinobatkan sebagai mahapatih pada 1334 oleh Ratu Tribhuwana Tunggadewi.",
        category: "Seni",
        price: 10000,
        stock: 498,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230714154605_64b10b4d9c9f7.jpg",
        eventName: "Indonesia Marketing Festival 2023 - BALI NUSRA",
        date: "31 Aug 2023",
        time: "09:00 - 17:00 WIB",
        location: "Bali",
        description:
          "The 11th Indonesia Marketing Festival! ENTREPRENEURIAL MARKETING : Winning The Post-Normal Era. Dapatkan strategi jitu untuk memenangkan persaingan di Post Normal Era dengan menggabungkan konsep CI-EL : Creativity, Innovation, Entrepreneurship, Leadership & PI-PM : Productivity, Improvement, Professionalism, Management",
        category: "Bisnis",
        price: 550000,
        stock: 400,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230714014653_64b0469d6fe49.jpg",
        eventName: "YOU RAISE ME UP - RAIS MARASABESSY (BALI)",
        date: "26 Aug 2023",
        time: "20:00 - 22:30 WIB",
        location: "Bali",
        description:
          "You Raise Me Up, adalah sebuah pertunjukan stand up comedy special dari Rais Marasabessy. Seorang komika/standup comedian dari SUCI 9 Kompas TV & komunitas Standupindo Jakarta Selatan. Bali, akan menjadi kota pembuka dalam rangkaian tour nya. Pertunjukan ini akan dibuka oleh Alif Rivelino (SUCI 9). Informasi venue akan segera kami infokan melalui email. Sampai jumpa!",
        category: "Komedi",
        price: 35000,
        stock: 495,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230723151036_64bce07c18647.jpg",
        eventName:
          "Nutrition Care Process pada Kasus Anak Gizi Buruk dengan Komplikasi Penyakit",
        date: "10 Aug 2023",
        time: "19:00 - 21:00 WIB",
        location: "Online",
        description:
          "Masalah gizi pada anak sangat kompleks dan memerlukan penanganan serius. Kondisi penyakit seperti infeksi bisa berdampak pada penurunan status gizi anak. Sebaliknya, kondisi kekurangan gizi pada anak juga bisa berdampak pada mudahnya mengalami masalah infeksi penyakit. Pada kelas ini Gizi Gama menghadirkan Profesional Education Series ke 004 yang mengangkat penanganan gizi pada anak dengan masalah gizi buruk, baik dalam konteks tidak adanya penyakit atau hadir bersamaan dengan penyakit tertentu. Kelas ini akan disampaikan oleh Ancelma Rayi Sari Pranasti, S.Gz, RD, seorang dietisien di Rumah Sakit Akademik Universitas Gadjah Mada yang banyak mengatasi masalah malnutrisi dan gizi buruk pada anak, terutama dalam perawatan mereka di rumah sakit.",
        category: "Kesehatan",
        price: 30000,
        stock: 998,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageUrl:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230721190229_64ba73d522018.jpg",
        eventName: "Black Camping - Batam",
        date: "25 Nov 2023",
        time: "19:30 - 22:00 WIB",
        location: "Batam",
        description:
          "“Black Camping” adalah sebuah pertunjukan stand-up comedy special ke-tiga oleh Abdur Arsyad yang mengangkat tema tentang dunia politik Indonesia. Dunia politik dalam “Black Camping” meliputi, aspek sejarah, aspek budaya dan juga kebiasaan politikus jugamasyarakat dalam menyambut Pemilu. Tak berhenti disitu, “Black Camping” juga akan membahas intrik-intrik kampanye hitam dan berita-berita hoaks yang menjamur ketika masa-masa kampanye. “Black Camping” ingin mengajak masyarakat untuk menyambut tahun politik dengan suka cita karena Pemilu adalah wadah untuk munculnya harapan-harapan baru terhadap kehidupan yang lebih baik melalui penyatuan ide dan kreatifitas.",
        category: "Komedi",
        price: 100000,
        stock: 499,
        userid: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
