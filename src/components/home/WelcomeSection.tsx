export default function WelcomeSection() {
    return (
      <section className="relative px-6 pt-24 pb-16 w-full overflow-hidden">
        
  
        <div className="max-w-4xl mx-auto pt-12"> 
          {/* Modern heading */}
          <p className="font-[Amatic_SC] text-4xl md:text-5xl lg:text-6xl font-medium text-center tracking-tight dark:text-white text-gray-900 mb-6">
          <span className="inline-block h-px w-6 bg-purple-600 mr-3 align-middle"></span>
            Welcome Wanderers
            <span className="inline-block h-px w-6 bg-purple-600 ml-3 align-middle"></span>

          </p>
  
          {/* Modern content */}
          <div className="max-w-2xl mx-auto mb-16 text-center font-[Indie_Flower]">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Welcome to my humble blog about spirituality and self-development. Daily peace of mind is something I came
              to explore after years of chaos. No matter how busy the world is around all of us, it's important to
              remember that the meaning is much deeper than what our eyes are used to see.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Let's decode the meaning together and celebrate the small things. The small bits of knowledge that form the
              bigger picture.
            </p>
          </div>
  
          {/* Modern decorative element */}
          <div className="flex justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>
        </div>
      </section>
    )
  }
  