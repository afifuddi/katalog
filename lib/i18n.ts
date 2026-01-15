export type Language = 'en' | 'id';

export const translations = {
    // Navbar
    nav: {
        home: { en: 'HOME', id: 'BERANDA' },
        catalog: { en: 'CATALOG', id: 'KATALOG' },
        export: { en: 'EXPORT', id: 'EKSPOR' },
        about: { en: 'ABOUT', id: 'TENTANG' },
        getQuote: { en: 'GET QUOTE', id: 'MINTA PENAWARAN' },
    },

    // Home Page
    home: {
        tagline: {
            en: 'Highland Coffee From North Sumatera',
            id: 'Kopi Dataran Tinggi Dari Sumatera Utara'
        },
        description: {
            en: 'A professional Indonesian coffee exporter delivering premium Arabica and Robusta sourced from the highland regions of North Sumatra and Aceh, renowned for their distinctive flavor profiles and consistent export-grade quality.',
            id: 'Eksportir kopi Indonesia profesional yang menyediakan kopi Arabika dan Robusta premium dari dataran tinggi Sumatera Utara dan Aceh, terkenal dengan profil rasa yang khas dan kualitas standar ekspor yang konsisten.'
        },
        browseCatalog: { en: 'Browse Catalog', id: 'Lihat Katalog' },
        ourStory: { en: 'Our Story', id: 'Kisah Kami' },
        coffeeOrigins: { en: 'Coffee Origins', id: 'Asal Kopi' },
        regions: { en: 'Regions', id: 'Wilayah' },
        altitudeRange: { en: 'Altitude Range', id: 'Rentang Ketinggian' },

        // Why Choose Us
        whyChooseUs: { en: 'Why Choose Us', id: 'Mengapa Memilih Kami' },
        ourCommitment: { en: 'Our Commitment', id: 'Komitmen Kami' },
        exportGradeQuality: { en: 'Export-Grade Quality', id: 'Kualitas Standar Ekspor' },
        exportGradeQualityDesc: {
            en: 'Strict quality control from harvesting, post-harvest handling, grading, sorting, to export preparation in compliance with international standards.',
            id: 'Kontrol kualitas yang ketat mulai dari panen, penanganan pasca panen, grading, penyortiran, hingga persiapan ekspor yang mematuhi standar internasional.'
        },
        farmerPartnership: { en: 'Farmer Partnership', id: 'Kemitraan Petani' },
        farmerPartnershipDesc: {
            en: 'Strong, transparent partnerships with smallholder farmers through sustainable sourcing practices and fair trade principles.',
            id: 'Kemitraan yang kuat dan transparan dengan petani kecil melalui praktik pengadaan yang berkelanjutan dan prinsip perdagangan yang adil.'
        },
        globalExport: { en: 'Global Export', id: 'Ekspor Global' },
        globalExportDesc: {
            en: 'Professional export management, timely delivery, and customized coffee solutions for roasters, importers, and distributors worldwide.',
            id: 'Manajemen ekspor profesional, pengiriman tepat waktu, dan solusi kopi yang disesuaikan untuk roaster, importir, dan distributor di seluruh dunia.'
        },

        // Origins
        ourOrigins: { en: 'Our Origins', id: 'Asal Kopi Kami' },
        premiumCoffeeRegions: { en: 'Premium Coffee Regions', id: 'Wilayah Kopi Premium' },
        originsDesc: {
            en: 'We source single-origin and specialty grade coffees from carefully selected smallholder farmers in Indonesia\'s most renowned coffee regions.',
            id: 'Kami mengolah kopi single-origin dan specialty grade dari petani kecil terpilih di wilayah penghasil kopi paling terkenal di Indonesia.'
        },

        // Quality Control
        qualityControl: { en: 'Quality Control', id: 'Kontrol Kualitas' },
        meetingIntlStandards: { en: 'Meeting International Standards', id: 'Memenuhi Standar Internasional' },
        qualityControlDesc: {
            en: 'Our operations are supported by strict quality control processes, from harvesting and post-harvest handling to grading, sorting, and export preparation, in compliance with international standards.',
            id: 'Operasional kami didukung oleh proses kontrol kualitas yang ketat, mulai dari panen dan penanganan pasca panen hingga grading, penyortiran, dan persiapan ekspor, sesuai dengan standar internasional.'
        },
        lotEvaluation: { en: 'Lot Evaluation', id: 'Evaluasi Lot' },
        lotEvaluationDesc: {
            en: 'Each lot is carefully evaluated for moisture content, screen size, defect tolerance, and cupping profile.',
            id: 'Setiap lot dievaluasi secara cermat untuk kadar air, ukuran biji, toleransi cacat, dan profil cupping.'
        },
        ethicalSourcing: { en: 'Ethical Sourcing', id: 'Pengadaan Etis' },
        ethicalSourcingDesc: {
            en: 'Empowering farmers with sustainable practices and fair trade principles.',
            id: 'Memberdayakan petani dengan praktik berkelanjutan dan prinsip perdagangan yang adil.'
        },
        professionalExport: { en: 'Professional Export', id: 'Ekspor Profesional' },
        professionalExportDesc: {
            en: 'Meeting expectations of roasters, importers, and distributors worldwide.',
            id: 'Memenuhi harapan roaster, importir, dan distributor di seluruh dunia.'
        },
        exploreOurCoffee: { en: 'Explore Our Coffee', id: 'Jelajahi Kopi Kami' },
    },

    // Catalog Page
    catalog: {
        ourCollection: { en: 'Our Coffee Collection', id: 'Koleksi Kopi Kami' },
        title: { en: 'Premium Indonesian Coffee', id: 'Kopi Indonesia Premium' },
        description: {
            en: 'Browse our selection of single-origin and specialty grade Arabica and Robusta beans from Siborong-Borong, Sidikalang, Mandailing, and Gayo Highlands.',
            id: 'Jelajahi pilihan biji kopi Arabika dan Robusta single-origin serta specialty grade kami dari Siborong-Borong, Sidikalang, Mandailing, dan Dataran Tinggi Gayo.'
        },
        beanType: { en: 'Bean Type', id: 'Jenis Biji' },
        region: { en: 'Region', id: 'Wilayah' },
        all: { en: 'All', id: 'Semua' },
        altitude: { en: 'Altitude', id: 'Ketinggian' },
        scaScore: { en: 'SCA Score', id: 'Skor SCA' },
        scaScoreInfo: {
            en: 'SCA Score is the Specialty Coffee Association\'s quality rating (0-100). Scores 80+ are considered specialty grade.',
            id: 'Skor SCA adalah penilaian kualitas oleh Specialty Coffee Association (0-100). Skor 80+ dianggap specialty grade.'
        },
        variety: { en: 'Variety', id: 'Varietas' },
        giCertified: { en: 'GI Certified', id: 'Bersertifikat IG' },
    },

    // Product Detail
    product: {
        backToCatalog: { en: 'Back to Catalog', id: 'Kembali ke Katalog' },
        aboutThisCoffee: { en: 'About This Coffee', id: 'Tentang Kopi Ini' },
        specifications: { en: 'Specifications', id: 'Spesifikasi' },
        origin: { en: 'Origin', id: 'Asal' },
        process: { en: 'Process', id: 'Proses' },
        moisture: { en: 'Moisture', id: 'Kadar Air' },
        defects: { en: 'Defects', id: 'Cacat' },
        recommendedUses: { en: 'Recommended Uses', id: 'Rekomendasi Penggunaan' },
        specialtyRoasters: { en: 'Specialty Roasters', id: 'Roaster Spesialti' },
        espressoBlends: { en: 'Espresso Blends', id: 'Campuran Espresso' },
        singleOrigin: { en: 'Single Origin', id: 'Single Origin' },
        requestQuote: { en: 'Request Quote', id: 'Minta Penawaran' },
        specSheet: { en: 'Spec Sheet', id: 'Lembar Spesifikasi' },
    },

    // Export Page
    export: {
        exportSolutions: { en: 'Export Solutions', id: 'Solusi Ekspor' },
        title: { en: 'Global Coffee Export', id: 'Ekspor Kopi Global' },
        description: {
            en: 'Professional export management for premium Indonesian coffee from North Sumatra and Aceh to buyers worldwide.',
            id: 'Manajemen ekspor profesional untuk kopi Indonesia premium dari Sumatera Utara dan Aceh ke pembeli di seluruh dunia.'
        },
        portOfLoading: { en: 'Port of Loading', id: 'Pelabuhan Muat' },
        moq: { en: 'MOQ', id: 'MOQ (Min. Order)' },
        moqValue: {
            en: 'Minimum 1 Ton (flexible based on customer needs)',
            id: 'Minimum 1 Ton (fleksibel sesuai kebutuhan customer)'
        },
        incoterms: { en: 'Incoterms', id: 'Incoterms' },
        incotermsFOB: { en: 'FOB (Free On Board)', id: 'FOB (Free On Board)' },
        incotermsCIF: { en: 'CIF (Cost, Insurance & Freight)', id: 'CIF (Cost, Insurance & Freight)' },
        incotermsCFR: { en: 'CFR (Cost & Freight)', id: 'CFR (Cost & Freight)' },
        incotermsNegotiable: { en: 'Negotiable', id: 'Dapat Dinegosiasikan' },
        supplyRegions: { en: 'Supply Regions', id: 'Wilayah Pasokan' },
        qualityControl: { en: 'Quality Control', id: 'Kontrol Kualitas' },
        meetingIntlStandards: { en: 'Meeting International Standards', id: 'Memenuhi Standar Internasional' },
        exportProcess: { en: 'Export Process', id: 'Proses Ekspor' },
        orderProcessing: { en: 'Order Processing', id: 'Pemrosesan Pesanan' },
        orderProcessingDesc: {
            en: 'Orders are processed within 2-3 business days after confirmation.',
            id: 'Pesanan diproses dalam 2-3 hari kerja setelah konfirmasi.'
        },
        qualityCheck: { en: 'Quality Check', id: 'Pemeriksaan Kualitas' },
        qualityCheckDesc: {
            en: 'Final cupping and grading before stuffing into containers.',
            id: 'Cupping dan grading akhir sebelum pemuatan ke dalam kontainer.'
        },
        documentation: { en: 'Documentation', id: 'Dokumentasi' },
        documentationDesc: {
            en: 'ICO Certificate, Bill of Lading, Phytosanitary, and Invoice provided promptly.',
            id: 'Sertifikat ICO, Bill of Lading, Phytosanitary, dan Invoice disediakan dengan segera.'
        },
    },

    // Quote Form
    form: {
        requestQuote: { en: 'Request a Quote', id: 'Minta Penawaran' },
        companyName: { en: 'Company Name', id: 'Nama Perusahaan' },
        email: { en: 'Email', id: 'Email' },
        destinationPort: { en: 'Destination Port', id: 'Pelabuhan Tujuan' },
        coffeeOriginInterest: { en: 'Coffee Origin Interest', id: 'Minat Asal Kopi' },
        selectOrigin: { en: 'Select origin', id: 'Pilih asal' },
        message: { en: 'Message', id: 'Pesan' },
        sendRequest: { en: 'Send Request', id: 'Kirim Permintaan' },
        sending: { en: 'Sending...', id: 'Mengirim...' },
        successMessage: {
            en: 'Thank you! Your quote request has been submitted successfully.',
            id: 'Terima kasih! Permintaan penawaran Anda telah berhasil dikirim.'
        },
        errorMessage: {
            en: 'An error occurred. Please try again later.',
            id: 'Terjadi kesalahan. Silakan coba lagi nanti.'
        },
    },

    // About Page
    about: {
        aboutUs: { en: 'About Us', id: 'Tentang Kami' },
        subtitle: { en: 'AF Brother Group - Highland Coffee From North Sumatera', id: 'AF Brother Group - Kopi Dataran Tinggi Dari Sumatera Utara' },
        whoWeAre: { en: 'Who We Are', id: 'Siapa Kami' },
        professionalExporter: { en: 'Professional Indonesian Coffee Exporter', id: 'Eksportir Kopi Indonesia Profesional' },
        whoWeAreDesc1: {
            en: 'PT Agro Beans Global (AF Brother Group) is a professional Indonesian coffee exporting company dedicated to delivering premium-quality Arabica and Robusta coffee from the world-renowned coffee regions of North Sumatra and Aceh.',
            id: 'PT Agro Beans Global (AF Brother Group) adalah perusahaan eksportir kopi Indonesia profesional yang berdedikasi untuk mengirimkan kopi Arabika dan Robusta kualitas premium dari wilayah penghasil kopi ternama dunia di Sumatera Utara dan Aceh.'
        },
        whoWeAreDesc2: {
            en: 'Carefully sourced from Indonesia\'s renowned highland coffee regions, including Sigararutang, Sidikalang, Mandailing, and the Gayo Highlands (Geographical Indication regions).',
            id: 'Dipilih dengan cermat dari wilayah kopi dataran tinggi ternama Indonesia, termasuk Sigararutang, Sidikalang, Mandailing, dan Dataran Tinggi Gayo (wilayah Indikasi Geografis).'
        },
        ourApproach: { en: 'Our Approach', id: 'Pendekatan Kami' },
        partnershipModel: { en: 'Partnership-Based Sourcing Model', id: 'Model Pengadaan Berbasis Kemitraan' },
        ourApproachDesc: {
            en: 'Through a strong partnership-based sourcing model, we directly connect local farmers with global markets ensuring traceability, sustainability, and consistent export-grade quality at every stage of the supply chain.',
            id: 'Melalui model pengadaan berbasis kemitraan yang kuat, kami menghubungkan petani lokal secara langsung dengan pasar global untuk menjamin ketertelusuran, keberlanjutan, dan kualitas standar ekspor yang konsisten di setiap tahap rantai pasok.'
        },
        quote: {
            en: 'PT Agro Beans Global believes that exceptional coffee starts at its origin through responsible farming, careful cultivation, and close collaboration with our partner farmers.',
            id: 'PT Agro Beans Global percaya bahwa kopi luar biasa dimulai dari asalnya melalui pertanian yang bertanggung jawab, budidaya yang cermat, dan kolaborasi erat dengan petani mitra kami.'
        },
        ourVision: { en: 'Our Vision', id: 'Visi Kami' },
        visionDesc: {
            en: 'To become a trusted global partner in supplying premium Indonesian coffee, recognized for consistent quality, ethical sourcing, and long-term value creation across international markets.',
            id: 'Menjadi mitra global terpercaya dalam memasok kopi Indonesia premium, yang dikenal akan kualitas konsisten, pengadaan etis, dan penciptaan nilai jangka panjang di seluruh pasar internasional.'
        },
        ourMission: { en: 'Our Mission', id: 'Misi Kami' },
        ourLocations: { en: 'Our Locations', id: 'Lokasi Kami' },
        whereWeOperate: { en: 'Where We Operate', id: 'Tempat Kami Beroperasi' },
        fromFarmToGlobal: { en: 'From highland farms to global markets', id: 'Dari kebun dataran tinggi ke pasar global' },
        headOffice: { en: 'Head Office', id: 'Kantor Pusat' },
        production: { en: 'Production', id: 'Produksi' },
        readyToPartner: { en: 'Ready to Partner With Us?', id: 'Siap Bermitra Dengan Kami?' },
        partnerDesc: {
            en: 'Whether you\'re a large importer or a specialty roaster, we have the right beans for you.',
            id: 'Baik Anda importir besar maupun roaster spesialti, kami memiliki biji kopi yang tepat untuk Anda.'
        },
    },

    // Footer
    footer: {
        quickLinks: { en: 'Quick Links', id: 'Tautan Cepat' },
        ourCoffee: { en: 'Our Coffee', id: 'Kopi Kami' },
        exportSolutions: { en: 'Export Solutions', id: 'Solusi Ekspor' },
        aboutUs: { en: 'About Us', id: 'Tentang Kami' },
        contactUs: { en: 'Contact Us', id: 'Hubungi Kami' },
        followUs: { en: 'Follow Us', id: 'Ikuti Kami' },
        ourRegions: { en: 'Our Regions', id: 'Wilayah Kami' },
    },

    // Missions (array)
    missions: {
        en: [
            "To deliver export-grade Arabica and Robusta coffee from North Sumatra and Aceh with consistent quality, traceability, and reliable supply.",
            "To build strong, transparent partnerships with smallholder farmers by implementing sustainable sourcing practices and fair trade principles.",
            "To apply strict quality control standards across harvesting, post-harvest processing, grading, and export preparation to meet international buyer specifications.",
            "To support global roasters, importers, and distributors with professional export management, timely delivery, and customized coffee solutions.",
            "To promote Indonesian single-origin coffee to the global market while creating long-term economic and social value for farming communities."
        ],
        id: [
            "Menyediakan kopi Arabika dan Robusta standar ekspor dari Sumatera Utara dan Aceh dengan kualitas konsisten, ketertelusuran, dan pasokan yang andal.",
            "Membangun kemitraan yang kuat dan transparan dengan petani kecil melalui penerapan praktik pengadaan berkelanjutan dan prinsip perdagangan yang adil.",
            "Menerapkan standar kontrol kualitas yang ketat mulai dari panen, pemrosesan pasca panen, grading, hingga persiapan ekspor untuk memenuhi spesifikasi pembeli internasional.",
            "Mendukung roaster, importir, dan distributor global dengan manajemen ekspor profesional, pengiriman tepat waktu, dan solusi kopi yang disesuaikan.",
            "Mempromosikan kopi single-origin Indonesia ke pasar global sekaligus menciptakan nilai ekonomi dan sosial jangka panjang bagi komunitas petani."
        ]
    }
};

export function t(key: string, lang: Language): string {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = (value as Record<string, unknown>)[k];
        } else {
            return key;
        }
    }

    if (value && typeof value === 'object' && lang in value) {
        return (value as Record<string, string>)[lang];
    }

    return key;
}
