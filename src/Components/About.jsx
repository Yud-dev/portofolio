import React from 'react';
import Navbar from '../Components/Navbar';
import aboutimage from '../assets/aboutimage.png';
import WaveBackground from '../Components/WaveBackground';
import { TypeAnimation } from 'react-type-animation';
// import dasarpemrograman from '../assets/DASAR PEMROGRAMAN WEB SERTIFIKAT.jpg'
// import fundamental from '../assets/FUNDAMENTAL JUNIOR WEB DEVELOPER SERTIFIKAT.jpg'
// import konsep from '../assets/KONSEP PEMROGRAMAN SERTIFIKAT.jpg'
const About = () => {

    const certificates = [
        {
            title: "Fundamental Junior Web Developer",
            issuer: "Komdigi",
            year: "2025",
            link: "/fundamental_Junior.jpg" // Ganti dengan link kredensial Anda
        },
        {
            title: "Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            year: "2024",
            link: "/DASAR PEMROGRAMAN WEB SERTIFIKAT.jpg" // Ganti dengan link kredensial Anda
        },
          {
            title: "Konsep Pemrograman",
            issuer: "Komdigi",
            year: "2025",
            link: "/konseppemrograman.jpg" // Ganti dengan link kredensial Anda
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
            <Navbar />
            
     
            <WaveBackground>
                <div className="container mx-auto px-4 pt-16 pb-12 flex flex-col items-center text-center z-10 relative">
                    <span className="px-3.5 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 backdrop-blur-md">
                        Get To Know Me
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Me</span>
                    </h1>
                </div>
            </WaveBackground>

          
            <section className="container mx-auto px-4 py-8 relative z-10">
                <div className="bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    
                    {/* Kotak Gambar dengan Efek Border Glow */}
                    <div className="relative group w-full md:w-1/3 flex justify-center">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <img 
                            src={aboutimage} 
                            alt="Profile" 
                            className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl shadow-xl object-cover border border-slate-700/50" 
                        />
                    </div>

                    {/* Deskripsi Tambahan Portofolio dengan Efek Mengetik */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Who am I?
                        </h2>
                        
                        <div className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base min-h-[70px]">
                            <TypeAnimation
                                sequence={[
                                    'I am a fresh graduate Informatics Engineering student specializing in web development. Always eager to learn new things.',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={0}
                            />
                        </div>

                        {/* Tombol Aksi Opsional */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a href="https://www.linkedin.com/in/yudhisyudhistiraramadhani/" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition shadow-lg shadow-indigo-500/25">
                                Let's Connect
                            </a>
                            <a href="#resume" className="flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer" 
  onClick={() => window.open('/CV.pdf', '_blank')} >
                                View Resume
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* Bagian Sertifikat (Certificates Section) */}
            <section className="container mx-auto px-4 py-8 mb-16 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left border-b border-slate-800 pb-3">
                        Licenses & <span className="text-indigo-400">Certificates</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certificates.map((cert, index) => (
                            <div 
                                key={index} 
                                className="bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-md rounded-xl p-5 transition duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                                        {cert.issuer} • {cert.year}
                                    </span>
                                    <h4 className="text-base font-semibold text-white mt-1 mb-2">
                                        {cert.title}
                                    </h4>
                                </div>
                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 mt-3"
                                >
                                    Lihat Sertifikat &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;