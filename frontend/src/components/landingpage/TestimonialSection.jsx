import { testimonials } from '../../assets/data';

function StarRating({ rating }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.146 3.554a1 1 0 00.95.69h3.749c.969 0 1.371 1.24.588 1.81l-3.032 2.205a1 1 0 00-.364 1.118l1.147 3.554c.3.922-.755 1.688-1.539 1.118l-3.032-2.205a1 1 0 00-1.176 0l-3.032 2.205c-.783.57-1.838-.196-1.539-1.118l1.147-3.554a1 1 0 00-.364-1.118L2.416 8.98c-.783-.57-.38-1.81.588-1.81h3.75a1 1 0 00.95-.69l1.145-3.554z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-8">Trusted by Professionals Worldwide</h2>
        <p className="text-lg text-gray-600 mb-10">
          See what our users have to say about CloudShare
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg duration-200 flex flex-col items-start">
              <div className="flex items-center mb-3">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-3 border border-gray-200" />
                <div>
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="text-gray-700 mt-4 leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
