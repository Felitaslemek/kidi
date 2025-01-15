import React, { useState } from 'react';
import { Star } from 'lucide-react';

function Testimonial() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Andrian Tara',
      text: 'Corndognya enak, topingnya banyak... worth it banget buat dicoba',
      rating: 4
    },
    {
      id: 2,
      name: 'Bagas D',
      text: 'Churrosnya enak banget, apalagi rasanya unik',
      rating: 5
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    text: '',
    rating: 0
  });

  const handleStarClick = (rating) => {
    setNewTestimonial({ ...newTestimonial, rating });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.text && newTestimonial.rating > 0) {
      setTestimonials([...testimonials, { ...newTestimonial, id: Date.now() }]);
      setNewTestimonial({ name: '', text: '', rating: 0 });
      setShowForm(false);
    }
  };

  const StarRating = ({ rating, onStarClick }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onStarClick && onStarClick(star)}
            className="focus:outline-none"
          >
            <Star
              className={`w-5 h-5 ${
                star <= rating ? 'fill-blue-500 text-blue-500' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  }; 

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
      <p className="text-lg font-regular mb-4 text-gray-600">Testimoni</p>
        <h2 className="text-2xl font-semibold mb-2">
          Cerita mereka <span className="text-blue-500 text-2xl font-semibold">bermula</span> ketika
        </h2>
        <h3 className="text-2xl font-semibold mb-4">
          mencoba jajanan kami 🥰
        </h3>
        <p className="text-gray-600 font-regular">
          Ayo berikan testimoni Anda
        </p>
      </div>

      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-6 pb-4" style={{ minWidth: 'max-content' }}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md w-80"
            >
              <h3 className="font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowForm(!showForm)}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
      >
        Berikan testimoni →
      </button>

      {showForm && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newTestimonial.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
                Testimoni
              </label>
              <textarea
                id="text"
                name="text"
                value={newTestimonial.text}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <StarRating rating={newTestimonial.rating} onStarClick={handleStarClick} />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Kirim Testimoni →
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Testimonial;
