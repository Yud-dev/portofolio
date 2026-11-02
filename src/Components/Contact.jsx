import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Components/Navbar';
import emailImg from '../assets/email.png'; // Pastikan path file gambar sesuai

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xorordb', 'template_nqlb2sp', form.current, 'Nq2h6H4m27Mw3KyKj')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email.');
            });
    };

    const whatsappNumber = "6285726254253"; 
    
    // URL WhatsApp tanpa parameter pesan teks otomatis
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
            <Navbar />

            <div className="container mx-auto px-4 pt-20 pb-16">
                {/* Header Section */}
                {/* <div className="text-center mb-12">
                    <span className="px-3.5 py-1.5 mb-4 inline-block text-xs font-semibold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 backdrop-blur-md">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Together</span>
                    </h1>
                    <p className="text-slate-400 mt-3 max-w-lg mx-auto text-base md:text-lg">
                        Punya pertanyaan atau ingin merekrut saya? Kirimkan pesan atau hubungi langsung melalui WhatsApp.
                    </p>
                </div> */}

                {/* Main Card Container */}
                <div className="max-w-5xl mx-auto bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        
                
                        <div className="text-center relative group flex justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 w-full flex justify-center items-center">
                                <img 
                                    src={emailImg} 
                                    alt="Contact Illustration" 
                                    className="w-full max-h-[300px] object-contain drop-shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Kolom Kanan: Form Kontak */}
                        <div>
                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                {/* Input Name */}
                                <div>
                                    <input 
                                        type="text" 
                                        name="user_name" 
                                        required 
                                        className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                                        placeholder="Your Name"
                                    />
                                </div>

                                {/* Input Email */}
                                <div>
                                    <input 
                                        type="email" 
                                        name="user_email" 
                                        required 
                                        className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                                        placeholder="Your Email Address"
                                    />
                                </div>

                                {/* Input Subject */}
                                <div>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        required 
                                        className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                                        placeholder="Subject"
                                    />
                                </div>

                                {/* Textarea Message */}
                                <div>
                                    <textarea 
                                        name="message" 
                                        required 
                                        rows="4"
                                        className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition resize-none"
                                        placeholder="Write your message here..."
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <button 
                                        type="submit" 
                                        className="flex-1 py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition shadow-lg shadow-indigo-500/25 flex justify-center items-center gap-2 text-sm"
                                    >
                                        <span>Send Message</span>
                                        <i className="ri-send-plane-fill"></i>
                                    </button>

                                    <a 
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition shadow-lg shadow-emerald-500/25 flex justify-center items-center gap-2 text-sm text-decoration-none"
                                    >
                                        <i className="ri-whatsapp-line text-lg"></i>
                                        <span>Chat via WhatsApp</span>
                                    </a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;