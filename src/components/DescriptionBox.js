import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='pt-10'>
      <div>
        <div className='flex gap-2 py-3'>
            <button className='bg-slate-300 px-3 py-3 border border-zinc-400'>Description</button>
            <button className='bg-slate-300 px-3 py-3 border border-zinc-400'>Revies(122)</button>
        </div>
        <div className='bg-blue-100 px-3 py-4'>
            <p className='font-semibold'>Key Features:</p>
            <p>
            Premium Fabric: Made from high-quality [Material], ensuring durability and comfort.
            Modern Fit: Tailored to provide a flattering silhouette while offering freedom of movement.
            Elegant Design: Features [Design Elements, e.g., a classic neckline, stylish buttons, etc.], making it suitable for various occasions.
            Versatile Style: Perfect for [Suitable Occasions, e.g., casual wear, office attire, evening outings, etc.].
            Easy Care: Machine washable and easy to maintain, ensuring it remains a staple in your wardrobe for years to come.
            </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
