import React from 'react';
import testimonialImg from '../assets/img/Ellipse 4.jpg'; // Mengimpor gambar yang akan digunakan dalam komponen.
import 'boxicons'; // Mengimpor ikon dari 'boxicons' untuk digunakan dalam komponen.

// Definisi komponen TestimonialCard
const TestimonialCard = () => {
  return (
    // Container utama dengan lebar 750px, background color 'secondary', padding 30px, dan sudut rounded-xl.
    <div className='w-[750px] bg-secondary p-[30px] rounded-xl'>
      <div className='flex items-center justify-between'>
        <img src={testimonialImg} alt='' />
        <i className='bx bxs-quote-left text-[60px] text-center text-accent scale-x-[-1]'></i>
      </div>
      <p className='pt-[40px] pb-[30px]'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
      </p>
      <h3 className='text-accent font-semibold'>Samual Karl</h3>
      <p className='font-semibold text-primary'>CEO</p>
    </div>
  );
};

export default TestimonialCard;
