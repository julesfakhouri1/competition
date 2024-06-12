import Link from 'next/link';

const Solution = () => {
    return (
        <section className="py-8 bg-white px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Notre Solution</h2>
            <div className="flex flex-col items-center space-y-[27px] md:space-y-0 md:flex-row md:space-x-[27px]">
                <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <img src="/images/solution1.png" alt="Solution 1" className="w-24 h-24 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Notre Engagement</h3>
                    <p className="text-gray-600 text-center">Briser l'isolement des seniors et aider les enfants à trouver des grands-parents
                        de cœur.</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <img src="/images/solution2.png" alt="Solution 2" className="w-24 h-24 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Moments de Partage</h3>
                    <p className="text-gray-600 text-center">Participer à des rencontres et activités en présentiel pour créer des liens entre générations.</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <img src="/images/solution3.png" alt="Solution 3" className="w-24 h-24 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Rester Connectés</h3>
                    <p className="text-gray-600 text-center">Utiliser notre plateforme pour échanger régulièrement avec vos petits-enfants de cœur, où qu'ils soient.</p>
                </div>
            </div>
        </section>
    );
};

export default Solution;
