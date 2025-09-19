import ProductCard from "@/app/components/ProductCard";
import { categories, Product, productsList } from '@/app/data/products';
import Link from 'next/link';

export default async function CategoryPage(props: { params: Promise<{category: string}>}) {
    const resolvedParams = await props.params;
    const categorySlug = resolvedParams.category.toLowerCase();
    const categoryInfo = categories.find((category) => category.slug === categorySlug);
    const categoryName = categoryInfo ? categoryInfo.name : resolvedParams.category;
    const categoryDescription = categoryInfo ? categoryInfo.description : "";
    const categoryColor = categoryInfo ? categoryInfo.color : "#003d5b";

    const categoryProducts: Product[] = productsList.filter(
        (product) => product.category.toLowerCase() === categorySlug,
    )
    
    return (
        <div className='max-w-7xl mx-auto px-4 py-12'>
            <div className='bg-gradient-to-r from-[#003d5b] to-[#00798c] rounded-2xl p-8 mb-12 text-white relative overflow-hidden'> 
                <div className='relative z-10'>
                    <h1 className='text-4xl font-bold mb-3'>{categoryName}</h1>
                    <p className='text-lg text-white/80 max-w-2xl'>{categoryDescription}</p>
                </div>
            </div>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    categoryProducts.length > 0 ? (
                        categoryProducts.map((product) => (
                            <ProductCard key={product.id} product={product} categorySlug={categorySlug} categoryColor={categoryColor} />
                        ))
                    ) : (
                        <p>No Products found in this category.</p>
                    )
                }
            </div>

            {/* back navigation */}
            <div className='mt-12 pt-6 border-t border-gray-200'>
                <Link href='/products' className='inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors'>
                    <i className='bx bx-left-arrow-alt mr-2 text-xl'></i> Back to All Categories
                </Link>
            </div>
        </div>
    );
}