const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'Project Manager',
      image: '/placeholder.svg?height=100&width=100',
      quote: 'CollabEdit has revolutionized the way our team works together. It\'s incredibly intuitive and has boosted our productivity significantly.',
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      image: '/placeholder.svg?height=100&width=100',
      quote: 'As a developer, I appreciate the real-time collaboration features. It\'s like pair programming, but for documents!',
    },
  ]
  
  const Testimonials = () => {
    return (
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What our users are saying
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full mr-4" src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials